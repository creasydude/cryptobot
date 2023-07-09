import { TIME_FRAME_IN_MS , WEB_DEPLOY} from "./env";
import { getData, getMsgWs , startWs } from "./data-related/api";
import crossEMA from "./data-related/calculate";
import BotSendMsg from "./bot-related/telegram";
import express , {Request , Response} from 'express'

function botFn(message: string) {
  return BotSendMsg(message)
}

function calculateFn(prices: string[]) {
  return crossEMA(prices, botFn);
}

async function ApplicationStart() {
  try {
    const updateMinutes = Number(TIME_FRAME_IN_MS);
    let data = await getData();
    let closePricesArrFromAPI = data.getClosePricesArr();
    const ws = startWs()
    getMsgWs(ws,closePricesArrFromAPI, calculateFn);
    console.log("Bot Running Successfuly.");

    setInterval(async () => {
      data = await getData();
      closePricesArrFromAPI = data.getClosePricesArr();
      getMsgWs(ws,closePricesArrFromAPI, calculateFn);
    }, updateMinutes!);
    

  } catch (error) {
    console.error("An error occurred:", error);
  }
}

//This Is For Free Hostings Deploy Set "WEB_DEPLOY" VAR FALSE
if (WEB_DEPLOY === "true") {
  const PORT = <string>process.env.PORT || "5000";
  const app = express()
  app.get("/",function (req : Request,res : Response) {
    res.status(200).send("Bot Is Working.")
  });
  app.listen(PORT, function () {
    ApplicationStart();
    console.log(`🚀 WebServer Running On Port :${PORT}`);
  });
} else {
  ApplicationStart();
}