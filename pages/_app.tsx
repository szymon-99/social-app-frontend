import type { AppProps } from 'next/app'
import { AuthProvider } from 'context'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from 'utils/helpers'
import {
  DehydratedState,
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from 'react-query'
import { useRef } from 'react'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  dehydratedState: DehydratedState
}

function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    dehydratedState,
  } = props
  const queryClient = useRef(new QueryClient())
  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={dehydratedState}>
          <AuthProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </AuthProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  )
}
export default MyApp
