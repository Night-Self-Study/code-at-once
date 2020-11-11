import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/client';

import client from '#/modules/ApolloClient';
import './index.css';
import App from './App';
import CodeContextProvider from './contexts/CodeContext';

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
  <ApolloProvider client={client}>
    <CodeContextProvider>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </CodeContextProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
