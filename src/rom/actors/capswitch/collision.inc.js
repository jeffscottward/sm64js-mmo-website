// Capswitch

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_SWITCH,
    SURFACE_0004
} from "../../include/surface_terrains"

// Capswitch

export const capswitch_collision_050033D0 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(292, 0, 254),
    COL_VERTEX(292, 0, -253),
    COL_VERTEX(292, 353, -253),
    COL_VERTEX(-291, 0, -253),
    COL_VERTEX(-291, 353, -253),
    COL_VERTEX(-291, 0, 254),
    COL_VERTEX(-291, 353, 254),
    COL_VERTEX(292, 353, 254),

    COL_TRI_INIT(SURFACE_0004, 10),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 4),
    COL_TRI(1, 4, 2),
    COL_TRI(3, 5, 6),
    COL_TRI(3, 6, 4),
    COL_TRI(2, 4, 6),
    COL_TRI(0, 2, 7),
    COL_TRI(2, 6, 7),
    COL_TRI(5, 7, 6),
    COL_TRI(5, 0, 7),
    COL_TRI_STOP(),
    COL_END(),
].flat();

export const capswitch_collision_05003448 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(292, 0, 254),
    COL_VERTEX(292, 0, -253),
    COL_VERTEX(292, 145, -253),
    COL_VERTEX(-291, 0, -253),
    COL_VERTEX(-291, 145, -253),
    COL_VERTEX(-291, 0, 254),
    COL_VERTEX(-291, 145, 254),
    COL_VERTEX(292, 145, 254),

    COL_TRI_INIT(SURFACE_0004, 10),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 4),
    COL_TRI(1, 4, 2),
    COL_TRI(3, 5, 6),
    COL_TRI(3, 6, 4),
    COL_TRI(2, 4, 6),
    COL_TRI(0, 2, 7),
    COL_TRI(2, 6, 7),
    COL_TRI(5, 7, 6),
    COL_TRI(5, 0, 7),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2022-01-07 11:04:38 -0500 (Convert.rb 2021-12-21 17:11:27 -0500)
