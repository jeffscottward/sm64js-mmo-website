/** @jsxImportSource theme-ui **/
import { useState, useEffect } from 'react'
import SM64Button from './SM64Button'

import ToggleSwitch from './ToggleSwitch'
import { useStateValue } from '../state/state'
import { Flex, Themed } from 'theme-ui'
import Select from 'react-select'

const mapoptions = [
  {
    label: 'Vanilla maps',
    options: [
      { value: 16, label: "Castle Grounds" },
      { value: 6, label: "Castle Inside First Level" },
      { value: 602, label: "Castle Inside Second Level" },
      { value: 26, label: "Castle Courtyard" },
      { value: 9, label: "Bob-omb Battlefield" },
      { value: 24, label: "Whomp's Fortress" },
      { value: 5, label: "Cool, Cool Mountain" },
      { value: 56, label: "Cool, Cool Mountain Slide" },
      { value: 27, label: "Princess's Secret Slide" },
      { value: 29, label: "Tower of the Wing Cap" },
      { value: 4, label: "Big Boo's Haunt" },
      { value: 7, label: "Hazy Maze Cave" },
      { value: 8, label: "Shifting Sand Land" },
      { value: 36, label: "Tall, Tall Mountain" },
      { value: 10, label: "Snowman's Land" }
    ]
  },
  {
    label: 'Custom maps',
    options: [
      { value: "1000", label: "Mushroom Battlefield"},
      { value: "1004", label: "Mushroom Raceway"},
      { value: "1006", label: "Dolphin Town"},
      { value: "1001", label: "CTF/Race Map"},
      { value: "1002", label: "Starman Fortress"},
      { value: "1003", label: "Glider Jungle"},
      { value: "999", label: "Clouded Ruins"},
    ],
  },
]

const SignInSection = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [authMsgFail, setAuthMsgFail] = useState('')

  return (
    <div id="signinSection">
      {!loggedIn ? (
        <>
          <h1 sx={{ my: 0 }}>Sign In</h1>
          <div
            id="signinButtons"
            sx={{ img: { maxWidth: '200px', display: 'block', cursor: 'pointer' } }}
          >
            <img
              onClick={() => {
                setLoggedIn(true)
              }}
              id="discordSigninButton"
              src="/images/buttons/social-discord_signin.png"
            />
            <img
              onClick={() => {
                setLoggedIn(true)
              }}
              id="googleSigninButton"
              src="/images/buttons/social-google_signin.png"
            />
          </div>
        </>
      ) : (
        <div>
            <label htmlFor="mapSelect">Select Map: </label>
            <br />
            <Select options={mapoptions} sx={{width: '300px', mb: 2, color: '#666'}}/>
            <Flex sx={{ justifyContent: 'space-between'}}>
              <SM64Button
                id="logoutButton"
                color="red"
                onClick={() => {
                  setLoggedIn(false)
                }}
              >
                Sign out
              </SM64Button>
              <SM64Button id="playerNameButton" color="green" onClick={() => {}}>
                Submit
              </SM64Button>
            </Flex>
        </div>
      )}
      {authMsgFail === '' ? null : <h6 id="authFailMsg"></h6>}
    </div>
  )
}

const ToggleOption = ({ id, labelText, checkedState, onClick }) => {
  return (
    <Flex>
      <span sx={{ mr: 2 }}>{labelText}</span>
      <ToggleSwitch
        id={id}
        checked={checkedState}
        onClick={onClick}
        onChange={() => {}}
      />
    </Flex>
  )
}

const Toggles = () => {
  const [window, dispatch] = useStateValue()
  return (
    <div className="toggles" sx={{ display: 'flex', '> *': { display: 'flex', px: 3 } }}>
      <ToggleOption
        id="HHUD"
        labelText={'Hide HUD'}
        checkedState={window.sm64js.HUDHidden}
        onClick={() => {
          console.log('hideHUDToggle')
          dispatch({
            type: 'SET_HUDHidden',
            payload: !window.sm64js.HUDHidden,
          })
        }}
      />
      <ToggleOption
        id="FCam"
        labelText={'Freeze Camera'}
        checkedState={window.myMario.freezeCamera}
        onClick={() => {
          dispatch({
            type: 'SET_freezeCamera',
            payload: !window.myMario.freezeCamera,
          })
        }}
      />
      <ToggleOption
        id="pvp"
        labelText={`PvP`}
        checkedState={window.misc.pvp}
        onClick={() => {
          dispatch({
            type: 'SET_pvp',
            payload: !window.misc.pvp,
          })
        }}
      />
    </div>
  )
}

const GeneralPanel = () => {
  return (
    <div
      sx={{
        display: 'flex',
        backgroundImage: 'url("/images/backgrounds/yellow-background.png")',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      {/* <SM64Button id="startbutton" color="green" disabled onClick={() => {}}>
            Start Game
          </SM64Button> */}
      <SignInSection />
      <Toggles />
      <SM64Button
        id="respawnButton"
        color="blue"
        onClick={() => {
          window.sm64js.reset = true
        }}
      >
        Respawn
      </SM64Button>
    </div>
  )
}
export default GeneralPanel
