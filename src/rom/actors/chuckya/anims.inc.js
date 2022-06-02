// Chuckya

import {
    ANIMINDEX_NUMPARTS
} from "../../include/types"

// 0x0800AC18
const chuckya_seg8_animvalue_0800AC18 = [
    0x0000, 0x0001, 0x3FFF, 0xF7A8, 0xF953, 0xFD9C, 0x036A, 0x09AA,
    0x0F44, 0x1321, 0x142C, 0x0ACB, 0xF9F0, 0xF053, 0xF715, 0x0515,
    0x0DA7, 0x0BC5, 0x0581, 0xFED6, 0xFBBB, 0x071C, 0xF225, 0x784B,
    0xFD4B, 0xFD4E, 0xFD56, 0xFD61, 0xFD6D, 0xFD78, 0xFD80, 0xFD83,
    0xFD83, 0xFD83, 0xFD83, 0xFD83, 0xFD83, 0xFD83, 0xFD83, 0xFD83,
    0xFD83, 0xFD83, 0xFF52, 0xFFAF, 0x009C, 0x01E3, 0x0347, 0x048D,
    0x057C, 0x05D9, 0x05D9, 0x05D9, 0x05D9, 0x05D9, 0x05D9, 0x05D9,
    0x05D9, 0x05D9, 0x05D9, 0x05D9, 0x84C1, 0x832D, 0x7F17, 0x7986,
    0x7375, 0x6DE4, 0x69D2, 0x683E, 0x683E, 0x683E, 0x683E, 0x683E,
    0x683E, 0x683E, 0x683E, 0x683E, 0x683E, 0x683E, 0xFC87, 0xFDC1,
    0x00EA, 0x0544, 0x0A0A, 0x0E7C, 0x11D6, 0x1357, 0x0F42, 0x069E,
    0xFFCA, 0xFD29, 0xFC59, 0xFC87, 0xFDB6, 0xFFCA, 0x01C2, 0x02A3,
    0xC001, 0x8001, 0xE35C, 0x3FFF, 0x8001, 0xE35C, 0x06BA, 0x0486,
    0xFF22, 0xF85D, 0xEFBA, 0xE564, 0xDC23, 0xD6C1, 0xD4AB, 0xD35B,
    0xD2B1, 0xD28A, 0xD2C5, 0xD341, 0xD3DC, 0xD474, 0xD4E8, 0xD516,
    0x04DF, 0x00FB, 0xF8C0, 0xF156, 0xEBE4, 0xE6A7, 0xE262, 0xDFDD,
    0xDEAE, 0xDDE0, 0xDD62, 0xDD27, 0xDD1F, 0xDD3A, 0xDD6A, 0xDD9F,
    0xDDCA, 0xDDDC, 0xDF93, 0xDE2E, 0xDC38, 0xDD07, 0xE292, 0xEAA3,
    0xF251, 0xF6B2, 0xF815, 0xF8D2, 0xF907, 0xF8D2, 0xF851, 0xF7A4,
    0xF6E9, 0xF63D, 0xF5C0, 0xF58F, 0x7BF0, 0x7CCE, 0x7F22, 0x8287,
    0x87BD, 0x8E50, 0x93F1, 0x9655, 0x9655, 0x9655, 0x9655, 0x9655,
    0x9655, 0x9655, 0x9655, 0x9655, 0x9655, 0x9655, 0x87DA, 0x83BB,
    0x7B04, 0x7339, 0x6D54, 0x6783, 0x6313, 0x614E, 0x614E, 0x614E,
    0x614E, 0x614E, 0x614E, 0x614E, 0x614E, 0x614E, 0x614E, 0x614E,
    0x6749, 0x6573, 0x6276, 0x6217, 0x6689, 0x6D78, 0x73D9, 0x76A6,
    0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6,
    0x76A6, 0x76A6, 0x6078, 0x3FFF, 0xDF87, 0x9F88, 0xC001, 0xDF87,
    0xBF0E, 0x5347, 0xC04A, 0x4A4E, 0x4983, 0x4775, 0x449C, 0x4173,
    0x3E72, 0x3C14, 0x3AD2, 0x3B51, 0x3D51, 0x3FF7, 0x4268, 0x43C9,
    0x430A, 0x40ED, 0x3F4E, 0x3F76, 0x3FFF, 0x0000,
];

