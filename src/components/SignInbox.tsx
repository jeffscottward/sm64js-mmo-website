/** @jsxImportSource theme-ui **/

const SignInbox = () => {
  return (
    <div id="signboxBorder" className="shunned">
      <div id="signboxBackground">
        <div id="signboxMargin">
          {/* <!-- Main buttons & settings --> */}
          {/* <!-- Divs are used as rows here --> */}
          <div>
            {/* <!-- This is row 1 for example --> */}
            <button id="startbutton" type="button" className="green-button" disabled>
              <div className="sm64button">Start Game</div>
            </button>
            <button
              id="hudButton"
              className="pink-button"
              onClick={() => {
                window.hideHUD(this)
              }}
            >
              <div className="sm64button">Hide HUD</div>
            </button>
            <button
              id="freezeButton"
              className="blue-button"
              onClick={() => {
                window.freezeCamera(this)
              }}
            >
              <div className="sm64button">Freeze Camera (OFF)</div>
            </button>
          </div>
          {/* <!-- Sign in / sign out section, Map select--> */}
          <div id="signinSection">
            {/* <!-- Sign in buttons --> */}
            <div id="signinButtons">
              <img
                id="discordSigninButton"
                src="/images/buttons/social-discord_signin.png"
              />
              <img
                id="googleSigninButton"
                src="/images/buttons/social-google_signin.png"
              />
            </div>
            {/* <!-- Player name section --> */}
            <div id="playerNameRow">
              {/* <!-- Sign out button --> */}
              <button id="logoutButton" type="submit" className="red-button">
                <div className="sm64button">Sign out</div>
              </button>
              <form id="playerNameForm">
                {/* <!-- Discord name --> */}
                <div id="discordNameRow">
                  <label>Discord Name: </label>
                  <input
                    className="textInput nameInput"
                    readOnly
                    id="discordNameBox"
                    type="text"
                    minLength={3}
                    maxLength={20}
                  />
                  <button id="switchCustom" type="button" className="yellow-button">
                    <div className="sm64button">Use Custom Name</div>
                  </button>
                </div>
                {/* <!-- End discord name --> */}
                {/* <!-- Custom name --> */}
                <div id="customNameRow">
                  <label>Custom Name: </label>
                  <input
                    className="textInput nameInput"
                    id="playerNameInput"
                    type="text"
                    minLength={3}
                    maxLength={14}
                    placeholder="Enter name here"
                    onChange={() => {
                      window.updatePlayerName(this.value)
                    }}
                  />
                  <button id="switchDiscord" type="button" className="blue-button">
                    <div className="sm64button">Use Discord Name</div>
                  </button>
                </div>
                {/* <!-- End custom name --> */}
                {/* <!-- Map select --> */}
                <div className="mapSelectDiv">
                  <label>Select Map: </label>
                  {/* <!-- Map selection list, add newer custom levels in here --> */}
                  <div>
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
                    <button id="playerNameButton" type="submit" className="green-button">
                      <div className="sm64button">Submit</div>
                    </button>
                  </div>
                  <div>
                    <label id="playerNameResult">Waiting for selection</label>
                  </div>
                </div>
                {/* <!-- End map select --> */}
              </form>
            </div>
            {/* <!-- End player name section --> */}
            {/* <!-- Authentification failed message --> */}
            <h6 id="authFailMsg"></h6>
            {/* <!-- This is row 2 and so on --> */}
          </div>
          {/* <!-- In-game options --> */}
          <div>
            <button
              type="button"
              id="pvpButton"
              className="pink-button"
              onClick={() => {
                window.togglePvp()
              }}
            >
              <div className="sm64button">PvP: On</div>
            </button>
            <button
              type="button"
              id="respawnButton"
              className="respawnButton"
              onClick={() => {
                window.sm64js.reset = true
              }}
            >
              Respawn
            </button>
          </div>
          {/* <!-- Controls and customization --> */}
          <div id="yellowControls">
            <button
              type="button"
              className="green-button"
              data-placement="bottom"
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
export default SignInbox
