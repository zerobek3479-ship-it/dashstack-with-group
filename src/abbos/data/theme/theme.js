import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#4880ff',
          light: '#76a4ff',
          dark: '#2f5fe0',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#8f9bb3',
          light: '#b5bfd1',
          dark: '#697589',
          contrastText: '#ffffff',
        },
        background: {
          default: '#f5f6fa',
          paper: '#ffffff',
        },
        text: {
          primary: '#202224',
          secondary: '#8f9bb3',
        },
        divider: '#edf0f6',
      },
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h5: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 20,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
})

export default theme
