import React from 'react';
import { GlobalStyle } from '../styles/reset';

const MyApp = ({ Component, pageProps }) => {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>;
};

export default MyApp;