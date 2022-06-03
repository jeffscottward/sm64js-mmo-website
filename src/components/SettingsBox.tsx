/** @jsxImportSource theme-ui **/
import SM64Button from './SM64Button'
import GeneralPanel from './GeneralPanel'
import OptionsPanel from '../components/OptionsPanel'
import CustomSkinPanel from '../components/CustomSkinPanel'
import ControlsPanel from '../components/ControlsPanel'
import MusicPanel from '../components/MusicPanel'
import { useState } from 'react'

const SettingsBox = ({ showSettings }: { showSettings?: boolean }) => {
  const [currentPanel, setCurrentPanel] = useState('general')
  return (
    <div
      sx={{
        display: showSettings ? 'block' : 'none',
        position: 'absolute',
        zIndex: 1000,
        width: '100%',
        height: '100%',
      }}
    >
      <nav
        sx={{ display: 'flex', '> *': { display: 'block', bg: 'white', width: '100%' } }}
      >
        <SM64Button
          data-placement="bottom"
          color="yellow"
          pressed
          onClick={() => {
            setCurrentPanel('general')
          }}
        >
          General
        </SM64Button>
        <SM64Button
          data-placement="bottom"
          color="green"
          onClick={() => {
            setCurrentPanel('controls')
          }}
        >
          Customize Controls
        </SM64Button>
        <SM64Button
          color="blue"
          onClick={() => {
            setCurrentPanel('options')
          }}
        >
          Options & Misc
        </SM64Button>
        <SM64Button
          color="pink"
          onClick={() => {
            setCurrentPanel('skin')
            // window.updateWheel()
          }}
        >
          Character / Skin
        </SM64Button>
        <SM64Button
          color="red"
          onClick={() => {
            setCurrentPanel('music')
          }}
        >
          Music
        </SM64Button>
      </nav>
      <div
        className="panels"
        sx={{
          '> *': {
            backgroundSize: '100% 100%',
            p: 3,
            color: 'white'
          },
        }}
      >
        {currentPanel === 'general' ? <GeneralPanel /> : null}
        {currentPanel === 'controls' ? <ControlsPanel /> : null}
        {currentPanel === 'options' ? <OptionsPanel /> : null}
        {currentPanel === 'skin' ? <CustomSkinPanel /> : null}
        {currentPanel === 'music' ? <MusicPanel /> : null}
      </div>
    </div>
  )
}

export default SettingsBox
