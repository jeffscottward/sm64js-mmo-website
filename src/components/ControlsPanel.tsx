/** @jsxImportSource theme-ui **/
import SM64Button from './SM64Button'

const ControlsPanel = () => {
  return (
    <div
      id="controlsBorder"
      sx={{
        backgroundImage: 'url("/images/backgrounds/green-background.png")',
      }}
    >
      <h1 sx={{ my: 0 }}>Controls</h1>
      {/* <!-- Save & reset controls button --> */}
      <div className="controlButtons">
        <SM64Button id="playerNameButton" color="green" onClick={() => {window.saveControls()}}>
          Save Controls
        </SM64Button>
        <SM64Button id="playerNameButton" color="red" onClick={() => {window.loadDefaultControls()}}>
          Load Default Controls
        </SM64Button>
      </div>
      <h4 id="noGamepadMessage">No Gamepad Detected - Try Pressing a Button</h4>
      <div id="controlsFlex">
        <div
          id="keyboardControlsWindow"
          sx={{
            display: 'flex',
            section: {
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              mx: 2,
              '> div': {
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid #ccc',
                my: 1,
              },
            },
          }}
        >
          <section>
            <div>
              <label>Start:</label>
              <select
                name="start"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>A:</label>
              <select
                name="a"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>B:</label>
              <select
                name="b"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>Z:</label>
              <select
                name="z"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
          </section>
          <section>
            <div>
              <label>Up:</label>
              <select
                name="up"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>Down:</label>
              <select
                name="down"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>Left:</label>
              <select
                name="left"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>Right:</label>
              <select
                name="right"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
          </section>
          <section>
            <div>
              <label>C-Up:</label>
              <select
                name="cu"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>C-Down:</label>
              <select
                name="cd"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>C-Left:</label>
              <select
                name="cl"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>C-Right:</label>
              <select
                name="cr"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
          </section>
          <section>
            <div>
              <label>Minimap:</label>
              <select
                name="map"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>Taunts:</label>
              <select
                name="taunt"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>Glider:</label>
              <select
                name="parachute"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>Chat:</label>
              <select
                name="chat"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
            <div>
              <label>Freeze Camera:</label>
              <select
                name="freezeCam"
                onChange={() => {
                  window.updateKeyboardMapping(this.value, this.name)
                }}
              ></select>
            </div>
          </section>
        </div>
        {/* <!-- Gamepad controls pop up --> */}
        <div id="gamepadControlsWindow">
          {/* <!-- Gamepad message --> */}
          <div>
            <div id="gamepadMessageDiv">
              <h6 id="gamepadMessage"></h6>
            </div>
          </div>
          {/* <!-- Gamepad controls list --> */}
          <div
            id="gamepadFlex"
            sx={{
              display: 'flex',
              section: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                mx: 2,
                '> div': {
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #ccc',
                  my: 1,
                },
              },
            }}
          >
            <section>
              <div>
                <label>Start:</label>
                <select
                  name="start"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
              <div>
                <label>A:</label>
                <select
                  name="a"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
              <div>
                <label>B:</label>
                <select
                  name="b"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
              <div>
                <label>Z:</label>
                <select
                  name="z"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
            
            </section>
            <section>
            <div>
                <label>axisX:</label>
                <select
                  name="stickX"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
              <div>
                <label>axisY:</label>
                <select
                  name="stickY"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
              <div>
                <label>C-axisX:</label>
                <select
                  name="cStickX"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
              <div>
                <label>C-axisY:</label>
                <select
                  name="cStickY"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
             
            </section>
            <section>
            <div>
                <label>Dead zone:</label>
                <input
                  type="number"
                  value="0.3"
                  min="0"
                  max="1"
                  step="0.01"
                  className="form-control"
                  onChange={() => {
                    window.updateDeadZone(this.value)
                  }}
                />
              </div>
              <div>
                <label>Minimap:</label>
                <select
                  name="map"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
              <div>
                <label>Taunts:</label>
                <select
                  name="taunt"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
              <div>
                <label>Glider:</label>
                <select
                  name="parachute"
                  onChange={() => {
                    window.updateGamepadMapping(this.value, this.name)
                  }}
                ></select>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ControlsPanel
