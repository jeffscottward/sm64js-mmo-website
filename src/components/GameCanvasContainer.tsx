/** @jsxImportSource theme-ui **/

const GameCanvasContainer = () => {
  return (
    <div id="gameContainer" sx={{ display: 'flex' }}>
      <div sx={{ flex: 8}}>
        <canvas id="textCanvas" hidden></canvas>
        {/* ><!-- HUD, NOT CHAT --> */}
        <canvas id="fxCanvas" hidden ></canvas>
        {/* ><!-- Snow --> */}
        <div id="canvasContainer"></div>
        <canvas id="gameCanvas" width="1280" height="720"></canvas>
      </div>
      {/* <!-- Chat container --> */}
      <div id="chatContainer" sx={{ flex: 2, display: 'flex', flexDirection: 'column'}}>
        <ul id="chatlog" sx={{ flex: 1, bg: 'gold'}}></ul>
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
