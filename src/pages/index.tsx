/** @jsxImportSource theme-ui **/
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import { useStateValue } from '../state/state'
import SignInbox from '../components/SignInbox'
import OptionsBox from '../components/OptionsBox'
import CustomSkinMenu from '../components/CustomSkinMenu'
import ControlsBox from '../components/ControlsBox'
import GameCanvasContainer from '../components/GameCanvasContainer'
import ConnectionStatus from '../components/ConnectionStatus'
import MusicSection from '../components/MusicSection'
import SubmitROMForm from '../components/SubmitROMForm'
import ProjectInfo from '../components/ProjectInfo'
import BannerTitle from '../components/BannerTitle'

const Home = () => {
  // Example of getting local global state
  const [{ dapp }, dispatch] = useStateValue()

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
    console.log(window)
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
            <ProjectInfo />
            <SignInbox />
            <OptionsBox />
            <CustomSkinMenu />
            <ControlsBox />
            <GameCanvasContainer />
            <ConnectionStatus />
            <MusicSection />
          </section>
          <canvas hidden id="fullCanvas" width="1280" height="720"></canvas>
        </div>
      </Content>
    </Layout>
  )
}

export default Home
