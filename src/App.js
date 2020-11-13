import React from 'react'

import './global.css'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import Routes from './routes'

const App = () => {

  const theme = createMuiTheme({
    typography: {    
      font: '400 14px Poppins, sans-serif',
      fontFamily: 'Poppins, sans-serif',
    },

    overrides: {
      MuiOutlinedInput: {
        root: {
          color: 'black',
          backgroundColor: 'white'
        }
      },
      MuiSelect: {
        root: {
          backgroundColor: 'white',
        },
        select: {
          '&:focus': {
            backgroundColor: 'white',
            borderRadius: '3px',
          },
          borderRadius: '3px'
        }
      },
      MuiMenu: {
        paper: {
          maxHeight: '10rem'
        }
      },
      MuiTextField: {
        root: {
          width: '100%',
        }
      }
    },

    palette: {
      primary: {
        main: 'rgb(90, 9, 145)',
      },
      secondary: {
        main: '#fff',
      },
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App