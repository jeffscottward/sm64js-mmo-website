import * as IDB from 'idb-keyval'
import msgpack from 'msgpack-lite'

import { n64GfxProcessorInstance as GFX } from './graphics/n64GfxProcessor'
import { loadDataIntoGame } from './romTextureLoader.js'

import { set_vp } from './include/config'
import * as Gbi from './include/gbi'

import { GameInstance as Game } from './game/Game'
import { PrintInstance } from './game/Print.js'
import { viewport } from './game/Area'
import * as Mario from './game/Mario.js'
import * as cam from './game/Camera.js'

import { selfAdmin } from './mmo/chat'
import * as Socket from './mmo/socket.js'
import './mmo/cosmetics'
import './mmo/cmts_cosmetics'

import * as inp from './player_input_manager.js'

// WINDOW OBJECTS

//ACTIONS
// window.pvp
// window.togglePvp
// window.toggleWidescreen
// window.enterFullScreenMode
// window.switchbox
// window.deleteRom

//STATE
// window.sm64js
// window.sm64js.debug.ext
// window.sm64js.reset
// window.sm64js.fps
// window.sm64js.latency
// window.sm64js.fps
// window.sm64js.widescreen

//LOOKUP
// window.location.hash.slice
// window.location.search
// window.location.href
// window.screen.width
// window.screen.height

//REACTIVE
// window.onload
// window.addEventListener

const $ = document.querySelector
const send_display_list = (gfx_list) => GFX.run(gfx_list)

window.pvp = true
// !! hack - Running this function after this is set to true will allow access to things like Gbi from sm64js.debug!
window.sm64js = {
  fps: 0,
  fov: 45,
  latency: 0,
  totalTrianges: 0,
  playerInput: {},
  gGlobalTimer: 0,
  reset: false,
  snow: false,
  HUDHidden: false,
  widescreen: false,
  redive: true,
  filter: 2,
  debug: {
    marioList: [],
    print: PrintInstance,
    preInput: function (m) {},
    postInput: function (m) {},
    preNetworkRender: function (networkData, gameData) {},
    postNetworkRender: function (networkData, gameData) {},
    preMultiMario: function (m, mariomsg) {},
    postMultiMario: function (m, mariomsg) {},
    preCamera: function (c, g, m) {},
    postCamera: function (c, g, m) {},
    customCanvas: function (context2d, gameData, networkData) {},
    ext: {},
    updateDebug: function () {
      if (selfAdmin) {
        window.sm64js.debug.ext = {
          GBI: Gbi,
          mario: Mario,
          game: Game,
          camera: cam,
          input: inp,
        }
      }
    },
  },
}

let n_frames = 0
let target_time = 0
let frameSpeed = 0.03
let reset_delay = 0
export const textureVersion = 41

const produce_one_frame = () => {
  let respText = ''
  if (reset_delay > 0) {
    window.sm64js.reset = false
    let buff = Math.round(reset_delay / 30)
    respText = ` (${buff})`
    reset_delay--
  }

  const start_frame = performance.now()
  inp.playerInputUpdate() /// Keyboard buttons / joystick process to game input commands
  //Socket.send_controller_update(n_frames)
  GFX.start_frame()
  Game.main_loop_one_iteration()
  Socket.post_main_loop_one_iteration(n_frames)
  /// Audio TODO

  const finished_frame = performance.now()
  totalFrameTimeBuffer.push(finished_frame - start_frame)

  if (window.sm64js.reset && reset_delay < 1) reset_delay = 30 * 45 /// 45 Seconds

  //if (n_frames > 100000) { throw "Hit max frames" }
  //console.log("new frame: " + n_frames)
  n_frames++

  $('#respawnButton').innerHTML = `Respawn${respText}`
}

