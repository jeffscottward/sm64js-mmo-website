/** @jsxImportSource theme-ui **/
import { Flex } from 'theme-ui'

const MusicSection = () => {
  return (
    <div
      id="musicDiv"
      sx={{
        h5: { mr: 2 },
        '> div': { justifyContent: 'space-between', flexWrap: 'nowrap' },
        audio: {
          flex: 1,
          width: '100%',
          maxWidth: '650px'
        }
      }}
    >
      <h3>Music</h3>
      <Flex>
        <h5>Bob-omb Battlefield Anniversary by eros71</h5>
        <audio controls loop id="anniversary">
          <source src="/audio/anniversary.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </Flex>
      <Flex>
        <h5>Snow Mountain DX by eros71</h5>
        <audio controls loop id="snow">
          <source
            src="https://sm64js.nyc3.cdn.digitaloceanspaces.com/sm64js-music/Snow%20Mountain%20DX.wav"
            type="audio/wav"
          />
          Your browser does not support the audio element.
        </audio>
      </Flex>
      <Flex>
        <h5>Bob-omb Peaceful-Field by eros71</h5>
        <audio controls loop>
          <source
            src="https://sm64js.nyc3.cdn.digitaloceanspaces.com/sm64js-music/Bob-omb%20Peaceful-Field.wav"
            type="audio/wav"
          />
          Your browser does not support the audio element.
        </audio>
      </Flex>
      <Flex>
        <h5>Mario Filled Field by Belgium</h5>
        <audio controls loop id="grass">
          <source
            src="https://sm64js.nyc3.cdn.digitaloceanspaces.com/sm64js-music/Mario%20Filled%20Field.mp3"
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
      </Flex>
      <Flex>
        <h5>ASRA '95 by kiwen Sapi</h5>
        <audio controls loop id="clouded">
          <source src="/audio/clouded.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </Flex>
      <Flex>
        <h5>SM64JS File Select Remix by Subject to Change</h5>
        <audio controls loop>
          <source
            src="https://sm64js.nyc3.cdn.digitaloceanspaces.com/sm64js-music/SM64JS%20File%20Select%20Remix.wav"
            type="audio/wav"
          />
          Your browser does not support the audio element.
        </audio>
      </Flex>
      <Flex>
        <h5>Beware the Forest Mushrooms SM64 Remix by NH1507</h5>
        <audio controls loop id="jungle">
          <source src="/audio/forest.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </Flex>
    </div>
  )
}
export default MusicSection
