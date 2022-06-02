/** @jsxImportSource theme-ui **/
import dynamic from 'next/dynamic'

const OptionsPanel = () => {
  return (
    <div id="optionsBorder" sx={{ bg: 'blue'}}>
      
        <h1  sx={{ my: 0 }}>Options & Misc</h1>
        {/* <!-- Miscellaneous --> */}
        {/* <!-- Divs are used as rows here --> */}
        <div className="deleteDiv">
          {/* <!-- This is row 1 for example --> */}
          <button
            id="deleteRom"
            onClick={() => {
              window.deleteRom()
            }}
            type="button"
            className="red-button"
          >
            <div className="sm64button">Delete Rom</div>
          </button>
          <h2 id="fpsMeter">FPS: 0</h2>
          <h2 id="pingMeter">Ping 0ms</h2>
        </div>
        <div className="settings-flex settings-options">
          {/* <!-- This is row 2 and so on --> */}
          <button
            type="button"
            className="blue-button"
            onClick={() => {
              window.fullWindowMode = true
            }}
          >
            <div className="sm64button">Full Window Mode</div>
          </button>
          <button
            type="button"
            className="blue-button"
            onClick={() => {
              window.toggleWidescreen()
            }}
          >
            <div className="sm64button">Widescreen Mode</div>
          </button>
          <label>Super Mario Sunshine Redive</label>
          <input
            type="checkbox"
            checked
            onChange={() => {
              window.sm64js.redive = this.checked
            }}
          />
          <select
            onChange={() => {
              window.sm64js.filter = this.value
            }}
          >
            <option value="2">Linear Texture Filtering</option>
            <option value="0">Point / Nearest Texture Filtering</option>
          </select>
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
              ></textarea>
            </div>
            <div>
              <button
                className="blue-button"
                onClick={() => {
                  window.myMario.skinData = window.parseColorCode(window.querySelector('#ccPasteArea').value)
                  window.querySelector('#ccPasteArea').value = ''
                  window.myMario.saveSkin()
                }}
              >
                <div className="sm64button">Import Color Code</div>
              </button>
            </div>
          </div>
          {/* <!-- Emote menu --> */}
          <div className="emoteMenu">
            <h1>Emote menu</h1>
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
        </div>
        {/* <!-- Controls and customization --> */}
        <div id="blueControls">
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
            className="yellow-button"
            onClick={() => {
              window.switchbox()
            }}
          >
            <div className="sm64button">Return</div>
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
  )
}
export default OptionsPanel
