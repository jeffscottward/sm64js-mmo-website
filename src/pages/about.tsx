/** @jsxImportSource theme-ui **/
import { Themed } from 'theme-ui'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'

const About = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <div className="text-wrap" sx={{ maxWidth: '900px' }}>
          <Themed.h1>About</Themed.h1>
          <Themed.h3>What is this?</Themed.h3>
          <Themed.p>
            This is an ongoing work-in-progress port of the{' '}
            <a href="https://github.com/n64decomp/sm64">decompilation</a> of original
            Nintendo game, Super Mario 64, to native Javascript (No Emulation) (No
            WebAssembly). This project required creating a Javascript WebGL port of{' '}
            <a href="https://github.com/Emill/n64-fast3d-engine">N64 Fast 3D Renderer</a>{' '}
            originally implemented with OpenGL in C. This project also includes the
            development of online mass multiplayer versions of sm64js and other custom
            multiplayer game modes.
          </Themed.p>
          <Themed.h3>What is the purpose of this port?</Themed.h3>
          <ul>
            <li>
              <b>Extensibility:</b>
              <ul sx={{ ml: 3 }}>
                <li> - More access to more developers to add custom content</li>
              </ul>
            </li>
            <li>
              <b>Rapid Prototyping:</b>
              <ul sx={{ ml: 3 }}>
                <li> - More friendly to importing other software modules/packages</li>
                <li> - More friendly to prototyping multiplayer custom games/mods</li>
              </ul>
            </li>
            <li>
              <b>Portablity:</b>
              <ul sx={{ ml: 3 }}>
                <li>
                  {' '}
                  - SM64 projects can run on any device with a web browser anywhere
                  without needing to download or install anything
                </li>
                <li>
                  {' '}
                  - Opportunity to refactor / rewrite with modern coding style and cleanup
                </li>
              </ul>
            </li>
          </ul>
          <Themed.h3>What's wrong with WebAssembly/Emscripten?</Themed.h3>
          <div>
            Nothing. However, I believe access to this game's source code in a higher
            level programming language opens it up to a wider pool of potentially capable
            developers / modders. And seems to me like a natural next step following in
            the amazing work done by the decomp team and pc port.
          </div>
          <Themed.h3>Credits</Themed.h3>
          <Themed.p>
            <b>
              <a href="https://github.com/sm64js/sm64js/graphs/contributors">
                All Developers & Contributors
              </a>
            </b>
          </Themed.p>
          <Themed.p>
            <b>
              <a href="https://github.com/Emill/n64-fast3d-engine">
                N64 Fast 3D Renderer
              </a>
            </b>
            <br />
            <span>
              OpenGL Implementation of a 3D renderer for the Nintendo 64's graphics
            </span>
            <small>
              <i>Snuffy had to reimplement this in Javascript and WebGL</i>
            </small>
          </Themed.p>
          <Themed.p>
            <b>
              <a href="https://github.com/djoslin0/sm64ex-coop">Super Mario 64 Coop</a>
            </b>
            <span>
              Online cooperative multiplayer mod for SM64, aiming to synchronize all
              entities and every level for two players.
            </span>
            <br />
            <small>
              <i>
                Special thanks to <a href="https://github.com/djoslin0">djoslin0</a>, the
                developer of this project, for consultation and advice on the
                implementation of multiplayer for sm64js. I also ported some code from
                this project directly
              </i>
            </small>
          </Themed.p>
          <Themed.h3>Other Libraries</Themed.h3>
          <ul>
            <li>
              <a href="https://jeremyckahn.github.io/keydrown/">Keydrown</a>
            </li>
          </ul>
          <Themed.h3>Special Thanks</Themed.h3>
          <ul>
            <li>
              <a href="https://github.com/djoslin0">djoslin0</a>
            </li>
            <li>
              <a href="https://github.com/yandeu">Yannick</a>
            </li>
            <li>
              <a href="https://github.com/josegonzalez">Jose Diaz-Gonzalez</a>
            </li>
            <li>
              <a href="https://github.com/Emill">Emill</a>
            </li>
            <li>
              <a href="https://linktr.ee/Render96">Render96</a>
            </li>
            <li>
              <a href="https://www.deviantart.com/fsuarez913/art/Super-Mario-256-FONT-312162535">
                fsuarez913
              </a>
            </li>
            <li>
              <a href="https://fontstruct.com/fontstructions/show/866471/mario_64_textbox">
                TheMH
              </a>
            </li>
            <li>
              <a href="https://maly.io/@Troll/733515">Troll</a>
            </li>
            <li>
              <a href="https://twitter.com/YinyangGio14">YinyangGio</a>
            </li>
          </ul>
          <Themed.h3>Contact</Themed.h3>
          <div>
            Questions? Suggestions? Want to help with this project? Check our{' '}
            <a target="_BLANK" href="https://discord.gg/7UaDnJt">
              Discord
            </a>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default About
