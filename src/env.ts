import dotenv from 'dotenv';
dotenv.config();

//Enviroments
export const CURRENCY_API_URL: string = <string>process.env.CURRENCY_API_URL
export const CURRENCY_WEBSOCKET_URL: string = <string>process.env.CURRENCY_WEBSOCKET_URL
export const TIME_FRAME: string = <string>process.env.TIME_FRAME
export const TIME_FRAME_IN_MS: number = Number(process.env.TIME_FRAME_IN_MS)
export const API_KEY: string = <string>process.env.API_KEY
export const TELEGRAM_BOT_TOKEN: string = <string>process.env.TELEGRAM_BOT_TOKEN
export const TELEGRAM_OWNER_CHAT_ID: string = <string>process.env.TELEGRAM_OWNER_CHAT_ID
export const CRYPTO_PAIR: string = <string>process.env.CRYPTO_PAIR
export const WEB_DEPLOY: string = <string>process.env.WEB_DEPLOY