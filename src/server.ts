import { TIME_FRAME_IN_MS } from "./env";
import { getData, getMsgWs , startWs } from "./data-related/api";
import crossEMA from "./data-related/calculate";
import BotSendMsg from "./bot-related/telegram";

function botFn(message: string) {
  return BotSendMsg(message)
}

function calculateFn(prices: string[]) {
  return crossEMA(prices, botFn);
}

async function ApplicationStart() {
  try {
    const updateMinutes = TIME_FRAME_IN_MS;
    let data = await getData();
    let closePricesArrFromAPI = data.getClosePricesArr();
    const ws = startWs()
    getMsgWs(ws,closePricesArrFromAPI, calculateFn);

    setInterval(async () => {
      data = await getData();
      closePricesArrFromAPI = data.getClosePricesArr();
      getMsgWs(ws,closePricesArrFromAPI, calculateFn);
    }, updateMinutes);
    

  } catch (error) {
    console.error("An error occurred:", error);
  }
}

ApplicationStart();