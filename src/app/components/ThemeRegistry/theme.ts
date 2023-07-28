import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { COLORS } from '@/constants/colors'
import { colors } from '@mui/material'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: `${COLORS.WHITE_COLOR}`,
          fontSize: `1rem`,
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: `1rem`,
          fontWeight: 400,
          color: `#f3f3f3`,
          '&.MuiInput-underline:after': {
            borderBottom: `2px solid ${colors.blue[700]}`,
          },
          '&.MuiInput-underline:hover:before': {
            borderBottom: `2px solid ${COLORS.WHITE_COLOR}`,
          },
        },
        underline: {
          '&:before': {
            borderBottom: `2px solid ${COLORS.WHITE_COLOR}`,
          },
        },
      },
    },
  },
})

export default theme
