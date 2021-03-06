import {config} from 'dotenv';

const envFound = config({path: `./.env.${process.env.NODE_ENV || 'development'}`});
if (!envFound) throw new Error("Couldn't find .env file");

export default {
  NODE_ENV: process.env.NODE_ENV,

  port: process.env.PORT || 5000,

  logs: {level: process.env.LOG_LEVEL || 'silly'},

  MONGODB_URI: process.env.MONGODB_URI,

  SERVER_TRADING_URI: process.env.SERVER_TRADING_URI,

  SOCKET_TRADING_URI: process.env.SOCKET_TRADING_URI,
};
