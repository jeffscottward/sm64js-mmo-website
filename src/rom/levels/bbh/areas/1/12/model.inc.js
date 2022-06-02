import * as Gbi from "../../../../../include/gbi"
import {
    spooky_09000000,
    spooky_09000800,
    spooky_09001800,
    spooky_09002800,
    spooky_09003800,
    spooky_09004800,
    spooky_09005000,
    spooky_09006000,
    spooky_09006800,
    spooky_09007000,
    spooky_09008000,
    spooky_09008800,
    spooky_09009000,
    spooky_0900A000,
    spooky_0900A800,
    spooky_0900B000,
    spooky_0900B800
} from "../../../../../textures/spooky"

import {
    bbh_seg7_texture_07000000,
    bbh_seg7_texture_07001000,
    bbh_seg7_texture_07001800,
    bbh_seg7_texture_07002000,
    bbh_seg7_texture_07003000,
    bbh_seg7_texture_07003400,
    bbh_seg7_texture_07004400
} from "../../../texture.inc"
const bbh_seg7_lights_0700BC68 = Gbi.gdSPDefLights1(
	    0x20, 0x20, 0x20,
	    0x50, 0x50, 0x50, 0x28, 0x28, 0x28
)

const bbh_seg7_lights_0700BC80 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const bbh_seg7_vertex_0700BC98 = [
	{ pos: [ -2098, 0, 1126 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1945, 0, 1075 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2098, 0, 1075 ], flag: 0, tc: [ 478, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1945, 0, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -101, 0, 1536 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -50, 0, 1382 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -101, 0, 1382 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -50, 0, 1536 ], flag: 0, tc: [ 478, 990 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0700BD18 = [
	{ pos: [ -101, 717, 2048 ], flag: 0, tc: [ 334, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 717, 2048 ], flag: 0, tc: [ 334, 650 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, 717, 1126 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1330, 717, 1638 ], flag: 0, tc: [ 626, 406 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1330, 717, 1126 ], flag: 0, tc: [ 990, 406 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 717, 2048 ], flag: 0, tc: [ 332, 650 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2252, 819, 2048 ], flag: 0, tc: [ 334, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1842, 819, 2150 ], flag: 0, tc: [ 260, 162 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2047, 819, 2355 ], flag: 0, tc: [ 114, 66 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2252, 819, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1842, 819, 1126 ], flag: 0, tc: [ 990, 162 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2252, 1638, 2048 ], flag: 0, tc: [ 334, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 1638, 2048 ], flag: 0, tc: [ 334, 650 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1228, 1638, 2560 ], flag: 0, tc: [ 0, 454 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 1638, 1126 ], flag: 0, tc: [ 990, 650 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1842, 1638, 2560 ], flag: 0, tc: [ 0, 162 ], color: [ 0, 129, 0, 255 ] },
]

const bbh_seg7_vertex_0700BE18 = [
	{ pos: [ -2252, 1638, 2048 ], flag: 0, tc: [ 334, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2252, 1638, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 1638, 1126 ], flag: 0, tc: [ 990, 650 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, 256, 1382 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -50, 256, 1382 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -50, 256, 1536 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1945, 256, 1075 ], flag: 0, tc: [ 478, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2098, 256, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2098, 256, 1075 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1945, 256, 1126 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1893, 1280, 1075 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -1893, 1280, 1126 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2047, 1280, 1126 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -2047, 1280, 1075 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 129, 0, 255 ] },
]

const bbh_seg7_vertex_0700BEF8 = [
	{ pos: [ -101, 256, 1536 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -50, 256, 1536 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -50, 0, 1536 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, 0, 1536 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 1075, 1485 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -767, 819, 1485 ], flag: 0, tc: [ 478, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 819, 1485 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, 256, 1382 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -50, 256, 1536 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -101, 256, 1536 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -50, 256, 1382 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 0, 1382 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -50, 0, 1382 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 256, 1382 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_0700BFD8 = [
	{ pos: [ -767, 1075, 1331 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 1075, 1331 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 819, 1331 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -767, 819, 1331 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 1075, 1485 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -767, 1075, 1485 ], flag: 0, tc: [ 478, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -767, 819, 1485 ], flag: 0, tc: [ 478, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 1075, 1331 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -767, 1075, 1331 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -767, 1075, 1485 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -818, 1075, 1485 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
]

const bbh_seg7_vertex_0700C088 = [
	{ pos: [ -1330, 819, 1638 ], flag: 0, tc: [ 0, 0 ], color: [ 177, 0, 99, 255 ] },
	{ pos: [ -1330, 717, 1638 ], flag: 0, tc: [ 0, 990 ], color: [ 177, 0, 99, 255 ] },
	{ pos: [ -818, 717, 2048 ], flag: 0, tc: [ 4330, 990 ], color: [ 177, 0, 99, 255 ] },
	{ pos: [ -818, 819, 2048 ], flag: 0, tc: [ 4330, 0 ], color: [ 177, 0, 99, 255 ] },
	{ pos: [ -1330, 819, 1638 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1330, 717, 1126 ], flag: 0, tc: [ -2414, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1330, 717, 1638 ], flag: 0, tc: [ 990, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1330, 819, 1126 ], flag: 0, tc: [ -2414, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -2047, 1024, 2355 ], flag: 0, tc: [ -158, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -2047, 819, 2355 ], flag: 0, tc: [ -158, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -1842, 1024, 2150 ], flag: 0, tc: [ 990, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -1842, 819, 2150 ], flag: 0, tc: [ 990, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -1842, 819, 1126 ], flag: 0, tc: [ 5078, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1842, 1024, 1126 ], flag: 0, tc: [ 5078, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1842, 1024, 2150 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1842, 819, 2150 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0700C188 = [
	{ pos: [ -1279, 1382, 1126 ], flag: 0, tc: [ 2268, 1372 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 1638, 1126 ], flag: 0, tc: [ 4566, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2252, 1638, 1126 ], flag: 0, tc: [ -2584, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -869, 1382, 1126 ], flag: 0, tc: [ 4312, 1372 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 819, 1126 ], flag: 0, tc: [ 4566, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -869, 922, 1126 ], flag: 0, tc: [ 4312, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 922, 1126 ], flag: 0, tc: [ 2268, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1842, 819, 1126 ], flag: 0, tc: [ -540, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1228, 1638, 2560 ], flag: 0, tc: [ 0, 2012 ], color: [ 157, 0, 177, 255 ] },
	{ pos: [ -818, 819, 2048 ], flag: 0, tc: [ -2074, 0 ], color: [ 157, 0, 177, 255 ] },
	{ pos: [ -1228, 819, 2560 ], flag: 0, tc: [ 0, 0 ], color: [ 157, 0, 177, 255 ] },
	{ pos: [ -818, 1638, 2048 ], flag: 0, tc: [ -3606, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 1075, 1485 ], flag: 0, tc: [ -796, 608 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 819, 2048 ], flag: 0, tc: [ -3606, 0 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0700C268 = [
	{ pos: [ -2252, 1638, 2048 ], flag: 0, tc: [ -3606, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2252, 819, 2048 ], flag: 0, tc: [ -3606, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2252, 819, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2252, 1638, 1126 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2252, 0, 1126 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2252, 0, 2048 ], flag: 0, tc: [ -3606, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1228, 1638, 2560 ], flag: 0, tc: [ 0, 2012 ], color: [ 157, 0, 177, 255 ] },
	{ pos: [ -818, 1638, 2048 ], flag: 0, tc: [ -2074, 2012 ], color: [ 157, 0, 177, 255 ] },
	{ pos: [ -818, 819, 2048 ], flag: 0, tc: [ -2074, 0 ], color: [ 157, 0, 177, 255 ] },
	{ pos: [ -818, 0, 2048 ], flag: 0, tc: [ -2074, 2012 ], color: [ 157, 0, 177, 255 ] },
	{ pos: [ -1228, 819, 2560 ], flag: 0, tc: [ 0, 0 ], color: [ 157, 0, 177, 255 ] },
	{ pos: [ -1228, 0, 2560 ], flag: 0, tc: [ 0, 2012 ], color: [ 157, 0, 177, 255 ] },
	{ pos: [ -1228, 819, 2560 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1228, 0, 2560 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1842, 0, 2560 ], flag: 0, tc: [ 3034, 2012 ], color: [ 0, 0, 129, 255 ] },
]

const bbh_seg7_vertex_0700C358 = [
	{ pos: [ -1842, 1638, 2560 ], flag: 0, tc: [ 3034, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1228, 1638, 2560 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1228, 819, 2560 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1842, 819, 2560 ], flag: 0, tc: [ 3034, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -1842, 0, 2560 ], flag: 0, tc: [ 3034, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -2252, 1638, 2048 ], flag: 0, tc: [ 5078, 2012 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -1842, 819, 2560 ], flag: 0, tc: [ 3034, 0 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -2252, 819, 2048 ], flag: 0, tc: [ 5078, 0 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -1842, 1638, 2560 ], flag: 0, tc: [ 3034, 2012 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -1842, 819, 2560 ], flag: 0, tc: [ 0, 0 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -1842, 0, 2560 ], flag: 0, tc: [ 0, 2012 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -2252, 0, 2048 ], flag: 0, tc: [ 3240, 2012 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -2252, 819, 2048 ], flag: 0, tc: [ 3240, 0 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -2252, 1024, 1126 ], flag: 0, tc: [ -2584, 480 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2047, 1024, 1126 ], flag: 0, tc: [ -1562, 480 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2252, 1638, 1126 ], flag: 0, tc: [ -2584, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_0700C458 = [
	{ pos: [ -2047, 1024, 1126 ], flag: 0, tc: [ -1562, 480 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2047, 1280, 1126 ], flag: 0, tc: [ -1562, 1116 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2252, 1638, 1126 ], flag: 0, tc: [ -2584, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1893, 1280, 1126 ], flag: 0, tc: [ -796, 1116 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 1382, 1126 ], flag: 0, tc: [ 2268, 1372 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1893, 1024, 1126 ], flag: 0, tc: [ -796, 480 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1842, 819, 1126 ], flag: 0, tc: [ -540, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 922, 1126 ], flag: 0, tc: [ 2268, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 717, 1126 ], flag: 0, tc: [ 7122, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 819, 1126 ], flag: 0, tc: [ 7122, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2252, 819, 1126 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2098, 256, 1126 ], flag: 0, tc: [ 734, 1372 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1945, 256, 1126 ], flag: 0, tc: [ 1502, 1372 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2252, 0, 1126 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -2098, 0, 1126 ], flag: 0, tc: [ 734, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const bbh_seg7_vertex_0700C548 = [
	{ pos: [ -1945, 0, 1126 ], flag: 0, tc: [ 1502, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 717, 1126 ], flag: 0, tc: [ 10700, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1945, 256, 1126 ], flag: 0, tc: [ 1502, 1372 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1893, 1280, 1126 ], flag: 0, tc: [ -796, 1116 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 922, 1126 ], flag: 0, tc: [ 2266, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1279, 1382, 1126 ], flag: 0, tc: [ 2268, 1372 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 1075, 1331 ], flag: 0, tc: [ 0, 608 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 1075, 1485 ], flag: 0, tc: [ -796, 608 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 1638, 2048 ], flag: 0, tc: [ -3606, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 717, 2048 ], flag: 0, tc: [ -2074, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, 0, 2048 ], flag: 0, tc: [ -5650, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 0, 2048 ], flag: 0, tc: [ -2074, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 819, 1485 ], flag: 0, tc: [ -796, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 819, 2048 ], flag: 0, tc: [ -3606, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 1638, 1126 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 819, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0700C648 = [
	{ pos: [ -818, 819, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 819, 1331 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -818, 1075, 1331 ], flag: 0, tc: [ 0, 608 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1945, 0, 1126 ], flag: 0, tc: [ 1502, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 0, 1126 ], flag: 0, tc: [ 10700, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 717, 1126 ], flag: 0, tc: [ 10700, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -818, 717, 2048 ], flag: 0, tc: [ -2074, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, 717, 2048 ], flag: 0, tc: [ -5650, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -101, 0, 2048 ], flag: 0, tc: [ -5650, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -818, 717, 1126 ], flag: 0, tc: [ 7122, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -1945, 256, 1126 ], flag: 0, tc: [ 1502, 1372 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -101, 256, 1382 ], flag: 0, tc: [ -286, 1372 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 717, 2048 ], flag: 0, tc: [ -3606, 224 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 717, 1126 ], flag: 0, tc: [ 990, 224 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 256, 1536 ], flag: 0, tc: [ -1052, 1372 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 0, 1382 ], flag: 0, tc: [ -286, 2012 ], color: [ 129, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0700C748 = [
	{ pos: [ -101, 717, 2048 ], flag: 0, tc: [ -3606, 224 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 0, 1536 ], flag: 0, tc: [ -1052, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 0, 2048 ], flag: 0, tc: [ -3606, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 256, 1536 ], flag: 0, tc: [ -1052, 1372 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 0, 1382 ], flag: 0, tc: [ -286, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 717, 1126 ], flag: 0, tc: [ 990, 224 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -101, 0, 1126 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -2252, 0, 2048 ], flag: 0, tc: [ 3240, 2012 ], color: [ 245, 0, 130, 255 ] },
	{ pos: [ -2068, 256, 2032 ], flag: 0, tc: [ 2728, 1244 ], color: [ 245, 0, 130, 255 ] },
	{ pos: [ -2068, 0, 2032 ], flag: 0, tc: [ 2728, 2012 ], color: [ 245, 0, 130, 255 ] },
	{ pos: [ -2252, 256, 2048 ], flag: 0, tc: [ 3240, 1244 ], color: [ 245, 0, 130, 255 ] },
	{ pos: [ -1786, 0, 2384 ], flag: 0, tc: [ 478, 2012 ], color: [ 121, 0, 38, 255 ] },
	{ pos: [ -1842, 256, 2560 ], flag: 0, tc: [ 0, 1244 ], color: [ 121, 0, 38, 255 ] },
	{ pos: [ -1842, 0, 2560 ], flag: 0, tc: [ 0, 2012 ], color: [ 121, 0, 38, 255 ] },
	{ pos: [ -1786, 256, 2384 ], flag: 0, tc: [ 478, 1244 ], color: [ 121, 0, 38, 255 ] },
]

const bbh_seg7_vertex_0700C838 = [
	{ pos: [ -1842, 256, 2560 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1786, 256, 2384 ], flag: 0, tc: [ 0, 1696 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2068, 256, 2032 ], flag: 0, tc: [ 0, 312 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 256, 2048 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0700C878 = [
	{ pos: [ -2047, 1280, 1126 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2047, 1024, 1126 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2047, 1024, 1075 ], flag: 0, tc: [ 480, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2098, 256, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2098, 0, 1126 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2098, 0, 1075 ], flag: 0, tc: [ 478, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -2098, 256, 1075 ], flag: 0, tc: [ 478, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -1945, 0, 1075 ], flag: 0, tc: [ 478, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1945, 256, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1945, 256, 1075 ], flag: 0, tc: [ 478, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1945, 0, 1126 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1893, 1024, 1075 ], flag: 0, tc: [ 480, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1893, 1024, 1126 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1893, 1280, 1126 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -1893, 1280, 1075 ], flag: 0, tc: [ 480, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -2047, 1280, 1075 ], flag: 0, tc: [ 480, 0 ], color: [ 127, 0, 0, 255 ] },
]

const bbh_seg7_vertex_0700C978 = [
	{ pos: [ -2068, 0, 2032 ], flag: 0, tc: [ 3034, 2012 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -2068, 256, 2032 ], flag: 0, tc: [ 3034, 0 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -1786, 256, 2384 ], flag: 0, tc: [ 0, 0 ], color: [ 99, 0, 177, 255 ] },
	{ pos: [ -1786, 0, 2384 ], flag: 0, tc: [ 0, 2012 ], color: [ 99, 0, 177, 255 ] },
]

const bbh_seg7_vertex_0700C9B8 = [
	{ pos: [ -2252, 0, 1126 ], flag: 0, tc: [ -7180, -5142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 0, 2048 ], flag: 0, tc: [ 7120, 4054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -101, 0, 1126 ], flag: 0, tc: [ 14276, -5142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 0, 2048 ], flag: 0, tc: [ -7180, 4054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1842, 0, 2560 ], flag: 0, tc: [ -3092, 9164 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1228, 0, 2560 ], flag: 0, tc: [ 3032, 9164 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -101, 0, 2048 ], flag: 0, tc: [ 14276, 4054 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2047, 1024, 1126 ], flag: 0, tc: [ -1052, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1893, 1024, 1126 ], flag: 0, tc: [ -1052, -1566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1893, 1024, 1075 ], flag: 0, tc: [ -1560, -1566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1842, 1024, 1126 ], flag: 0, tc: [ -1052, -2076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 1024, 2048 ], flag: 0, tc: [ 8144, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2047, 1024, 2355 ], flag: 0, tc: [ 11212, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1842, 1024, 2150 ], flag: 0, tc: [ 9168, -2076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2252, 1024, 1126 ], flag: 0, tc: [ -1052, 2010 ], color: [ 0, 127, 0, 255 ] },
]

const bbh_seg7_vertex_0700CAA8 = [
	{ pos: [ -1330, 819, 1126 ], flag: 0, tc: [ -2072, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1330, 819, 1638 ], flag: 0, tc: [ -2072, 5076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 819, 2048 ], flag: 0, tc: [ 3036, 9164 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 819, 1126 ], flag: 0, tc: [ 3032, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2047, 1024, 1126 ], flag: 0, tc: [ -1052, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -1893, 1024, 1075 ], flag: 0, tc: [ -1560, -1566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2047, 1024, 1075 ], flag: 0, tc: [ -1560, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 819, 1485 ], flag: 0, tc: [ 3032, 3542 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -767, 819, 1331 ], flag: 0, tc: [ 3544, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -818, 819, 1331 ], flag: 0, tc: [ 3032, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -767, 819, 1485 ], flag: 0, tc: [ 3544, 3542 ], color: [ 0, 127, 0, 255 ] },
]

export const bbh_seg7_dl_0700CB58 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700BC68.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700BC68.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700BC98, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPLight(bbh_seg7_lights_0700BC80.l[0], 1),
	Gbi.gsSPLight(bbh_seg7_lights_0700BC80.a, 2),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700BD18, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 2,  5,  3, 0x0,  6,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 6,  9, 10, 0x0,  6, 10,  7, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 11, 14, 12, 0x0),
	Gbi.gsSP1Triangle(11, 13, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700BE18, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700BEF8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700BFD8, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 7,  9, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700CCB0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C088, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700CD18 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, bbh_seg7_texture_07000000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C188, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  1, 0x0,  3,  5,  4, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  4, 0x0,  6,  7,  4, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C268, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 1,  4,  2, 0x0,  1,  5,  4, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 9, 11, 10, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C358, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  4,  3, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 5,  8,  6, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 9, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C458, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  2, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  7, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 10, 0x0, 12,  8, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 13, 14, 0x0, 10, 14, 11, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C548, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 7, 12, 13, 0x0,  6,  8, 14, 0x0),
	Gbi.gsSP1Triangle(15,  6, 14, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C648, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  5,  9, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0, 11, 14, 12, 0x0),
	Gbi.gsSP1Triangle(15, 11, 13, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C748, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C838, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700CF40 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C878, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700CFA8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09002800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C978, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700CFE0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, spooky_09009000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700C9B8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  1, 0x0,  3,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 1,  6,  2, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle(10, 14, 11, 0x0),
	Gbi.gsSPVertex(bbh_seg7_vertex_0700CAA8, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 7, 10,  8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const bbh_seg7_dl_0700D080 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700CB58),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700CCB0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700CD18),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700CF40),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700CFA8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(bbh_seg7_dl_0700CFE0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

