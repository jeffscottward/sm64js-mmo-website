/** @jsxImportSource theme-ui **/
import { useState, useEffect } from 'react'
import SM64Button from './SM64Button'

import ToggleSwitch from './ToggleSwitch'
import { useStateValue } from '../state/state'
import { Flex, Themed } from 'theme-ui'
import SettingsNav from './SettingsNav'

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
          <div>
            <label htmlFor="mapSelect">Select Map: </label>
            <select id="mapSelect">
              <optgroup label="Vanilla maps">
                <option value="16">Castle Grounds</option>
                <option value="6">Castle Inside First Level</option>
                <option value="602">Castle Inside Second Level</option>
                <option value="26">Castle Courtyard</option>
                <option value="9">Bob-omb Battlefield</option>
                <option value="24">Whomp's Fortress</option>
                <option value="5">Cool, Cool Mountain</option>
                <option value="56">Cool, Cool Mountain Slide</option>
                <option value="27">Princess's Secret Slide</option>
                <option value="29">Tower of the Wing Cap</option>
                <option value="4">Big Boo's Haunt</option>
                <option value="7">Hazy Maze Cave</option>
                <option value="8">Shifting Sand Land</option>
                <option value="36">Tall, Tall Mountain</option>
                <option value="10">Snowman's Land</option>
              </optgroup>
              <optgroup label="Custom maps">
                <option value="1000">Mushroom Battlefield</option>
                <option value="1004">Mushroom Raceway</option>
                <option value="1006">Dolphin Town</option>
                <option value="1001">CTF/Race Map</option>
                <option value="1002">Starman Fortress</option>
                <option value="1003">Glider Jungle</option>
                <option value="999">Clouded Ruins</option>
              </optgroup>
            </select>
            <SM64Button id="playerNameButton" color="green" onClick={() => {}}>
              Submit
            </SM64Button>
          </div>
          <SM64Button
            id="logoutButton"
            color="red"
            onClick={() => {
              setLoggedIn(false)
            }}
          >
            Sign out
          </SM64Button>
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
    <div className="toggles" sx={{ '> *': { display: 'block' } }}>
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
        labelText={`PvP: ${window.misc.pvp ? 'On' : 'Off'}`}
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
    <div sx={{ bg: '#ab9000'}}>
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
