# Crypto Signal Bot

### Example
[Example Image](./example.jpg "Example")

### Made With
- Node.js
- Typescript

### Note
This Bot Made With `cryptocompare.com` API , So if You Want To Use It Go To This Website And Create Free Account And Use The `API KEY` Website Gives You.


### How It Works

- This bot using MACD + EMA 200 + Cross Over Of EMA 25 & EMA 12;
-  It Has 70~80% Winrate
- When You Run Bot It And Go And Start The Telegram Bot It Will Send You Buy/Sell Signals Automatic.
- I Make This Bot For Educational Purposes So Use It At Your Own Risk!


[My Resume](https://creasy.ir/)

#### Usage And Run

`$ npm run dev` For Development
`$ npm run build` For Build From Ts To Js
`$ npm start` For Run Builded Js Script

#### Enviroments

In the `src` Folder It Is A File Names `env.ts` Just Edit It Or Install `dotenv` And Add This In An Enviroment File `.env` Its Your Choice.

| Variable | Discription |
| ------------- | ------------- |
| CURRENCY_API_URL   | The API URL You Get From The Site , You Can Go To Cryptocompare API Documentation For Example : `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USDT&limit=400&aggregate=30` |
| CURRENCY_WEBSOCKET_URL  | Like Up Thing Go To Cryptocompare API Documentation For Example : `wss://streamer.cryptocompare.com/v2?api_key=` |
| TIME_FRAME   | Time Frame You Want To Use You Should Sync With API URL For Example I Use 30 Min Timeframe If You See In API URL `aggregate=30` Means 30 Min so I Use `30MIN` In Here
| TIME_FRAME_IN_MS   | Time Frame You Use In Miliseconds For Example For 30 Min Time Frame Write `1800000`
| API_KEY   | API KEY You Get From Cryptocompare Website |
| TELEGRAM_BOT_TOKEN   | The TOKEN Of Your Bot Make With Bot Father In Telegram |
| TELEGRAM_OWNER_CHAT_ID   | Chat Id Of Your Telegram Account You Can Get It From `@C_ID_BOT` |
| CRYPTO_PAIR    | The Crypto Pair You Want Use Like Time Frame You Should Sync With API URL So I Use `BTC/USDT` |
| WEB_DEPLOY    | If You Want Deploy This To Webhostings (Like Free Backend Services) Set It To `true` else not set or set it `false` |
| WEB_URL    | If You Set `WEB_DEPLOY=TRUE` Then You Should Enter The URL Of Ur Backend App For Example : `https://example.com` |

### Good Luck