// 0x0800ADF4
const chuckya_seg8_animindex_0800ADF4 = [
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0001, 0x0002, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0012, 0x00DB,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x00DA,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x00D9,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x00D8,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0012, 0x004E,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0012, 0x0003,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x00D5, 0x0001, 0x00D6, 0x0001, 0x00D7,
    0x0012, 0x0066, 0x0012, 0x0078, 0x0012, 0x008A,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0060, 0x0001, 0x0061, 0x0001, 0x0062,
    0x0001, 0x0015, 0x0001, 0x0016, 0x0001, 0x0017,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x00D2, 0x0001, 0x00D3, 0x0001, 0x00D4,
    0x0012, 0x009C, 0x0012, 0x00AE, 0x0012, 0x00C0,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0063, 0x0001, 0x0064, 0x0001, 0x0065,
    0x0012, 0x0018, 0x0012, 0x002A, 0x0012, 0x003C,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
];

// 0x0800AF68
const chuckya_seg8_anim_0800AF68 = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x12,
    unk0A: ANIMINDEX_NUMPARTS(chuckya_seg8_animindex_0800ADF4),
    values: chuckya_seg8_animvalue_0800AC18,
    indices: chuckya_seg8_animindex_0800ADF4,
    ignore: 0,
};

// 0x0800AF80
const chuckya_seg8_animvalue_0800AF80 = [
    0x0000, 0x0001, 0x3FFF, 0xFBBB, 0xFA1D, 0xF73F, 0xF620, 0xF81B,
    0xFB8D, 0xFEEB, 0x00AA, 0xFFB2, 0xFD07, 0xFA55, 0xF944, 0xFAF2,
    0xFE49, 0x019D, 0x0348, 0x0259, 0xFFE3, 0xFD3E, 0xFBC4, 0x071C,
    0xF225, 0x784B, 0xFD83, 0x05D9, 0x683E, 0x02A3, 0x0334, 0x0466,
    0x0579, 0x05AC, 0x04C3, 0x033C, 0x016D, 0xFFB0, 0xFE57, 0xFDBC,
    0xFE43, 0xFFBA, 0x0196, 0x034F, 0x045B, 0x0469, 0x03D5, 0x0317,
    0x02A6, 0xC001, 0x8001, 0xE35C, 0x3FFF, 0x8001, 0xE35C, 0xD516,
    0xDDDC, 0xF58F, 0x9655, 0x614E, 0x76A6, 0x6078, 0x3FFF, 0xDF87,
    0x9F88, 0xC001, 0xDF87, 0xBF0E, 0x5347, 0xC04A, 0x3FFF, 0x3FE4,
    0x3FA6, 0x3F5E, 0x3F27, 0x3F1C, 0x3F3D, 0x3F77, 0x3FC0, 0x4011,
    0x4061, 0x40A9, 0x40E0, 0x40FF, 0x40F8, 0x40CE, 0x4090, 0x404F,
    0x401A, 0x4000,
];

// 0x0800B034
const chuckya_seg8_animindex_0800B034 = [
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0001, 0x0002, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0014, 0x0046,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0045,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0044,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0043,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0014, 0x001D,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0014, 0x0003,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0040, 0x0001, 0x0041, 0x0001, 0x0042,
    0x0001, 0x0037, 0x0001, 0x0038, 0x0001, 0x0039,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0031, 0x0001, 0x0032, 0x0001, 0x0033,
    0x0001, 0x0017, 0x0001, 0x0018, 0x0001, 0x0019,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x003D, 0x0001, 0x003E, 0x0001, 0x003F,
    0x0001, 0x003A, 0x0001, 0x003B, 0x0001, 0x003C,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0034, 0x0001, 0x0035, 0x0001, 0x0036,
    0x0001, 0x001A, 0x0001, 0x001B, 0x0001, 0x001C,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
];

// 0x0800B1A8
const chuckya_seg8_anim_0800B1A8 = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x14,
    unk0A: ANIMINDEX_NUMPARTS(chuckya_seg8_animindex_0800B034),
    values: chuckya_seg8_animvalue_0800AF80,
    indices: chuckya_seg8_animindex_0800B034,
    ignore: 0,
};

