import React from "react";
// import { AppProps } from 'next/app';
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


// eslint-disable-next-line react/prop-types
function Minotaur({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default Minotaur;
