import { MyAppProps } from 'types'
import ProtectedRoute from '@components/authProvider/protectedRoute'
import AuthProvider from '@components/authProvider/authProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { createEmotionCache } from 'utils/helpers'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme'
import { Navbar, Footer } from '@components/layout'
import { Provider } from 'react-redux'
import { store } from '@store/index'

const clientSideEmotionCache = createEmotionCache()

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <CssBaseline />
            <Navbar />
            {Component.protected ? (
              <ProtectedRoute>{<Component {...pageProps} />}</ProtectedRoute>
            ) : (
              <Component {...pageProps} />
            )}

            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}
export default MyApp
