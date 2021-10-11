import type { AppProps } from 'next/app'
import { AuthProvider } from 'context'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from 'utils/helpers'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme'
import Layout from 'components/templates/layout'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MyApp
