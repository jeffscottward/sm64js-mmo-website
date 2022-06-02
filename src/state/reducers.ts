export function dappReducer(state, action) {
  switch (action.type) {
    case 'SET_HUDHidden':
      return {
        ...state.sm64js,
        ...{
          HUDHidden: action.payload,
        },
      }

    default:
      return state.sm64js
  }
}

export function myMarioReducer(state, action) {
  switch (action.type) {
    case 'SET_freezeCamera':
      return {
        ...state.myMario,
        ...{
          freezeCamera: action.payload,
        },
      }
    default:
      return state.myMario
  }
}

export function miscReducer(state, action) {
  switch (action.type) {
    case 'SET_pvp':
      return {
        ...state.misc,
        ...{
          pvp: action.payload,
        },
      }
    default:
      return state.misc
  }
}

export default function mainReducer(state, action) {
  // middleware goes here, i.e calling analytics service, etc.
  // Service 1
  // Service 2

  // Finally return map of **ALL** stateObjects
  // stateObject: resulting state of a reducer function after passing in former state and action
  console.log({ states: state }, { action: action })
  return {
    sm64js: dappReducer(state, action),
    myMario: myMarioReducer(state, action),
    misc: miscReducer(state, action),
    //anotherStateObject0: dappReducer(state, action),
    //anotherStateObject1: dappReducer(state, action)
  }
}