// 0x0800B1C0
const chuckya_seg8_animvalue_0800B1C0 = [
    0x0000, 0x000D, 0x000B, 0x0007, 0x0000, 0xFFFB, 0xFFF4, 0xFFF0,
    0xFFEE, 0xFFF0, 0xFFF4, 0xFFFB, 0x0000, 0x0007, 0x000B, 0x000D,
    0x00A9, 0x3FFF, 0xF7A8, 0xF1E5, 0xE7CA, 0xE41A, 0xEBF9, 0xF96D,
    0x068C, 0x0D6B, 0x0D85, 0x0AEB, 0x0698, 0x0187, 0xFCB2, 0xF914,
    0xF7A8, 0x03AA, 0x805D, 0x805D, 0xFC87, 0x00E5, 0x0A98, 0x147C,
    0x1974, 0x1828, 0x13BD, 0x0DCA, 0x07E6, 0x03A8, 0x0110, 0xFF11,
    0xFDA6, 0xFCCF, 0xFC87, 0xC001, 0x8001, 0xE35C, 0x3FFF, 0x8001,
    0xE35C, 0x0000, 0x0010, 0x0039, 0x0072, 0x00B1, 0x00EA, 0x0113,
    0x0124, 0x0113, 0x00EA, 0x00B1, 0x0072, 0x0039, 0x0010, 0x0000,
    0xF1BE, 0xF302, 0xF646, 0xFABD, 0xFF9A, 0x0410, 0x0754, 0x0898,
    0x0754, 0x0410, 0xFF9A, 0xFABD, 0xF646, 0xF302, 0xF1BE, 0x0429,
    0x0401, 0x039A, 0x030D, 0x0273, 0x01E6, 0x017F, 0x0156, 0x017F,
    0x01E6, 0x0273, 0x030D, 0x039A, 0x0401, 0x0429, 0x8005, 0x800C,
    0x801E, 0x8036, 0x8051, 0x8069, 0x807B, 0x8082, 0x807B, 0x8069,
    0x8051, 0x8036, 0x801E, 0x800C, 0x8005, 0x86EF, 0x8635, 0x8458,
    0x81CB, 0x7F01, 0x7C74, 0x7A97, 0x79DE, 0x7A97, 0x7C74, 0x7F01,
    0x81CB, 0x8458, 0x8635, 0x86EF, 0x82F4, 0x82CD, 0x8269, 0x81E0,
    0x814B, 0x80C2, 0x805E, 0x8037, 0x805E, 0x80C2, 0x814B, 0x81E0,
    0x8269, 0x82CD, 0x82F4, 0x6078, 0x3FFF, 0xDF87, 0x9F88, 0xC001,
    0xDF87, 0xBF0E, 0x5347, 0x54E2, 0x584D, 0x5B74, 0x5C3E, 0x59BD,
    0x554B, 0x5038, 0x4BD9, 0x4980, 0x49F1, 0x4C4C, 0x4F68, 0x521E,
    0x5347, 0xC04A, 0x0342, 0x02EB, 0x020C, 0x00DA, 0xFF8E, 0xFE5D,
    0xFD7D, 0xFD26, 0xFD7D, 0xFE5D, 0xFF8E, 0x00DA, 0x020C, 0x02EB,
    0x0342, 0x3587,
];

// 0x0800B334
const chuckya_seg8_animindex_0800B334 = [
    0x000F, 0x0001, 0x0001, 0x0000, 0x0001, 0x0010, 0x0001, 0x0000, 0x0001, 0x0011, 0x0001, 0x0000,
    0x0001, 0x0000, 0x000F, 0x00AA, 0x0001, 0x00B9,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x00A9,
    0x0001, 0x0000, 0x0001, 0x0000, 0x000F, 0x009A,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0099,
    0x0001, 0x0000, 0x0001, 0x0000, 0x000F, 0x0024,
    0x0001, 0x0000, 0x0001, 0x0000, 0x000F, 0x0012,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0096, 0x0001, 0x0097, 0x0001, 0x0098,
    0x000F, 0x0039, 0x000F, 0x0048, 0x000F, 0x0057,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0033, 0x0001, 0x0034, 0x0001, 0x0035,
    0x0001, 0x0000, 0x0001, 0x0021, 0x0001, 0x0022,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0093, 0x0001, 0x0094, 0x0001, 0x0095,
    0x000F, 0x0066, 0x000F, 0x0075, 0x000F, 0x0084,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0036, 0x0001, 0x0037, 0x0001, 0x0038,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0023,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
];

