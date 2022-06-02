// Castle Grounds

import {
    MACRO_OBJECT_WITH_BEH_PARAM, MACRO_OBJECT, MACRO_OBJECT_END
} from "../../../../game/MacroSpecialObjects"

import { MacroObjectPresets } from "../../../../include/macro_presets"
const P = MacroObjectPresets

import { DIALOG_050, DIALOG_065, DIALOG_167, DIALOG_051 } from "../../../../text/us/dialogs"

// 0x07010D08 - 0x07010DB4
export const castle_grounds_seg7_macro_objs = [
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ P.macro_wooden_signpost,     /*yaw*/ 262, /*pos*/  5288,   722,  -800, /*behParam*/ DIALOG_050),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ P.macro_wooden_signpost,     /*yaw*/  90, /*pos*/  1740,    35,  2500, /*behParam*/ DIALOG_065),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ P.macro_wooden_signpost,     /*yaw*/   0, /*pos*/ -1566,   260,  3503, /*behParam*/ DIALOG_167),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ P.macro_wooden_signpost,     /*yaw*/  82, /*pos*/ -4666,   260,   922, /*behParam*/ DIALOG_051),
    MACRO_OBJECT(/*preset*/ P.macro_hidden_1up_in_pole,  /*yaw*/   0, /*pos*/ -6270,   975, -2145),
    MACRO_OBJECT(/*preset*/ P.macro_1up,                 /*yaw*/   0, /*pos*/  -440,  3180, -5000),
    MACRO_OBJECT(/*preset*/ P.macro_1up,                 /*yaw*/   0, /*pos*/     0,  3180, -5200),
    MACRO_OBJECT(/*preset*/ P.macro_1up,                 /*yaw*/   0, /*pos*/   440,  3180, -5000),
    // MACRO_OBJECT(/*preset*/ P.macro_box_wing_cap,        /*yaw*/   0, /*pos*/    13,  3476, -5646),
    MACRO_OBJECT(/*preset*/ P.macro_hidden_1up_trigger,  /*yaw*/   0, /*pos*/     0,   535,  -500),
    MACRO_OBJECT(/*preset*/ P.macro_hidden_1up_trigger,  /*yaw*/   0, /*pos*/     0,   535, -1774),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ P.macro_hidden_1up,          /*yaw*/   0, /*pos*/     0,   510, -1170, /*behParam*/ 2),
    MACRO_OBJECT(/*preset*/ P.macro_yellow_coin,         /*yaw*/   0, /*pos*/     0,   540, -1774),
    MACRO_OBJECT(/*preset*/ P.macro_yellow_coin,         /*yaw*/   0, /*pos*/     0,   540,  -500),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ P.macro_cannon_open,         /*yaw*/   0, /*pos*/  2384,    70,  1961, /*behParam*/ 0x40),
    MACRO_OBJECT(/*preset*/ P.macro_butterfly_triplet_2, /*yaw*/   0, /*pos*/ -6240,   295,   320),
    MACRO_OBJECT(/*preset*/ P.macro_butterfly_triplet_2, /*yaw*/   0, /*pos*/  6330,   710, -3760),
    MACRO_OBJECT_END(),
];

// 1618763470 - 2021-04-18 06:31:12 -1000