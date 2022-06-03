/** @jsxImportSource theme-ui **/
import { Checkbox, Flex } from 'theme-ui'
import SM64Button from './SM64Button'
import Select from 'react-select'

const OptionsPanel = () => {
  return (
    <div
      id="optionsBorder"
      sx={{
        backgroundImage: 'url("/images/backgrounds/blue-background.png")',
      }}
    >
      <h1 sx={{ my: 0 }}>Options & Misc</h1>
      {/* <!-- Miscellaneous --> */}
      {/* <!-- Divs are used as rows here --> */}
      <div sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <section className="settings-flex settings-options" sx={{ '> *': { mr: 2 } }}>
          <Flex sx={{ '> *': { mr: 3 } }}>
            <h3 id="fpsMeter">FPS: 0</h3>
            <h3 id="pingMeter">PING: 0ms</h3>
          </Flex>
          {/* <!-- This is row 2 and so on --> */}
          <Flex sx={{ alignItems: 'center' }}>
            <h4 sx={{ my: 0, mr: 2 }}>Super Mario Sunshine Redive</h4>
            <Checkbox
              checked
              onChange={() => {
                window.sm64js.redive = this.checked
              }}
            />
          </Flex>
          {/* <!-- Emote menu --> */}
          <div className="emoteMenu" sx={{ maxWidth: '200px' }}>
            <h1 sx={{ mb: 0 }}>Emote menu</h1>
            <div sx={{ img: { maxWidth: '30px' } }}>
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':blj:'
                }}
                src="/images/emotes/blj.gif"
                alt="BLJ"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':bup:'
                }}
                src="/images/emotes/bup.jpg"
                alt="Bup"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':discord:'
                }}
                src="/images/emotes/discord.png"
                alt="Discord logo"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':facepalm:'
                }}
                src="/images/emotes/facepalm.png"
                alt="Facepalm"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':kappa:'
                }}
                src="/images/emotes/kappa.png"
                alt="Kappa"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':kick:'
                }}
                src="/images/emotes/kick.gif"
                alt="Kick"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':mariostyle:'
                }}
                src="/images/emotes/mariostyle.gif"
                alt="Mario Gangnam Style"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':pogchamp:'
                }}
                src="/images/emotes/pogchamp.png"
                alt="Mario Poggard"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':shock:'
                }}
                src="/images/emotes/shock.gif"
                alt="Shock"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':strange:'
                }}
                src="/images/emotes/strange.png"
                alt="Strange"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':tpose:'
                }}
                src="/images/emotes/tpose.png"
                alt="T-Pose"
              />
              <img
                onClick={() => {
                  window.querySelector('#chatbox').value += ':troll:'
                }}
                src="/images/emotes/trollio.png"
                alt="Troll"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 sx={{ my: 0 }}>Filtering: </h3>
            <Select
              options={[
                { value: 2, label: 'Linear Texture Filtering' },
                { value: 0, label: 'Point / Nearest Texture Filtering' },
              ]}
              sx={{ width: '300px', mb: 2, color: '#666' }}
              onChange={() => {
                window.sm64js.filter = this.value
              }}
            />
            {/* 
          <option value="2">Linear Texture Filtering</option>
          <option value="0">Point / Nearest Texture Filtering</option>
        </Select> */}
          </div>
          <div className="settings-flex">
            {/* <!-- Color code pop up --> */}
            <div id="colorCodePasteWindow">
              <label>Gameshark Color Code Importer:</label>
              <div>
                <textarea
                  id="ccPasteArea"
                  placeholder="Enter your Color Code here..."
                  rows={6}
                  sx={{width: '100%'}}
                ></textarea>
              </div>
              <div sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                <SM64Button
                  color="green"
                  onClick={() => {
                    window.myMario.skinData = window.parseColorCode(
                      window.querySelector('#ccPasteArea').value,
                    )
                    window.querySelector('#ccPasteArea').value = ''
                    window.myMario.saveSkin()
                  }}
                >
                  Import Color Code
                </SM64Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 sx={{mt: 0}}>Window modes: </h3>
          <div>
            <SM64Button
              color="green"
              onClick={() => {
                window.fullWindowMode = true
              }}
            >
              Full Window Mode
            </SM64Button>
            <SM64Button
              color="green"
              onClick={() => {
                window.toggleWidescreen()
              }}
            >
              Widescreen Mode
            </SM64Button>
          <br/>
          <br/>
          <hr/>
          <br/>
          <div className="deleteRom" sx={{ '*': { width: '100%' } }}>
            {/* <!-- This is row 1 for example --> */}
            <SM64Button
              color="red"
              onClick={() => {
                window.deleteRom()
              }}
            >
              Delete ROM
            </SM64Button>
          </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default OptionsPanel