// 0x0800B4A8
const chuckya_seg8_anim_0800B4A8 = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x0F,
    unk0A: ANIMINDEX_NUMPARTS(chuckya_seg8_animindex_0800B334),
    values: chuckya_seg8_animvalue_0800B1C0,
    indices: chuckya_seg8_animindex_0800B334,
    ignore: 0,
};

// 0x0800B4C0
const chuckya_seg8_animvalue_0800B4C0 = [
    0x0000, 0x0001, 0x3FFF, 0xFBBB, 0xFD6C, 0x01C5, 0x07B7, 0x0E2E,
    0x1416, 0x185D, 0x19F0, 0x16FE, 0x0FFC, 0x0745, 0xFF34, 0xFA20,
    0xF767, 0xF4EF, 0xF2E7, 0xF17D, 0xF0DF, 0xF13C, 0xF2C3, 0xF5A0,
    0x0296, 0x16F1, 0x21AE, 0x1D78, 0x1311, 0x0691, 0xFC11, 0xF7A8,
    0x071C, 0x0716, 0x0702, 0x06E2, 0x06B7, 0x0683, 0x0645, 0x0600,
    0x05B3, 0x0561, 0x0509, 0x04AE, 0x0450, 0x03EF, 0x038E, 0x032D,
    0x02CC, 0x026E, 0x0212, 0x01BB, 0x0168, 0x011C, 0x00D6, 0x0099,
    0x0064, 0x003A, 0x001A, 0x0006, 0x0000, 0xF225, 0xF236, 0xF266,
    0xF2B4, 0xF31D, 0xF39F, 0xF437, 0xF4E2, 0xF59E, 0xF66A, 0xF741,
    0xF822, 0xF90B, 0xF9F8, 0xFAE8, 0xFBD8, 0xFCC5, 0xFDAE, 0xFE8F,
    0xFF67, 0x0031, 0x00ED, 0x0198, 0x0230, 0x02B2, 0x031B, 0x0369,
    0x0399, 0x03AA, 0x784B, 0x7853, 0x7869, 0x788D, 0x78BD, 0x78F9,
    0x793F, 0x798D, 0x79E4, 0x7A41, 0x7AA4, 0x7B0C, 0x7B77, 0x7BE4,
    0x7C53, 0x7CC1, 0x7D2E, 0x7D99, 0x7E01, 0x7E64, 0x7EC1, 0x7F18,
    0x7F67, 0x7FAC, 0x7FE8, 0x801B, 0x803F, 0x8056, 0x805D, 0xFD83,
    0xFD85, 0xFD8C, 0xFD97, 0xFDA6, 0xFDB9, 0xFDCE, 0xFDE7, 0xFE01,
    0xFE1E, 0xFE3D, 0xFE5D, 0xFE7E, 0xFEA0, 0xFEC2, 0xFEE4, 0xFF06,
    0xFF27, 0xFF47, 0xFF65, 0xFF82, 0xFF9D, 0xFFB5, 0xFFCB, 0xFFDD,
    0xFFEC, 0xFFF7, 0xFFFE, 0x0000, 0x05D9, 0x05D3, 0x05C3, 0x05A9,
    0x0586, 0x055A, 0x0528, 0x04EF, 0x04B0, 0x046C, 0x0424, 0x03D9,
    0x038B, 0x033C, 0x02EC, 0x029C, 0x024D, 0x01FF, 0x01B4, 0x016C,
    0x0128, 0x00E9, 0x00B0, 0x007E, 0x0052, 0x002F, 0x0015, 0x0005,
    0x0000, 0x683E, 0x6855, 0x6898, 0x6903, 0x6993, 0x6A46, 0x6B16,
    0x6C02, 0x6D05, 0x6E1D, 0x6F45, 0x707B, 0x71BB, 0x7302, 0x744C,
    0x7596, 0x76DD, 0x781D, 0x7953, 0x7A7B, 0x7B92, 0x7C96, 0x7D81,
    0x7E52, 0x7F04, 0x7F95, 0x8003, 0x8046, 0x805D, 0x02A3, 0x04F2,
    0x0AE5, 0x1304, 0x1BD8, 0x23E8, 0x29BE, 0x2BE1, 0x27D4, 0x1E37,
    0x1245, 0x0733, 0x003B, 0xFC9F, 0xF98E, 0xF72B, 0xF596, 0xF4F0,
    0xF559, 0xF6F4, 0xF9DF, 0x0762, 0x1CBF, 0x2811, 0x23C1, 0x18FB,
    0x0C03, 0x011B, 0xFC87, 0xC001, 0x8001, 0xE35C, 0x3FFF, 0x8001,
    0xE35C, 0xD516, 0xD516, 0xD516, 0xD516, 0xD516, 0xD516, 0xD516,
    0xD516, 0xD516, 0xD516, 0xD516, 0xD516, 0xD516, 0xD516, 0xD516,
    0xD8FD, 0xE27B, 0xEE3F, 0xF8F8, 0xFF52, 0x01C3, 0x031D, 0x0395,
    0x0363, 0x02BE, 0x01DE, 0x00F9, 0x0047, 0x0000, 0xDDDC, 0xDDDC,
    0xDDDC, 0xDDDC, 0xDDDC, 0xDDDC, 0xDDDC, 0xDDDC, 0xDDDC, 0xDDDC,
    0xDDDC, 0xDDDC, 0xDDDC, 0xDDDC, 0xDDDC, 0xE011, 0xE57C, 0xEC4C,
    0xF2B0, 0xF6D9, 0xF917, 0xFAF4, 0xFC79, 0xFDAD, 0xFE98, 0xFF41,
    0xFFB1, 0xFFEE, 0x0000, 0xF58F, 0xF58F, 0xF58F, 0xF58F, 0xF58F,
    0xF58F, 0xF58F, 0xF58F, 0xF58F, 0xF58F, 0xF58F, 0xF58F, 0xF58F,
    0xF58F, 0xF58F, 0xF2E6, 0xEC9E, 0xE544, 0xDF67, 0xDD93, 0xDFB9,
    0xE3B5, 0xE8F9, 0xEEF5, 0xF51B, 0xFADB, 0xFFA8, 0x02F1, 0x042A,
    0x9655, 0x9655, 0x9655, 0x9655, 0x9655, 0x9655, 0x9655, 0x9655,
    0x9655, 0x9655, 0x9655, 0x9655, 0x9655, 0x9655, 0x9655, 0x9220,
    0x87FF, 0x7BAB, 0x70E6, 0x6B6B, 0x6ADD, 0x6C16, 0x6EA0, 0x7208,
    0x75D7, 0x7999, 0x7CD9, 0x7F22, 0x8001, 0x614E, 0x614E, 0x614E,
    0x614E, 0x614E, 0x614E, 0x614E, 0x614E, 0x614E, 0x614E, 0x614E,
    0x614E, 0x614E, 0x614E, 0x614E, 0x635E, 0x686B, 0x6EC2, 0x74AF,
    0x7880, 0x7A7D, 0x7C19, 0x7D5D, 0x7E55, 0x7F09, 0x7F83, 0x7FCE,
    0x7FF4, 0x8001, 0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6,
    0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6, 0x76A6,
    0x76A6, 0x743F, 0x6E92, 0x67EC, 0x6299, 0x60E5, 0x62C2, 0x6641,
    0x6AE4, 0x702D, 0x759C, 0x7AB2, 0x7EF2, 0x81DE, 0x82F3, 0x6078,
    0x3FFF, 0xDF87, 0x9F88, 0xC001, 0xDF87, 0xBF0E, 0x5347, 0x51FD,
    0x4E9C, 0x49DF, 0x4482, 0x3F40, 0x3AD4, 0x37FB, 0x361B, 0x3447,
    0x32BE, 0x31BF, 0x3187, 0x3255, 0x3467, 0x37FB, 0x4258, 0x539F,
    0x6451, 0x6CF2, 0x6DB9, 0x6C3F, 0x6917, 0x64D5, 0x600E, 0x5B55,
    0x573E, 0x545D, 0x5347, 0xC04A, 0x3FFF, 0x3FEA, 0x3FB2, 0x3F5E,
    0x3EF9, 0x3E8B, 0x3E1C, 0x3DB6, 0x3D61, 0x3D27, 0x3D10, 0x3D13,
    0x3D23, 0x3D3C, 0x3D5F, 0x3D89, 0x3DB9, 0x3DED, 0x3E24, 0x3E5D,
    0x3E96, 0x3ECE, 0x3F03, 0x3F33, 0x3F5F, 0x3F83, 0x3F9E, 0x3FB0,
    0x3FB6, 0x0000,
];