//// implementation from Emil <3
const on_anim_frame = (time) => {
  time *= frameSpeed

  if (time >= target_time + 10.0) {
    // We are lagging 10 frames behind, probably due to coming back after inactivity,
    // so reset, with a small margin to avoid potential jitter later.
    target_time = time - 0.01
  }

  for (let i = 0; i < 2; i++) {
    // If refresh rate is 15 Hz or something we might need to generate two frames
    if (time >= target_time) {
      produce_one_frame()
      target_time = target_time + 1.0
    }
  }

  requestAnimationFrame(on_anim_frame)
}

const main_func = () => {
  /// WebGL class and n64GfxProcessor class are initialized with their constructor when they are imported
  Game.attachInterfaceToGfxProcessor(send_display_list)

  on_anim_frame()
}

//const url_hash = new URLSearchParams(window.location.hash.slice(1))
const url_params = new URLSearchParams(window.location.search)

const createRingBuffer = (length) => {
  let index = 0
  const buffer = []

  return {
    push: (item) => {
      buffer[index] = item
      index = (index + 1) % length
      return item
    },
    getAvg: () => {
      return buffer.reduce((a, b) => a + b, 0) / length
    },
  }
}

const totalFrameTimeBuffer = createRingBuffer(10)

const fpsMeter = $('#fpsMeter')
const pingMeter = $('#pingMeter')

window.sm64js.fps = 0
window.sm64js.latency = 0

const setStatsUpdate = setInterval(() => {
  const totalFrameTimeAvg = totalFrameTimeBuffer.getAvg().toFixed(2)
  const maxFps = (1000 / totalFrameTimeAvg).toFixed(2)
  window.sm64js.fps = parseInt(maxFps)
  if (!isNaN(window.sm64js.fps)) fpsMeter.textContent = `FPS: ${window.sm64js.fps}`
  pingMeter.textContent = `Ping: ${window.sm64js.latency}ms`
}, 500)

// widescreen
const relativePositioner = $('#relativePositioner')
const gameContainer = $('#gameContainer')
const moveLeft = $('#moveLeft')
const chatlog = $('#chatlog')
const chatbox = $('#chatbox')
const musicDiv = $('#musicDiv')
const canvasContainer = $('#canvasContainer')
const gameCanvas = $('#gameCanvas')
const fxCanvas = $('#fxCanvas')
const textCanvas = $('#textCanvas')
const fullCanvas = $('#fullCanvas')

gameCanvas.width = 640
gameCanvas.height = 480
fxCanvas.width = 640
fxCanvas.height = 480
textCanvas.width = 640
textCanvas.height = 480
fullCanvas.width = 640
fullCanvas.height = 480
const customWidth = 1280
const customHeight = 720

window.sm64js.widescreen = false

const widescreenOn = () => {
  relativePositioner.style.width = '100%'
  relativePositioner.style.marginLeft = '0%'
  gameContainer.style.display = 'block'
  moveLeft.style.justifyContent = 'center'
  chatlog.style.height = '7.5em'

  canvasContainer.hidden = false
  canvasContainer.appendChild(chatlog)
  canvasContainer.appendChild(chatbox)
  chatlog.style = 'margin-left: -315px; width: 400px; height: 180px;'
  chatbox.style = 'margin-left: -320px; width: 440px;'
  /* const chat = $(".chatboxPos")
    chat.detach().appendTo(".canvasContainer")
    $("#chatboxP").style = "margin-top: -267px; margin-left: 29px; z-index: 10;"
    $("#chatlog").style = "height: 180px; background-color: rgba(0,0,0,0.35);"
    $("#justifyChat").style = "justify-content:center; width: 400px;"
    $("#chatboxes").style="justify-content:center; margin-top: -20px; width: 400px;"*/
  gameCanvas.style =
    "background-image: url('/mmo/assets/canvasBorder169.png'); background-size: 100%; background-repeat: no-repeat; padding: 26px;"

  gameCanvas.width = customWidth
  gameCanvas.height = customHeight
  fxCanvas.width = customWidth
  fxCanvas.height = customHeight
  textCanvas.width = customWidth
  textCanvas.height = customHeight
  fullCanvas.width = customWidth
  fullCanvas.height = customHeight

  viewport.vscale = [customWidth, customHeight, 0, 0]
  viewport.vtrans = [0, 0, 0, 0]
  set_vp(customWidth / 2, customHeight / 2) // SCREEN_WIDTH and SCREEN_HEIGHT
  window.sm64js.widescreen = true
}

