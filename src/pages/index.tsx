/** @jsxImportSource theme-ui **/
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import { useStateValue } from '../state/state'
import SettingsBox from '../components/SettingsBox'
import GameCanvasContainer from '../components/GameCanvasContainer'
import SubmitROMForm from '../components/SubmitROMForm'
import ProjectInfo from '../components/ProjectInfo'
import BannerTitle from '../components/BannerTitle'

const Home = () => {
  // Example of getting local global state
  const [{ dapp }, dispatch] = useStateValue()
  const [showSettings, setShowSettings] = useState(false)

  // Data samples
  // Example of auto-executing dispatch to change local global state "test" variable
  // useEffect(() => {
  //   dispatch({
  //     type: 'SET_TEST_DATA',
  //     payload: 456,
  //   })
  // }, [])

  // React Query example
  // const {
  //   isLoading,
  //   error,
  //   data: queryData,
  // } = useQuery<{ subscribers_count }>(['repoData'], () =>
  //   fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) =>
  //     res.json(),
  //   ),
  // )
  // console.log({ localState: dapp }, { remoteData: { isLoading, error, queryData } })

  useEffect(() => {
    // console.log(window)
  }, [])

  return (
    <Layout>
      <Header />
      <Content>
        <div
          className="page-wrap"
          sx={{
            canvas: {
              background: 'black',
              maxWidth: '100%',
            },
            'details, details *': {
              fontSize: '.8rem',
            },
          }}
        >
          <BannerTitle />
          <SubmitROMForm />
          <section>
            
            <div>
              <div
                id="gear-icon"
                onClick={() => {
                  setShowSettings(!showSettings)
                }}
                sx={{
                  position: 'absolute',
                  right: 0,
                  bottom: '102%',
                  zIndex: 100,
                  cursor: 'pointer',
                  width: '2em',
                  height: '2em',
                  background: '#333',
                  borderRadius: '1em',
                  WebkitAnimation: '1s gear-rotate linear infinite',
                  MozAnimation: '1s gear-rotate linear infinite',
                  animation: '1s gear-rotate linear infinite',
                  '@keyframes loading': {
                    from: {
                      transform: 'rotate(0deg)',
                    },
                    to: {
                      transform: 'rotate(360deg)'
                    }
                  },
                  '&:before': {
                    width: '2.8em',
                    height: '2.8em',
                    background: 'linear-gradient(0deg,transparent 39%,#333 39%,#333 61%, transparent 61%), linear-gradient(60deg,transparent 42%,#333 42%,#333 58%, transparent 58%), linear-gradient(120deg,transparent 42%,#333 42%,#333 58%, transparent 58%)',
                    position: 'absolute',
                    content: '""',
                    top: '-0.4em',
                    left: '-0.4em',
                    borderRadius: '1.4em',
                  },
                  '&:after': {
                    width: '1em',
                    height: '1em',
                    background: 'white',
                    position: 'absolute',
                    content: '""',
                    top: '0.5em',
                    left: '0.5em',
                    borderRadius: '0.5em',
                  },
                  '&:hover': {
                    animation: 'loading 2s linear infinite'
                  }
                }}
              >⚙</div>
              <SettingsBox showSettings={showSettings} />
              <GameCanvasContainer />
            </div>
            <ProjectInfo />
          </section>
          <canvas hidden id="fullCanvas" width="1280" height="720"></canvas>
        </div>
        <br/><br/><br/><br/>
      </Content>
    </Layout>
  )
}

export default Home
