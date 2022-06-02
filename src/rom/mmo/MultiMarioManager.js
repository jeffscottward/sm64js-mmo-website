import { Sm64JsMsg, MarioMsg, ControllerListMsg, ControllerMsg, ValidPlayersMsg } from "../../proto/mario_pb"
import { GameInstance as Game } from "../game/Game"
import zlib from "zlib"
import * as RAW from "../include/object_constants"
import { networkData, gameData } from "./socket"
import { defaultSkinData } from "./cosmetics"
import { INTERACT_PLAYER } from "../game/Interaction"
import { gLinker } from "../game/Linker"
import { selfAdmin } from "./chat"

export const levelIdToName = {
    4: "Big Boo's Haunt",
    5: "Cool, Cool Mountain",
    6: "Castle Inside First Level",
    7: "Hazy Maze Cave",
    8: "Shifting Sand Land",
    9: "Bob-omb Battlefield",
    10: "Snowman's Land",
    16: "Castle Grounds",
    24: "Whomp's Fortress",
    26: "Castle Courtyard",
    27: "Princess's Secret Slide",
    29: "Tower of the Wing Cap",
    36: "Tall, Tall Mountain",
    56: "Cool, Cool Mountain Slide",
    602: "Castle Inside Second Level",
    999: "Clouded Ruins",
    1000: "Mushroom Battlefield",
    1001: "CTF/Race Map",
    1002: "Starman Fortress",
    1003: "Glider Jungle",
    1004: "Mushroom Raceway",
    1006: "Dolphin Town",
  };

const url = new URL(window.location.href)

const rawDataMap = {
    0: RAW.oMarioPoleYawVel,
    1: RAW.oMarioPolePos,
    2: RAW.oIntangibleTimer,
    3: RAW.oActiveParticleFlags
}

const getMarioRawDataSubset = (fullRawData) => {
    return Object.values(rawDataMap).map(valueType => {
        return parseInt(fullRawData[valueType])
    })
}

const expandRawDataSubset = (subset, currentRawData) => {
    const rawData = currentRawData ? currentRawData : new Array(0x50).fill(0)
    Object.entries(rawDataMap).forEach(([subsetIndex, rawDataIndex]) => {
        rawData[rawDataIndex] = subset[subsetIndex]
    })
    return rawData
}

const updateRemoteMarioState = (id, marioProto) => {

    const controllerProto = marioProto.getController()
    applyController(controllerProto)

    /// other mario updates
    networkData.remotePlayers[id].marioUpdate = marioProto.toObject()

}

export const copyMarioUpdateToState = (remotePlayer) => {
    const m = remotePlayer.marioState
    const update = remotePlayer.marioUpdate

    m.actionState = (m.action != update.action) ? 0 : update.actionstate
    m.actionTimer = (m.action != update.action) ? 0 : update.actiontimer
    m.health = update.health
    m.action = update.action
    m.prevAction = update.prevaction
    m.actionArg = update.actionarg
    m.invincTimer = update.invinctimer
    m.framesSinceA = update.framessincea
    m.framesSinceB = update.framessinceb
    m.wallKickTimer = update.wallkicktimer
    m.doubleJumpTimer = update.doublejumptimer
    m.angleVel = update.anglevelList
    m.forwardVel = update.forwardvel
    m.vel = update.velList
    m.pos = update.posList
    m.faceAngle = update.faceangleList
    m.socket_id = update.socketid
	const PVP = (update.pvp === true ? 0x1 : 0x0)
    m.pvp = PVP //; console.log(`PVP_IN:${PVP}`)

    m.marioObj.rawData = expandRawDataSubset(update.rawdataList, m.marioObj.rawData)
    m.marioObj.rawData[RAW.oRoom] = -1

    if (update.usedobjid >= 1000 && update.usedobjid <= 2000) {
        m.usedObj = gameData.spawnObjectsBySyncID[update.usedobjid - 1000]
    }

    remotePlayer.marioUpdate = null

}

