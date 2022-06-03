/** @jsxImportSource theme-ui **/
import SM64Button from './SM64Button'
import Select from 'react-select'
import { Flex } from 'theme-ui'

const coloroptions = [
  {
    label: 'Main Color Codes',
    options: [
      { value: 0, label: 'Mario Colors' },
      { value: 1, label: 'Luigi Colors' },
      { value: 2, label: 'Wario Colors' },
    ],
  },
  {
    label: 'Other Color Codes',
    options: [
      { value: 3, label: 'SMB3 Mario' },
      { value: 4, label: 'SMB3 Luigi' },
      { value: 5, label: 'Waluigi' },
      { value: 6, label: '7 GRAND DAD' },
      { value: 7, label: 'Super Show Mario' },
      { value: 8, label: 'Super Show Luigi' },
      { value: 9, label: 'Rainbow Mario' },
      { value: 10, label: 'Rainbow Luigi' },
      { value: 11, label: 'Rainbow Wario' },
    ],
  },
]

const characterOptions = [
  {
    label: 'Characters',
    options: [
      { value: 0, label: 'Mario' },
      { value: 1, label: 'Luigi' },
      { value: 2, label: 'Wario' },
    ],
  },
]

const skinoptions = [
  {
    label: 'Skins',
    options: [
      { value: 'overalls', label: 'Overalls' },
      { value: 'hat', label: 'Hat' },
      { value: 'shirt', label: 'Shirt' },
      { value: 'gloves', label: 'Gloves' },
      { value: 'boots', label: 'Boots' },
      { value: 'skin', label: 'Skin' },
      { value: 'hair', label: 'Hair' },
      { value: 'parachute', label: 'Glider & Kart' },
    ],
  },
]

const CustomSkinPanel = () => {
  const $ = document.querySelector
  return (
    <div sx={{ backgroundImage: 'url("/images/backgrounds/pink-background.png")' }}>
      <h1 sx={{ my: 0 }}>Character/Skin</h1>
      <Flex sx={{ '> *': { mx: 4} }}>
        <div>
          <label>Select Skin Preset & Character:</label>
          <Select
            options={coloroptions}
            sx={{ width: '300px', mb: 2, color: '#666' }}
            onChange={() => {
              window.updateSkinID(this.value)
              localStorage.setItem('presetBox', this.value)
            }}
          />
          <Select
            options={characterOptions}
            sx={{ width: '300px', mb: 2, color: '#666' }}
            onChange={() => {
              window.setCharacter(this.value)
            }}
          />
          <Select
            options={skinoptions}
            sx={{ width: '300px', mb: 2, color: '#666' }}
            onChange={() => {
              window.updateWheel()
            }}
          />
        </div>
        {/* <!-- Options --> */}
        {/* <!-- Ambient color checkbox --> */}
        {/* <!-- Color pickers --> */}
        <div className="colorPickersContainer" sx={{ position: 'absolute'}}>
          <div id="picker"></div>
          <div id="ambpicker"></div>
        </div>
        {/* <!-- RGB input --> */}
        <div
          className="direct-color-input-div"
          sx={{ '> div': { width: '200px', justifyContent: 'space-between' } }}
        >
          <h3 sx={{ mt: 0 }}>Direct color input:</h3>
          <Flex>
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
          </Flex>
          <Flex>
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
          </Flex>
          <div>
            <input type="checkbox" id="updateAmb" defaultChecked />
            <label sx={{ width: '150%'}}>Match ambient color to main color? </label>
          </div>
        </div>
        {/* <!-- Hat toggle --> */}
        <SM64Button
          color="green"
          onClick={() => {
            window.toggleCapState()
          }}
        >
          Toggle Hat
        </SM64Button>
      </Flex>
      {/* <!-- Skin presets --> */}
    </div>
  )
}
export default CustomSkinPanel
