import type { AppProps } from 'next/app'
import { AuthProvider } from 'context'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from 'utils/helpers'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <AuthProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </AuthProvider>
    </CacheProvider>
  )
}
export default MyApp
