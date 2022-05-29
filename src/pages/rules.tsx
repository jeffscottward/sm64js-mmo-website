/** @jsxImportSource theme-ui **/
import { Themed } from 'theme-ui'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import SM64Button from '../components/SM64Button'

const Rules = () => {
  const handleAceptRules = () => {}
  return (
    <Layout>
      <Header />
      <Content>
      <Themed.h1>Rules</Themed.h1>
        <div className="text-wrap" sx={{ textAlign: 'center' }}>
          <img src="/images/logos/logo_colored.png" sx={{ width: '400px' }} alt="logo" />
          <Themed.p>
            <b>Welcome to the multiplayer version of sm64js! To play you have to follow the
            listed rules below.</b>
          </Themed.p>
          <hr />
          <Themed.p>Treat all users with respect.</Themed.p>
          <Themed.p>
            Keep chat messages appropriate and safe for school/work, swearing will be
            censored, do not evade the filter. Slurs and vulgar language are also
            disallowed.
          </Themed.p>
          <Themed.p>
            Don't share information on how to illegally obtain any copyrighted material
            such as ROMs or ROM assets.
          </Themed.p>
          <Themed.p>
            Inappropriate or offensive behavior may result in a temporary or permanent
            mute or ban.
          </Themed.p>
          <Themed.p>
            Failure to comply with these rules will result in punishment, including but
            not limited to a mute or ban of your account.
          </Themed.p>
          {/* <SM64Button
            id="acceptRules"
            color="green"
            onClick={() => {
              handleAceptRules
            }}
          >
            Accept Rules
          </SM64Button> */}
        </div>
      </Content>
    </Layout>
  )
}

export default Rules
