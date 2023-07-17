"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const env_1 = require("../env");
const botToken = env_1.TELEGRAM_BOT_TOKEN;
const ownerChatId = env_1.TELEGRAM_OWNER_CHAT_ID;
const TBot = new node_telegram_bot_api_1.default(botToken, { polling: true });
let isBotActive = true;
TBot.onText(/\/start/, (msg) => {
    if (isBotActive) {
        TBot.sendMessage(ownerChatId, "You Started Bot Successfully. ASAP You Will Receive Your Signals.");
    }
    else {
        TBot.sendMessage(ownerChatId, "Bot is already active!");
    }
});
TBot.onText(/\/stop/, (msg) => {
    if (isBotActive) {
        TBot.sendMessage(ownerChatId, "Bot activities stopped successfully.");
    }
    else {
        TBot.sendMessage(ownerChatId, "Bot is already stopped.");
    }
    isBotActive = false;
});
function BotSendMsg(message) {
    if (isBotActive) {
        TBot.sendMessage(ownerChatId, message);
    }
}
exports.default = BotSendMsg;
