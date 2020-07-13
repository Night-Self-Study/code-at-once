import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
	typography: {
		fontFamily: 'GmarketSansMedium',
		fontWeightLight: 200,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 600,
	},
	palette: {
		primary: {
			light: '#779ECB',
			main: '#7B90E3',
			dark: '#0F4C81',
			contrastText: '#fff',
		},
		secondary: {
			light: '#827397',
			main: '#4d4c7d',
			dark: '#363062',
			contrastText: '#fff',
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<App />
			</BrowserRouter>
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
