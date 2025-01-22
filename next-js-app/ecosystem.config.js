const dotenv = require("dotenv");
const envConfig = dotenv.config().parsed;

module.exports = {
  apps: [
    {
      name: "next-js-app",
      script: "npm",
      args: "start",
      env: {
        ...envConfig,
      },
    },
  ],
};
