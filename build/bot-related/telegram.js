"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../env");
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
let isBotActive = true;
const botToken = env_1.TELEGRAM_BOT_TOKEN;
const ownerChatId = env_1.TELEGRAM_OWNER_CHAT_ID;
const TBot = new node_telegram_bot_api_1.default(botToken, { polling: true });
TBot.onText(/\/start/, (msg) => {
    isBotActive = true;
    //If You Want You Can Make Bot Public But I Use Owner Chat Id Hard Coded
    // const chatId = msg.chat.id;
    TBot.sendMessage(ownerChatId, "You Started Bot Successfuly , ASAP You Will Gain Your Signals.");
});
TBot.onText(/\/stop/, (msg) => {
    //If You Want You Can Make Bot Public But I Use Owner Chat Id Hard Coded
    // const chatId = msg.chat.id;
    TBot.sendMessage(ownerChatId, 'Bot Activities Stopped Successfuly.');
    isBotActive = false; // Update the bot status to stopped
});
//Make Functions To Use Bot
function BotSendMsg(message) {
    if (isBotActive) {
        TBot.sendMessage(ownerChatId, message);
    }
    else {
        return;
    }
}
exports.default = BotSendMsg;
