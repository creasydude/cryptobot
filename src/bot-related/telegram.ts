import TelegramBot from "node-telegram-bot-api";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_OWNER_CHAT_ID } from "../env";

const botToken = TELEGRAM_BOT_TOKEN!;
const ownerChatId = TELEGRAM_OWNER_CHAT_ID!;
const TBot = new TelegramBot(botToken, { polling: true });

let isBotActive = false;

function resetBotActive(mode: string) {
    if (mode === "start") {
        isBotActive = true;
    } else if (mode === "stop") {
        isBotActive = false;
    }
}

TBot.onText(/\/start/, (msg) => {
    if (!isBotActive) {
        TBot.sendMessage(ownerChatId, "You Started Bot Successfully. ASAP You Will Receive Your Signals.");
        resetBotActive("start");
    } else {
        TBot.sendMessage(ownerChatId, "Bot is already active!");
    }
});

TBot.onText(/\/stop/, (msg) => {
    if (isBotActive) {
        TBot.sendMessage(ownerChatId, "Bot activities stopped successfully.");
        resetBotActive("stop");
    } else {
        TBot.sendMessage(ownerChatId, "Bot is already stopped.");
    }
});

function BotSendMsg(message: string) {
    if (isBotActive) {
        TBot.sendMessage(ownerChatId, message);
    }
}

export default BotSendMsg;