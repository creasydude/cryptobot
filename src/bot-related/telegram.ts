import { TELEGRAM_BOT_TOKEN, TELEGRAM_OWNER_CHAT_ID } from "../env";
import TelegramBot from "node-telegram-bot-api";

let isBotActive = true;
const botToken = TELEGRAM_BOT_TOKEN!;
const ownerChatId = TELEGRAM_OWNER_CHAT_ID!;
const TBot = new TelegramBot(botToken);
TBot.onText(/\/start/, (msg) => {
    isBotActive = true;
    //If You Want You Can Make Bot Public But I Use Owner Chat Id Hard Coded
    // const chatId = msg.chat.id;
    TBot.sendMessage(ownerChatId, "You Started Bot Successfuly , ASAP You Will Gain Your Signals.")
});

TBot.onText(/\/stop/, (msg) => {
    //If You Want You Can Make Bot Public But I Use Owner Chat Id Hard Coded
    // const chatId = msg.chat.id;
    TBot.sendMessage(ownerChatId, 'Bot Activities Stopped Successfuly.');
    isBotActive = false; // Update the bot status to stopped
});

//Make Functions To Use Bot
function BotSendMsg(message: string) {
    if (isBotActive) {
        TBot.sendMessage(ownerChatId, message);
    } else {
        return
    }
}

export default BotSendMsg;