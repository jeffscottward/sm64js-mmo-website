import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { Global, css } from '@emotion/react'
import theme from '../theme/theme'
import 'animate.css/animate.css'
import Head from 'next/head'
import { StateProvider } from '../state/state'
import RainbowWagmiProvider from '../components/RainbowWagmiProvider'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <RainbowWagmiProvider>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              @font-face {
                font-family: 'TextBoxFont';
                font-style: normal;
                font-weight: 400;
                src: url('/fonts/mario-64-textbox-theme.ttf') format('truetype');
              }
            `}
          />
          <Head>
            <title>DAPP BASE</title>
          </Head>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </RainbowWagmiProvider>
    </StateProvider>
  )
}

export default App
