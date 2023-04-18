import React from 'react';
import { GlobalStyle } from '../styles/reset';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MyApp = ({ Component, pageProps }) => {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>;
};

export default MyApp;