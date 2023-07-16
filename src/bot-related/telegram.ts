import { TELEGRAM_BOT_TOKEN, TELEGRAM_OWNER_CHAT_ID } from "../env";
import TelegramBot from "node-telegram-bot-api";

let isBotActive = true;
let isStartActive = false;
const botToken = TELEGRAM_BOT_TOKEN!;
const ownerChatId = TELEGRAM_OWNER_CHAT_ID!;
const TBot = new TelegramBot(botToken, { polling: true });
TBot.onText(/\/start/, (msg) => {
    isBotActive = true; // Update the bot status to started
    //I Use Bot Private And My Chat Id
    if (!isStartActive) {
        TBot.sendMessage(ownerChatId, "You Started Bot Successfuly , ASAP You Will Gain Your Signals.")
        isStartActive = true;
    } else {
        TBot.sendMessage(ownerChatId, "Bot Is Already Active!")
    }
});

TBot.onText(/\/stop/, (msg) => {
    isBotActive = false; // Update the bot status to stopped
    //I Use Bot Private And My Chat Id
    if (isStartActive) {
        TBot.sendMessage(ownerChatId, 'Bot Activities Stopped Successfuly.');
    } else {
        TBot.sendMessage(ownerChatId, 'Bot Already Stopped.');
        isStartActive = false;
    }
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