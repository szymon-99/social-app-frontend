import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { cyan, orange } from '@mui/material/colors'

let theme = createTheme({
  palette: {
    primary: {
      main: cyan[300],
    },
    secondary: {
      main: orange[300],
    },
  },
})
theme = responsiveFontSizes(theme)
