export {};

declare module "*.svg" {
  const content: any;
  export default content;
}

declare global {
  interface Window {
    example: any;
    hideHUD: any;
    freezeCamera: any;
    updatePlayerName: any;
    togglePvp: any;
    sm64js: any;
    switchbox: any;
    updateWheel: any;
    deleteRom: any;
    fullwindowMode: any;
    toggleWidescreen: any;
    sm64js: any;
    sm64js: any;
    myMario: any;
    parseColorCode: any;
    myMario: any;
    updateSkinID: any;
    setCharacter: any;
    toggleCapState: any;
    colorPicker: any;
    hex2ambient: any;
    ambientPicker: any;
    updateAmbientColors: any;
    updateColors: any;
    saveControls: any;
    loadDefaultControls: any;
    updateKeyboardMapping: any;
    updateGamepadMapping: any;
    updateDeadZone: any;
  }
}