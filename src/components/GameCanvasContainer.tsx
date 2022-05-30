/** @jsxImportSource theme-ui **/

const GameCanvasContainer = () => {
  return (
    <div id="gameContainer">
      <div id="relativePositioner">
        <div id="moveLeft">
          <canvas id="textCanvas"></canvas>
          {/* ><!-- HUD, NOT CHAT --> */}
          <canvas id="fxCanvas"></canvas>
          {/* ><!-- Snow --> */}
          <div id="canvasContainer"></div>
          <canvas id="gameCanvas" width="1280" height="720"></canvas>
        </div>
      </div>
      {/* <!-- Chat container --> */}
      <div id="chatContainer">
        <ul id="chatlog"></ul>
        <input
          id="chatbox"
          className="chatbox"
          type="text"
          autoComplete="off"
          maxLength={120}
          placeholder="Chat box, to block someone type '/block username'"
        />
      </div>
    </div>
  )
}
export default GameCanvasContainer
