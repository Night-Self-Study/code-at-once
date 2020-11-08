import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './index.css';
import App from './App';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'GmarketSansMedium',
    button: {
      // Material UI Button always has upper case. `textTransform: 'none'` can prevent it.
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#0ca0ce',
      contrastText: '#fff',
    },
    secondary: {
      main: '#384D54',
      contrastText: '#fff',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
