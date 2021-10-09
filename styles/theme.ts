import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { teal, orange } from '@mui/material/colors'

let theme = createTheme({
  palette: {
    primary: {
      main: teal[300],
    },
    secondary: {
      main: orange[300],
    },
  },
})
theme = responsiveFontSizes(theme)

export default theme