// 0x0800B884
const chuckya_seg8_animindex_0800B884 = [
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0001, 0x0002, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x01C4,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x01C3,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x01A6,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x01A5,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x00CE,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x0003,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x01A2, 0x0001, 0x01A3, 0x0001, 0x01A4,
    0x001D, 0x00F1, 0x001D, 0x010E, 0x001D, 0x012B,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x00EB, 0x0001, 0x00EC, 0x0001, 0x00ED,
    0x001D, 0x0020, 0x001D, 0x003D, 0x001D, 0x005A,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x019F, 0x0001, 0x01A0, 0x0001, 0x01A1,
    0x001D, 0x0148, 0x001D, 0x0165, 0x001D, 0x0182,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x00EE, 0x0001, 0x00EF, 0x0001, 0x00F0,
    0x001D, 0x0077, 0x001D, 0x0094, 0x001D, 0x00B1,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
];

// 0x0800B9F8
const chuckya_seg8_anim_0800B9F8 = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x1D,
    unk0A: ANIMINDEX_NUMPARTS(chuckya_seg8_animindex_0800B884),
    values: chuckya_seg8_animvalue_0800B4C0,
    indices: chuckya_seg8_animindex_0800B884,
    ignore: 0,
};

// 0x0800BA10
const chuckya_seg8_animvalue_0800BA10 = [
    0x0000, 0x0001, 0x3FFF, 0xF7A8, 0xF9AA, 0xFD64, 0xFF66, 0xFD64,
    0xF9AA, 0xF7A8, 0x071C, 0xF225, 0x784B, 0xFD4B, 0xFF52, 0x84C1,
    0xFC87, 0xFD2A, 0xFE57, 0xFEF9, 0xFE57, 0xFD2A, 0xFC87, 0xC001,
    0x8001, 0xE35C, 0x3FFF, 0x8001, 0xE35C, 0x06BA, 0x04DF, 0xDF93,
    0x7BF0, 0x87DA, 0x6749, 0x6078, 0x3FFF, 0xDF87, 0x9F88, 0xC001,
    0xDF87, 0xBF0E, 0x5347, 0xC04A, 0x4A4E, 0x49AC, 0x487E, 0x47DC,
    0x487E, 0x49AC, 0x4A4E, 0x0000,
];

