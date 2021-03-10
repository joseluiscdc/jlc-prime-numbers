require('dotenv').config();

const config = {
  secret: process.env.SECRET_JWT,
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGODB_URI.toString(),
};

module.exports = { config }