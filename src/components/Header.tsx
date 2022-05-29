/** @jsxImportSource theme-ui **/
import { Flex, Themed } from 'theme-ui'
import Link from 'next/link'

const Header = () => {
  return (
    <header
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#FFF',
        height: '50px',
        padding: '1em',
        background: '#333',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        li: {
          display: 'flex',
          alignItems: 'center'
        },
        a: {
          display: 'flex',
          textAlign: 'center',
          background: 'rgba(255,255,255,0)',
          textDecoration: 'none',
          color: '#FFF !important',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover, &:active': {
            background: 'rgba(0,0,0,0.2)',
          },
          '&.active': {
            background: 'rgba(0,0,0,0.4)',
          },
          div: {
            display: 'grid',
            placeItems: 'center',
            img: {
              height: '20px',
              display: 'block',
            },
          },
        },
        zIndex: '50',
        '.menu': {
          display: 'flex',
          flexDirection: 'row',
          listStyleType: 'none',
          margin: '0',
          padding: '0',
        },
        '.menu > li': {
          margin: '0 1rem',
          overflow: 'hidden',
        },
        '.menu-button-container': {
          display: 'none',
          height: '100%',
          width: '30px',
          cursor: 'pointer',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '#menu-toggle': {
          display: 'none',
        },
        '.menu-button, .menu-button::before, .menu-button::after': {
          display: 'block',
          backgroundColor: '#fff',
          position: 'absolute',
          height: '4px',
          width: '30px',
          transition: 'transform 400ms cubic-bezier(0.23, 1, 0.32, 1)',
          borderRadius: '2px',
        },
        '.menu-button::before': {
          content: '""',
          marginTop: '-8px',
        },
        '.menu-button::after': {
          content: '""',
          marginTop: '8px',
        },
        '#menu-toggle:checked + .menu-button-container .menu-button::before': {
          marginTop: '0px',
          transform: 'rotate(405deg)',
        },
        '#menu-toggle:checked + .menu-button-container .menu-button': {
          background: 'rgba(255, 255, 255, 0)',
        },
        '#menu-toggle:checked + .menu-button-container .menu-button::after': {
          marginTop: '0px',
          transform: 'rotate(-405deg)',
        },
        '@media (max-width: 639px)': {
          '.menu-button-container': {
            display: 'flex',
          },
          '.menu': {
            position: 'absolute',
            top: '0',
            marginTop: '50px',
            left: '0',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '#menu-toggle ~ .menu li': {
            height: '0',
            margin: '0',
            padding: '0',
            border: '0',
            transition: 'height 400ms cubic-bezier(0.23, 1, 0.32, 1)',
          },
          '#menu-toggle:checked ~ .menu li': {
            border: '1px solid #333',
            height: '2.5em',
            padding: '0.5em',
            transition: 'height 400ms cubic-bezier(0.23, 1, 0.32, 1)',
          },
          '.menu > li': {
            display: 'flex',
            margin: '0',
            padding: '0.5em 0',
            width: '100%',
            color: 'white',
            backgroundColor: '#222',
          },
          '.menu > li:not(:last-child)': {
            borderBottom: '1px solid #444',
          },
        },
      }}
    >
      <a href="/">
        <img
          src="/images/logos/logo_colored.png"
          sx={{ height: '3rem', marginLeft: '20px' }}
        />
      </a>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <a target="_BLANK" href="https://vanilla.sm64js.com">
            Vanilla
          </a>
        </li>
        <li>
          <a target="_BLANK" href="https://60fps.sm64js.com">
            60FPS
          </a>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li>
          <Link href="/rules">Rules</Link>
        </li>
        <li>
          <a target="_BLANK" href="https://github.com/sm64js/sm64js">
            <div>
              <img src={'/images/icons/github-icon.svg'} sx={{ width: '20px' }} />
            </div>
          </a>
        </li>
        <li>
          <a target="_BLANK" href="https://discord.gg/7UaDnJt">
            <div>
              <img src={'/images/icons/discord-icon.svg'} sx={{ width: '20px' }} />
            </div>
          </a>
        </li>
      </ul>
      {/* </nav> */}
    </header>
  )
}

export default Header
