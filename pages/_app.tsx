import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import theme from 'styles/theme';
import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles';
import '@mui/styles';
import { CssBaseline } from '@mui/material';
import { fireApp, initializeFireApp } from 'utils/firestore';
import store, { initializeStore } from 'utils/store';
import { Provider, useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { loginUser } from 'utils/store/reducers/userReducer';
// declare module '@mui/styles/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }
declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

class MyApp extends App {
  componentDidMount() {
    if (!fireApp.name) initializeFireApp();
    if (!store) initializeStore();
    
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Head>
              <title>My page</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
            </Head>
            {/* ThemeProvider makes the theme available down the React
            tree thanks to React context. */}

            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    );
  }
}

export default MyApp;
