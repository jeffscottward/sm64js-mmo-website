/** @jsxImportSource theme-ui **/

const SubmitROMForm = () => {
  return (
    <div sx={{ display: 'flex', marginBottom: '1rem' }}>
      <form id="romSelect" sx={{ marginRight: '1rem' }}>
        <h4 className="romSelectText" sx={{ margin: ' 0 0 .25rem 0' }}>
          Select US sm64 (z64) ROM File from your computer
        </h4>
        <input id="romFile" className="romFileText" type="file" />
        <input className="ROMinput loadRomButton" type="submit" value="Load ROM" />
      </form>
      <h6 id="romMessage" className="romMessageText" sx={{ margin: ' 0 0 .25rem 0' }}>
        SM64JS uses the textures and other game assets from the original game. <br />
        Due to copyright issues, we cannot host those assets on this site. <br />
        Please select a sm64 ROM to extract those assets before you can play.
      </h6>
    </div>
  )
}
export default SubmitROMForm
