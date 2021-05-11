require("dotenv").config();

module.exports = {
  // distDir: "build",
  serverRuntimeConfig: {
    // Will only be available on the server side
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
    DOMAIN_NAME: process.env.DOMAIN_NAME,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    DOMAIN_NAME: process.env.DOMAIN_NAME,
  },
};
