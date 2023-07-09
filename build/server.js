"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const express_1 = __importDefault(require("express"));
// function botFn(message: string) {
//   return BotSendMsg(message)
// }
// function calculateFn(prices: string[]) {
//   return crossEMA(prices, botFn);
// }
// async function ApplicationStart() {
//   try {
//     const updateMinutes = TIME_FRAME_IN_MS;
//     let data = await getData();
//     let closePricesArrFromAPI = data.getClosePricesArr();
//     const ws = startWs()
//     getMsgWs(ws,closePricesArrFromAPI, calculateFn);
//     console.log("Bot Running Successfuly.");
//     setInterval(async () => {
//       data = await getData();
//       closePricesArrFromAPI = data.getClosePricesArr();
//       getMsgWs(ws,closePricesArrFromAPI, calculateFn);
//     }, updateMinutes!);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }
//This Is For Free Hostings Deploy Set "WEB_DEPLOY" VAR FALSE
if (env_1.WEB_DEPLOY === "true") {
    const PORT = process.env.PORT || "5000";
    const app = (0, express_1.default)();
    app.get("/", function (req, res) {
        res.status(200).send("Bot Is Working.");
    });
    app.listen(PORT, function () {
        // ApplicationStart();
        console.log(`🚀 WebServer Running On Port :${PORT}`);
    });
}
else {
    // ApplicationStart();
}
