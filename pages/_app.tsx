import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import theme from 'styles/theme';
import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles';
import '@mui/styles';
import { CssBaseline } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '../lib/apollo-client';
import { GetCompany } from 'pages';
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
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const client = getApolloClient();

    const { Component, pageProps, router } = this.props;
    return (
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
          <ApolloProvider client={client}>
            <GetCompany />
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}

export default MyApp;