// 0x0800BA78
const chuckya_seg8_animindex_0800BA78 = [
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0001, 0x0002, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0007, 0x002C,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x002B,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x002A,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0029,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0007, 0x0010,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0007, 0x0003,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0026, 0x0001, 0x0027, 0x0001, 0x0028,
    0x0001, 0x001D, 0x0001, 0x001E, 0x0001, 0x001F,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0017, 0x0001, 0x0018, 0x0001, 0x0019,
    0x0001, 0x000A, 0x0001, 0x000B, 0x0001, 0x000C,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0023, 0x0001, 0x0024, 0x0001, 0x0025,
    0x0001, 0x0020, 0x0001, 0x0021, 0x0001, 0x0022,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x001A, 0x0001, 0x001B, 0x0001, 0x001C,
    0x0001, 0x000D, 0x0001, 0x000E, 0x0001, 0x000F,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
];

// 0x0800BBEC
const chuckya_seg8_anim_0800BBEC = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x07,
    unk0A: ANIMINDEX_NUMPARTS(chuckya_seg8_animindex_0800BA78),
    values: chuckya_seg8_animvalue_0800BA10,
    indices: chuckya_seg8_animindex_0800BA78,
    ignore: 0,
};

// 0x0800BC04
const chuckya_seg8_animvalue_0800BC04 = [
    0x0000, 0x0001, 0x3FFF, 0xF7A8, 0xF7BC, 0xF7F6, 0xF851, 0xF8CB,
    0xF960, 0xFA0C, 0xFACC, 0xFB9C, 0xFC79, 0xFD5F, 0xFE49, 0xFF36,
    0x0020, 0x0106, 0x02A7, 0x0507, 0x0707, 0x0787, 0x06A4, 0x054F,
    0x03A3, 0x01BF, 0xFFBF, 0xFDBD, 0xFBD9, 0xFA2F, 0xF8DB, 0xF7F9,
    0x03AA, 0x0386, 0x0320, 0x0283, 0x01BA, 0x00D0, 0xFFD2, 0xFEC8,
    0xFDBD, 0xFCBE, 0xFBD4, 0xFB0C, 0xFA6F, 0xFA08, 0xF9E4, 0xFA04,
    0xFA5E, 0xFAE8, 0xFB9B, 0xFC6D, 0xFD55, 0xFE4B, 0xFF45, 0x0039,
    0x0121, 0x01F3, 0x02A6, 0x0331, 0x038A, 0x805D, 0x805D, 0x805D,
    0x805D, 0x805D, 0x805D, 0x805D, 0x805D, 0x805D, 0x805D, 0x805D,
    0x805D, 0x805D, 0x805D, 0x805D, 0x805D, 0x805D, 0x805D, 0x805D,
    0x805D, 0x805D, 0x805D, 0x805D, 0x805D, 0x805D, 0x805D, 0x805D,
    0x805D, 0x805D, 0x805D, 0x8040, 0x7FEC, 0x7F70, 0x7ED1, 0x7E18,
    0x7D4E, 0x7C7B, 0x7BA8, 0x7ADE, 0x7A25, 0x7986, 0x790A, 0x78B9,
    0x789C, 0x78B6, 0x78FD, 0x796B, 0x79F8, 0x7A9E, 0x7B56, 0x7C18,
    0x7CDE, 0x7DA1, 0x7E58, 0x7EFF, 0x7F8C, 0x7FFA, 0x8044, 0xFC87,
    0xFC9C, 0xFCD5, 0xFD2C, 0xFD9D, 0xFE20, 0xFEB0, 0xFF48, 0xFFE0,
    0x0072, 0x00FB, 0x0173, 0x01D4, 0x0219, 0x023A, 0x019A, 0x001C,
    0xFE83, 0xFD8F, 0xFD38, 0xFCF5, 0xFCC4, 0xFCA2, 0xFC8C, 0xFC80,
    0xFC7C, 0xFC7D, 0xFC81, 0xFC85, 0xC001, 0x8001, 0xE35C, 0x3FFF,
    0x8001, 0xE35C, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001,
    0x0001, 0x0001, 0x0002, 0x0002, 0x0002, 0x0003, 0x0003, 0x0003,
    0x0003, 0x0003, 0x0003, 0x0003, 0x0002, 0x0002, 0x0002, 0x0001,
    0x0001, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
    0xFFF6, 0xFFD8, 0xFFAA, 0xFF70, 0xFF2C, 0xFEE1, 0xFE93, 0xFE46,
    0xFDFB, 0xFDB7, 0xFD7D, 0xFD4F, 0xFD31, 0xFD26, 0xFD30, 0xFD4A,
    0xFD72, 0xFDA6, 0xFDE4, 0xFE27, 0xFE6F, 0xFEB8, 0xFEFF, 0xFF43,
    0xFF80, 0xFFB5, 0xFFDD, 0xFFF7, 0x042A, 0x042A, 0x042A, 0x042A,
    0x042A, 0x042A, 0x042A, 0x042A, 0x042A, 0x042A, 0x042A, 0x042A,
    0x042A, 0x042A, 0x042A, 0x042A, 0x042A, 0x042A, 0x042A, 0x042A,
    0x042A, 0x042A, 0x042A, 0x042A, 0x042A, 0x042A, 0x042A, 0x042A,
    0x042A, 0x8001, 0x8001, 0x82F3, 0x82F7, 0x8304, 0x8318, 0x8331,
    0x834E, 0x836E, 0x838F, 0x83B1, 0x83D1, 0x83EE, 0x8407, 0x841A,
    0x8427, 0x842C, 0x8428, 0x841D, 0x840B, 0x83F5, 0x83DB, 0x83BE,
    0x839F, 0x8380, 0x8361, 0x8344, 0x832A, 0x8313, 0x8302, 0x82F7,
    0x6078, 0x3FFF, 0xDF87, 0x9F88, 0xC001, 0xDF87, 0xBF0E, 0x5347,
    0xC04A, 0x0000, 0x0000, 0x0002, 0x0004, 0x0006, 0x0008, 0x000A,
    0x000A, 0x000A, 0x000A, 0x0009, 0x0009, 0x0008, 0x0007, 0x0006,
    0x0005, 0x0004, 0x0004, 0x0003, 0x0003, 0x0005, 0x0007, 0x000A,
    0x000B, 0x000A, 0x0008, 0x0005, 0x0002, 0x0000, 0x0000, 0x000F,
    0x0037, 0x0072, 0x00B8, 0x0101, 0x0146, 0x0173, 0x0137, 0x00F9,
    0x00BA, 0x007A, 0x003A, 0xFFFB, 0xFFBB, 0xFF7D, 0xFF40, 0xFF06,
    0xFECF, 0xFE9B, 0xFE6A, 0xFE50, 0xFE71, 0xFEA6, 0xFEE1, 0xFF2B,
    0xFF77, 0xFFBC, 0xFFEE, 0x3FB6, 0x3FC3, 0x3FE4, 0x4010, 0x4041,
    0x406C, 0x408B, 0x4096, 0x4092, 0x408A, 0x407D, 0x406C, 0x4058,
    0x4042, 0x402B, 0x4012, 0x3FF9, 0x3FE1, 0x3FCB, 0x3FB6, 0x3F9C,
    0x3F7E, 0x3F66, 0x3F5F, 0x3F67, 0x3F78, 0x3F8C, 0x3FA1, 0x3FB0,
];

