import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e4c4ff',
    },
    secondary: {
      main: '#ffd9f5',
    },
    background: {
      default: '#241735',
      paper: '#392954',
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
  shape: {
    borderRadius: 16,
  },
})

export default theme
