import React from "react";
// import { AppProps } from 'next/app';
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Minotaur({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default Minotaur;