const widescreenOff = () => {
  relativePositioner.style.width = '50%'
  relativePositioner.style.marginLeft = '15%'
  gameContainer.style.display = 'flex'
  moveLeft.style.justifyContent = 'flex-end'
  chatlog.style.height = '82%'
  musicDiv.style.marginTop = 'auto'
  gameCanvas.style =
    "background-image: url('/mmo/assets/canvasBorder.png'); background-size: 100%; background-repeat: no-repeat; padding: 26px;"
  $('#chatContainer').appendChild(chatlog)
  $('#chatContainer').appendChild(chatbox)
  chatlog.style = null
  chatbox.style = null
  canvasContainer.hidden = true
  gameCanvas.width = 640
  gameCanvas.height = 480
  fxCanvas.width = 640
  fxCanvas.height = 480
  textCanvas.width = 640
  textCanvas.height = 480
  fullCanvas.width = 640
  fullCanvas.height = 480

  viewport.vscale = [640, 480, 511, 0]
  viewport.vtrans = [640, 480, 511, 0]
  set_vp(320, 240) // SCREEN_WIDTH and SCREEN_HEIGHT
  window.sm64js.widescreen = false
}

window.toggleWidescreen = () => {
  if (gameCanvas.width === 640 && gameCanvas.height === 480) {
    //if not widescreen, do this
    localStorage.setItem('widescreenOn', 1)
    widescreenOn()
  } else {
    localStorage.setItem('widescreenOn', 0)
    widescreenOff()
  }
}

if (localStorage.getItem('widescreenOn') === 0 || !localStorage.getItem('widescreenOn')) {
  widescreenOff()
} else {
  widescreenOn()
}

// hacky method; probably a better way to do this
const signbox = $('#signboxBorder')
const optionsbox = $('#optionsBorder')
const customizebox = $('#customizeBorder')
const controlsbox = $('#controlsBorder')
const signInside = $('#signboxBackground')
const optionsInside = $('#optionsBackground')
const customizeInside = $('#customizeBackground')
const controlsInside = $('#controlsBackground')
window.switchbox = (name) => {
  switch (name) {
    case 'optionsbox':
      signbox.hidden = true
      signInside.hidden = true

      optionsbox.hidden = false
      optionsInside.hidden = false

      customizebox.hidden = true
      customizeInside.hidden = true

      controlsbox.hidden = true
      controlsInside.hidden = true
      break
    case 'customizebox':
      signbox.hidden = true
      signInside.hidden = true

      optionsbox.hidden = true
      optionsInside.hidden = true

      customizebox.hidden = false
      customizeInside.hidden = false

      controlsbox.hidden = true
      controlsInside.hidden = true
      break
    case 'controlsbox':
      signbox.hidden = true
      signInside.hidden = true

      optionsbox.hidden = true
      optionsInside.hidden = true

      customizebox.hidden = true
      customizeInside.hidden = true

      controlsbox.hidden = false
      controlsInside.hidden = false
      break
    default:
      signbox.hidden = false
      signInside.hidden = false

      optionsbox.hidden = true
      optionsInside.hidden = true

      customizebox.hidden = true
      customizeInside.hidden = true

      controlsbox.hidden = true
      controlsInside.hidden = true
      break
  }
}

window.enterFullScreenMode = () => {
  const dstCanvas = $('#fullCanvas')
  dstCanvas.requestFullscreen()
  if (gameCanvas.width != 640 && gameCanvas.height != 480) {
    dstCanvas.width = window.screen.width / 2
    dstCanvas.height = window.screen.height / 2
    viewport.vscale = [window.screen.width / 2, window.screen.height / 2, 0, 0]
  }
}

///// Start Game
const rulesVersion = 16
let gameStarted = false
export { gameStarted }

