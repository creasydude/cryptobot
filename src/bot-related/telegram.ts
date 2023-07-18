import TelegramBot from "node-telegram-bot-api";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_OWNER_CHAT_ID } from "../env";

const botToken = TELEGRAM_BOT_TOKEN!;
const ownerChatId = TELEGRAM_OWNER_CHAT_ID!;
const TBot = new TelegramBot(botToken, { polling: true });

TBot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    // Check if the bot is already started
    if (!isBotStarted(chatId)) {
      // Perform start action
      startBot(chatId);
      TBot.sendMessage(chatId, 'Bot started!');
    } else {
        TBot.sendMessage(chatId, 'Bot already started!');
    }
  });
  
  TBot.onText(/\/stop/, (msg) => {
    // const chatId = msg.chat.id;
    const chatId = ownerChatId;
    // Check if the bot is already stopped
    if (isBotStarted(chatId)) {
      // Perform stop action
      stopBot(chatId);
      TBot.sendMessage(chatId, 'Bot stopped!');
    } else {
        TBot.sendMessage(chatId, 'Bot already stopped!');
    }
  });

  const botState : any = {};

  function startBot(chatId : any) {
    botState[chatId] = true;
  }
  
  function stopBot(chatId : any) {
    botState[chatId] = false;
  }
  
  function isBotStarted(chatId : any) {
    return botState[chatId] || false;
  }
    

// let isBotActive = false;

// function resetBotActive(mode: string) {
//     if (mode === "start") {
//         isBotActive = true;
//     } else if (mode === "stop") {
//         isBotActive = false;
//     }
// }

// TBot.onText(/\/start/, (msg) => {
//     if (!isBotActive) {
//         TBot.sendMessage(ownerChatId, "You Started Bot Successfully. ASAP You Will Receive Your Signals.");
//         resetBotActive("start");
//     }
// });

// TBot.onText(/\/stop/, (msg) => {
//     if (isBotActive) {
//         TBot.sendMessage(ownerChatId, "Bot activities stopped successfully.");
//         resetBotActive("stop");
//     }
// });

function BotSendMsg(message: string) {
    if (isBotStarted(ownerChatId)) {
        TBot.sendMessage(ownerChatId, message);
    }
}

export default BotSendMsg;