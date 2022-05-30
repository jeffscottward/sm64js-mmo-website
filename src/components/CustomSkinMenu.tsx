/** @jsxImportSource theme-ui **/

const CustomSkinMenu = () => {
  return (
    <div id="customizeBorder">
      <div id="customizeBackground">
        <div id="skinCustomizerWindow">
          {/* <!-- Skin presets --> */}
          <div>
            <label>Select Skin Preset & Character:</label>
            <select
              className="form-control"
              id="presetBox"
              onChange={() => {
                window.updateSkinID(this.value)
                localStorage.setItem('presetBox', this.value)
              }}
            >
              <optgroup label="Main Color Codes">
                <option value="0">Mario Colors</option>
                <option value="1">Luigi Colors</option>
                <option value="2">Wario Colors</option>
              </optgroup>
              <optgroup label="Other Color Codes">
                <option value="3">SMB3 Mario</option>
                <option value="4">SMB3 Luigi</option>
                <option value="5">Waluigi</option>
                <option value="6">7 GRAND DAD</option>
                <option value="7">Super Show Mario</option>
                <option value="8">Super Show Luigi</option>
                <option value="9">Rainbow Mario</option>
                <option value="10">Rainbow Luigi</option>
                <option value="11">Rainbow Wario</option>
              </optgroup>
            </select>
            <select
              id="characterType"
              onChange={() => {
                window.setCharacter(this.value)
              }}
            >
              <option value="0">Mario</option>
              <option value="1">Luigi</option>
              <option value="2">Wario</option>
            </select>
            {/* <!-- Player part selector --> */}
            <select
              id="skinTypes"
              onChange={() => {
                window.updateWheel()
              }}
            >
              <option value="overalls">Overalls</option>
              <option value="hat">Hat</option>
              <option value="shirt">Shirt</option>
              <option value="gloves">Gloves</option>
              <option value="boots">Boots</option>
              <option value="skin">Skin</option>
              <option value="hair">Hair</option>
              <option value="parachute">Glider & Kart</option>
            </select>
          </div>
          {/* <!-- Options --> */}
          {/* <!-- Ambient color checkbox --> */}
          <div>
            <input type="checkbox" id="updateAmb" defaultChecked />
            <label>Update ambient color accordingly to main color? </label>
          </div>
          {/* <!-- Hat toggle --> */}
          <button
            className="green-button"
            onClick={() => {
              window.toggleCapState()
            }}
          >
            <div className="sm64button">Toggle Hat</div>
          </button>
          {/* <!-- Color pickers --> */}
          <div className="colorPickersContainer">
            <div id="picker"></div>
            <div id="ambpicker"></div>
          </div>
          {/* <!-- RGB input --> */}
          <div className="direct-color-input-div">
            <h2>Direct color input:</h2>
            <label>Color:</label>
            <input
              type="color"
              id="colorInput"
              onChange={() => {
                window.colorPicker.color.hexString = this.value
                if ($('#updateAmb').checked) {
                  $('#ambientInput').value = window.hex2ambient(this.value)
                  window.ambientPicker.color.hexString = $('#ambientInput').value
                  window.updateAmbientColors(window.ambientPicker.color)
                }
                window.updateColors(window.colorPicker.color)
                window.myMario.saveSkin()
              }}
            />
            <label> Ambient color:</label>
            <input
              type="color"
              id="ambientInput"
              onChange={() => {
                window.ambientPicker.color.hexString = this.value
                window.updateAmbientColors(window.ambientPicker.color)
                window.myMario.saveSkin()
              }}
            />
          </div>
          {/* <!-- Controls and customization --> */}
          <div id="pinkControls">
            <button
              type="button"
              className="green-button"
              onClick={() => {
                window.switchbox('controlsbox')
              }}
            >
              <div className="sm64button">Customize Controls</div>
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
              className="yellow-button"
              onClick={() => {
                window.switchbox()
              }}
            >
              <div className="sm64button">Return</div>
            </button>
          </div>
        </div>
        {/* <!-- End of skin customizer pop up --> */}
      </div>
    </div>
  )
}
export default CustomSkinMenu
