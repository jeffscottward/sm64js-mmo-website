/** @jsxImportSource theme-ui **/

const ControlsBox = () => {
  return (
    <div id="controlsBorder">
      <div id="controlsBackground">
        <div id="controlsMargin">
          {/* <!-- Save & reset controls button --> */}
          <div className="controlButtons">
            <button
              className="green-button"
              onClick={() => {
                window.saveControls()
              }}
            >
              <div className="sm64button">Save Controls</div>
            </button>
            <button
              className="red-button"
              onClick={() => {
                window.loadDefaultControls()
              }}
            >
              <div className="sm64button">Load Default Controls</div>
            </button>
          </div>
          <h6 id="noGamepadMessage">No Gamepad Detected Yet, Try Pressing a Button</h6>
          <div id="controlsFlex">
            <div id="keyboardControlsWindow" sx={{display: 'flex'}}>
              {/* <!-- Keyboard control list --> */}
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
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
              <div id="gamepadFlex" sx={{display: 'flex'}}>
                <div>
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
                </div>
                <div>
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
                  <div>
                    <label>deadZone:</label>
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
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Controls and customization --> */}
          <div id="greenControls">
            <button
              type="button"
              className="yellow-button"
              data-placement="bottom"
              onClick={() => {
                window.switchbox()
              }}
            >
              <div className="sm64button">Return</div>
            </button>
            <button
              type="button"
              className="blue-button"
              onClick={() => {
                window.switchbox('optionsbox')
              }}
            >
              <div className="sm64button">Options & Misc</div>
            </button>
            <button
              type="button"
              className="pink-button"
              onClick={() => {
                window.switchbox('customizebox')
                window.updateWheel()
              }}
            >
              <div className="sm64button">Customize Character / Skin</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ControlsBox
