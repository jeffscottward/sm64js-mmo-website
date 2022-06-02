import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import reducer from './reducers'

const initialState = {
  sm64js: {
    debug: {
      customCanvas: '',
      ext: '',
      marioList: '',
      postCamera: '',
      postInput: '',
      postMultiMario: '',
      postNetworkRender: '',
      preCamera: '',
      preInput: '',
      preMultiMario: '',
      preNetworkRender: '',
      updateDebug: '',
    },
    filter: '',
    fov: '',
    fps: '',
    gGlobalTimer: '',
    HUDHidden: false,
    latency: '',
    playerInput: {
      buttonDownA: '',
      buttonDownB: '',
      buttonDownCd: '',
      buttonDownCdIDXb: '',
      buttonDownChat: '',
      buttonDownCl: '',
      buttonDownCr: '',
      buttonDownCu: '',
      buttonDownCuIDXb: '',
      buttonDownFreezeCam: '',
      buttonDownMap: '',
      buttonDownStart: '',
      buttonDownTaunt: '',
      buttonDownZ: '',
      buttonPressedCd: '',
      buttonPressedChat: '',
      buttonPressedCl: '',
      buttonPressedCr: '',
      buttonPressedCu: '',
      buttonPressedFreezeCam: '',
      buttonPressedMap: '',
      buttonPressedStart: '',
      parachuteDown: '',
      stickX: '',
      stickY: '',
    },
    redive: '',
    reset: '',
    resetrespawn_player: '',
    snow: '',
    totalTriangles: '',
    widescreen: '',
  },
  myMario: {
    skinData: '',
    exportColors: '',
    importColors: '',
    saveSkin: '',
    accountCoins: '',
    accountLevel: '',
    readOnlyHealth: '',
    freezeCamera: false,
    customCapState: '',
    chatData: '',
  },
  misc: {
    pvp: true
  }
}

////////////
// Context, Hook, Provider
////////////

const StateContext = createContext(null)
const useStateValue = () => useContext(StateContext)
const StateProvider = ({ children }) => {
  const [allStates, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[allStates, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

////////////
// EXPORTS
////////////
export { StateProvider, useStateValue }