if (localStorage['rules'] === rulesVersion) {
  $('#rules').hidden = true
  $('#signboxBorder').classList.remove('shunned')
  $('#signboxBorder').disabled = false
} else {
  $('#rules').hidden = false
}

$('#startbutton').addEventListener('click', () => {
  if (gameStarted) {
    url_params.set('autostart', 1)
    window.location.search = url_params /// Refresh page (Reset Game)
  } else startGame()
})

$('#acceptRules').addEventListener('click', () => {
  localStorage.setItem('rules', rulesVersion)
  $('#rules').hidden = true
  $('#signboxBorder').classList.remove('shunned')
  $('#signboxBorder').disabled = false
  $('#anniversary').play()
  $('#anniversary').loop = true
})

window.deleteRom = () => {
  IDB.del('assets')
  window.location.href = window.location.href.replace('?autostart=1', '')
}

export const startGame = () => {
  if (localStorage['rules'] != rulesVersion) return
  if (!checkForRom()) return
  gameStarted = true

  $('#startbutton').classList.remove('green-button')
  $('#startbutton').classList.add('red-button')
  $('#startbutton').innerHTML = '<div class="sm64button">Restart Game</div>'
  $('#pvpButton').hidden = true

  $('#connectedMsg').hidden = false

  $('#anniversary').play()
  $('#anniversary').loop = true

  main_func()
}

window.togglePvp = () => {
  if (!gameStarted) window.pvp = !window.pvp
  $('#pvpButton').innerHTML =
    '<div class="sm64button">' + ('PvP: ' + (window.pvp ? 'On' : 'Off')) + '</div>'
}

export const loadSocket = () => {
  Socket.loadSocket()
}

window.onload = async () => {
  if (
    checkForRom() &&
    url_params.has('autostart') &&
    localStorage['rules'] === rulesVersion
  )
    startGame()
  $('#mainContent').hidden = false

  ///Discord
  /*    if (url_hash.has("access_token")) {
        const accessToken = url_hash.get("access_token")
        const tokenType = url_hash.get("token_type")

        const fragment = new URLSearchParams(window.location.hash.slice(1))

        const discordFetch = fetch('https://discord.com/api/users/@me', {
            headers: { authorization: `${tokenType} ${accessToken}` }
        })

        discordFetch.then(res => res.json()).then(response => {
            const { username, discriminator } = response
            console.log(username, discriminator)
            //$('#info').innerText += ` ${username}#${discriminator}`
        }).catch(console.error)
    }*/
  /*    if (url_params.has("code")) {
        const serverFetch = fetch(`http://localhost:3080/discord`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: url_params.get("code") })
        })

    }*/

  if (url_params.has('code')) {
    /// send access code to server
    const state = JSON.parse(decodeURIComponent(url_params.get('state')))
    const res = await fetch(`${process.env.BACKEND_URL ?? ''}/api/login/${state.type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: url_params.get('code') }),
      credentials: 'include',
    })
    const success = Socket.recvAuthorizedUser(res)

    if (success) {
      const url = new URL(window.location.href)
      url.searchParams.delete('code')
      url.searchParams.delete('state')
      url.pathname = '/'
      history.replaceState({ state: 'login' }, '', url)
    }
  } else {
    const res = await fetch(`${process.env.BACKEND_URL ?? ''}/api/login`, {
      method: 'POST',
      credentials: 'include',
    })
    Socket.recvAuthorizedUser(res)
  }
  loadSocket()
}

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 13 && !gameStarted) {
    if (!$('#startbutton').disabled) {
      startGame()
    }
  }
})

const checkForRom = () => {
  /// happens one time when the page is loaded
  const url = new URL(window.location.href)
  if (url.searchParams.get('romReset')) {
    IDB.del('assets')
    return false
  }

  return IDB.get('assets').then((msgdata) => {
    if (msgdata) {
      let data = msgpack.decode(msgdata)
      if (data.textureVersion === textureVersion) {
        loadDataIntoGame(data)
      } else {
        msgdata = null
      }
    }
    return !!msgdata
  })
}