export const createMarioProtoMsg = () => {

    const m = gameData.marioState

    const mariomsg = new MarioMsg()
    if (selfAdmin && m.marioObj.localMario) { window.sm64js.debug.preMultiMario(m, mariomsg) }

    mariomsg.setController(createControllerProtoMsg())
    mariomsg.setHealth(m.health)
    mariomsg.setAction(m.action)
    mariomsg.setPrevaction(m.prevAction)
    mariomsg.setActionstate(m.actionState)
    mariomsg.setActiontimer(m.actionTimer)
    mariomsg.setActionarg(m.actionArg < 0 ? 65536 - m.actionArg : m.actionArg)
    mariomsg.setInvinctimer(m.invincTimer)
    mariomsg.setFramessincea(m.framesSinceA)
    mariomsg.setFramessinceb(m.framesSinceB)
    mariomsg.setWallkicktimer(m.wallKickTimer)
    mariomsg.setDoublejumptimer(m.doubleJumpTimer)
    mariomsg.setFaceangleList(m.faceAngle)
    mariomsg.setAnglevelList(m.angleVel)
    mariomsg.setPosList(m.pos)
    mariomsg.setVelList(m.vel)
    mariomsg.setForwardvel(m.forwardVel)
	const PVP = (Game.pvpEnabled === true ? 0x1 : 0x0)
    mariomsg.setPvp(PVP) //; console.log(`PVP_OUT:${PVP}`)

    if (m.usedObj) mariomsg.setUsedobjid(m.usedObj.rawData[RAW.oSyncID])

    mariomsg.setRawdataList(getMarioRawDataSubset(m.marioObj.rawData))
    mariomsg.setSocketid(networkData.mySocketID)

    if (selfAdmin && m.marioObj.localMario) { window.sm64js.debug.postMultiMario(m, mariomsg) }

    return mariomsg
}

const initNewRemoteMarioState = (marioProto) => {

    const m = gameData.marioState

    const newMarioState = {

        socket_id: marioProto.getSocketid(),

        actionTimer: marioProto.getActiontimer(),
        actionState: marioProto.getActionstate(),
        actionArg: marioProto.getActionarg(),
        framesSinceA: 0xFF,
        framesSinceB: 0xFF,
        invincTimer: 0,
        flags: m.flags,
        forwardVel: marioProto.getForwardvel(),
        health: 0x880,
		pvp: 0x1,
        squishTimer: 0,
        hurtCounter: 0,
        healCounter: 0,
        capTimer: 0,
        quicksandDepth: 0.0,
        area: m.area,
        unkB0: 0xBD,
        statusForCamera: {},
        animation: {},
        marioBodyState: {
            action: 0, capState: 0, eyeState: 0, grabPos: 0,
            handState: 0, headAngle: [0, 0, 0], modelState: 0, punchState: 0,
            torsoAngle: [0,0,0], torsoPos: [0,0,0]
        },
        marioObj: {
            header: {
                gfx: {
                    angle: [0, 0, 0],
                    pos: [0, 0, 0],
                    scale: [1, 1, 1],
                    sharedChild: m.marioObj.header.gfx.sharedChild,
                    unk18: m.marioObj.header.gfx.unk18,
                    unk38: {
                        animID: -1, animFrame: 0,
                        animFrameAccelAssist: 0, animAccel: 0x10000,
                        animTimer: 0,
                        curAnim: 0,
                    },
                    node: {
                        children: [],
                        flags: 33,
                        type: 24
                    }
                }
            },
            remoteMario: true,
            hitboxDownOffset: 0,
            hitboxHeight: 160,
            hitboxRadius: 37,
            collidedObjs: [],
            rawData: expandRawDataSubset(marioProto.getRawdataList()),
            bhvScript: { commands: gLinker.behaviors.bhvMario, index: 0 }
        },
        faceAngle: marioProto.getFaceangleList(),
        angleVel: marioProto.getAnglevelList(),
        pos: marioProto.getPosList(),
        vel: marioProto.getVelList(),
        action: marioProto.getAction(),
        ignoreUpdates: 0
    }

    newMarioState.marioObj.rawData[RAW.oInteractType] = INTERACT_PLAYER
    newMarioState.marioObj.rawData[RAW.oRoom] = -1

    newMarioState.marioObj.marioState = newMarioState
    newMarioState.marioObj.header.wrapperObject = newMarioState.marioObj
    newMarioState.marioObj.header.gfx.wrapperObjectNode = newMarioState.marioObj.header
    newMarioState.marioObj.header.gfx.node.wrapper = newMarioState.marioObj.header.gfx

    return newMarioState
}