// 0x0800BEE4
const chuckya_seg8_animindex_0800BEE4 = [
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0001, 0x0002, 0x0001, 0x0000,
    0x001D, 0x0119, 0x001D, 0x0136, 0x001D, 0x0153,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0118,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0117,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0116,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x0077,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x0003,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0113, 0x0001, 0x0114, 0x0001, 0x0115,
    0x001D, 0x009A, 0x001D, 0x00B7, 0x001D, 0x00D4,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0094, 0x0001, 0x0095, 0x0001, 0x0096,
    0x0001, 0x0000, 0x001D, 0x0020, 0x001D, 0x003D,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0110, 0x0001, 0x0111, 0x0001, 0x0112,
    0x0001, 0x00F1, 0x0001, 0x00F2, 0x001D, 0x00F3,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0097, 0x0001, 0x0098, 0x0001, 0x0099,
    0x0001, 0x0000, 0x0001, 0x0000, 0x001D, 0x005A,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000,
];

// 0x0800C058
const chuckya_seg8_anim_0800C058 = {
    flags: 0,
    unk02: 0,
    unk04: 0,
    unk06: 0,
    unk08: 0x1D,
    unk0A: ANIMINDEX_NUMPARTS(chuckya_seg8_animindex_0800BEE4),
    values: chuckya_seg8_animvalue_0800BC04,
    indices: chuckya_seg8_animindex_0800BEE4,
    ignore: 0,
};

// 0x0800C070
export const chuckya_seg8_anims_0800C070 = [
    chuckya_seg8_anim_0800AF68,
    chuckya_seg8_anim_0800B1A8,
    chuckya_seg8_anim_0800B4A8,
    chuckya_seg8_anim_0800B9F8,
    chuckya_seg8_anim_0800BBEC,
    chuckya_seg8_anim_0800C058,
];


// 1619275628 - 2021-04-24 04:48:31 -1000
