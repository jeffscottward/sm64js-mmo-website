import { LevelCommandsInstance as LevelCommands, SET_BACKGROUND_MUSIC } from "../../engine/LevelCommands"
import { SEQ_LEVEL_SNOW } from "../../include/seq_ids"
import { bhvMario, bhvCastleFlagWaving } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { snow_tree_geo } from "../../actors/tree/geo.inc"
import { sl_seg7_area_1_collision } from "./areas/1/collision.inc"
import { sl_geo_0003A8 } from "./areas/1/geo.inc"
import { MODEL_CCM_SNOW_TREE, MODEL_STAR } from "../../include/model_ids"


export const level_sl_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CCM_SNOW_TREE, snow_tree_geo] },
    { command: LevelCommands.begin_area, args: [1, sl_geo_0003A8] },
    { command: LevelCommands.place_object, args: [/*model*/ MODEL_STAR, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving] },
    { command: LevelCommands.terrain, args: [sl_seg7_area_1_collision] },
    SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000, /*seq*/ SEQ_LEVEL_SNOW),
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 270, 5541, 2024, 443] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]