export const createControllerProtoMsg = () => {
    const m = gameData.marioState
    const controllermsg = new ControllerMsg()
    //// fill out controller msg
    controllermsg.setStickx(m.controller.stickX)
    controllermsg.setSticky(m.controller.stickY)
    controllermsg.setStickmag(m.controller.stickMag)
    let buttonDown = 0
    buttonDown |= (m.controller.buttonDownA << 0)
    buttonDown |= (m.controller.buttonDownB << 1)
    buttonDown |= (m.controller.buttonDownZ << 2)
    buttonDown |= (m.controller.buttonDownStart << 3)
    controllermsg.setButtondown(buttonDown)

    let buttonPressed = 0
    buttonPressed |= (m.controller.buttonPressedA << 0)
    buttonPressed |= (m.controller.buttonPressedB << 1)
    buttonPressed |= (m.controller.buttonPressedZ << 2)
    buttonPressed |= (m.controller.buttonPressedStart << 3)
    controllermsg.setButtonpressed(buttonPressed)

    controllermsg.setCamerayaw(m.area.camera.yaw)

    controllermsg.setSocketid(networkData.mySocketID)

    return controllermsg
}

const applyController = (controllerProto) => {
    const id = controllerProto.getSocketid()
    if (networkData.remotePlayers[id] == undefined) return
    const m = networkData.remotePlayers[id].marioState
    const buttonDown = controllerProto.getButtondown()
    const buttonPressed = controllerProto.getButtonpressed()
    m.controller = {
        stickX: controllerProto.getStickx(),
        stickY: controllerProto.getSticky(),
        stickMag: controllerProto.getStickmag(),
        buttonDownA: buttonDown & 0x1,
        buttonDownB: buttonDown & 0x2,
        buttonDownZ: buttonDown & 0x4,
        buttonDownStart: buttonDown & 0x8,
        buttonPressedA: buttonPressed & 0x1,
        buttonPressedB: buttonPressed & 0x2,
        buttonPressedZ: buttonPressed & 0x4,
        buttonPressedStart: buttonPressed & 0x8,
        cameraYaw: controllerProto.getCamerayaw()
    }
}

export const recvControllerUpdate = (controllerbytes) => {
    zlib.inflate(controllerbytes, (err, buffer) => {
        if (!err) {
            const controllerListProto = ControllerListMsg.deserializeBinary(buffer).getControllerList()
            controllerListProto.forEach(proto => {
                applyController(proto)
            })
        }
    })
}

export const recvPlayerLists = (playerListsProto) => {

    const rooms = playerListsProto.getGameList()

    if (window.playerNameAccepted) { // joined a game

        if (rooms.length != 1) {
            console.log("ignoring data ", rooms.length)
            return
        }

        const roomProto = rooms[0]
        const level = roomProto.getLevelId() 
        if (level != window.selectedMap) throw "error valid player list level does not match loaded level"
        const validplayers = roomProto.getValidplayersList()
        networkData.numOnline = validplayers.length

        Object.keys(networkData.remotePlayers).forEach(socket_id => {
            if (!validplayers.includes(parseInt(socket_id))) {
                delete networkData.remotePlayers[socket_id]
            }
        })

    } else { /// still in a lobby

        rooms.forEach(roomProto => {
            const roomKey = roomProto.getLevelId()

            const mapSelecter = document.getElementById("mapSelect")

            for (let i = 0; i < mapSelecter.length; i++) {
                if (mapSelecter[i].value == roomKey) {
                    mapSelecter[i].innerHTML =
                        `<p style="color:blue">${levelIdToName[roomKey]}</p> 
                     <p style="color:blue"> - Online Players: ${roomProto.getValidplayersList().length}</p>`

                }
            }
        })

    }

}


export const recvMarioData = (marioList) => {
    window.sm64js.debug.marioList = marioList
    marioList.forEach(marioProto => {
        const id = marioProto.getSocketid()
        if (id == networkData.mySocketID) return

        if (networkData.remotePlayers[id] == undefined) {
            networkData.remotePlayers[id] = { 
                marioState: initNewRemoteMarioState(marioProto),
                skinData: defaultSkinData(),
                crashCount: 0,
                skipRender: 0
            }
            applyController(marioProto.getController())
        } else {
            updateRemoteMarioState(id, marioProto)
        }
    })


}
