// const withSass = require('@zeit/next-sass');
// const withImages = require('next-images');
// const withLess = require('@zeit/next-less')
// const withCSS = require('@zeit/next-css')
require('dotenv').config();

module.exports = {
  env: {
    ANY_ENV_KEY: "ANY_ENV_VARIABLE",
    MONGO_URI: process.env.MONGO_URI,
  }
};
