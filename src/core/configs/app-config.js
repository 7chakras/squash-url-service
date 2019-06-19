const appConfigDev = {
  service: {
    appBasePath: "http://localhost:4000",
    port: process.env.PORT,
    environment: process.env.NODE_ENV
  }
};

const appConfigProd = {
  service: {
    appBasePath: process.env.WEBSITE_HOSTNAME,
    port: process.env.PORT,
    environment: process.env.NODE_ENV
  }
};

module.exports =
  process.env.NODE_ENV === "production" ? appConfigProd : appConfigDev;
