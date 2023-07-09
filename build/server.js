"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const api_1 = require("./data-related/api");
const calculate_1 = __importDefault(require("./data-related/calculate"));
const telegram_1 = __importDefault(require("./bot-related/telegram"));
const express_1 = __importDefault(require("express"));
function botFn(message) {
    return (0, telegram_1.default)(message);
}
function calculateFn(prices) {
    return (0, calculate_1.default)(prices, botFn);
}
function ApplicationStart() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateMinutes = env_1.TIME_FRAME_IN_MS;
            let data = yield (0, api_1.getData)();
            let closePricesArrFromAPI = data.getClosePricesArr();
            const ws = (0, api_1.startWs)();
            (0, api_1.getMsgWs)(ws, closePricesArrFromAPI, calculateFn);
            console.log("Bot Running Successfuly.");
            setInterval(() => __awaiter(this, void 0, void 0, function* () {
                data = yield (0, api_1.getData)();
                closePricesArrFromAPI = data.getClosePricesArr();
                (0, api_1.getMsgWs)(ws, closePricesArrFromAPI, calculateFn);
            }), updateMinutes);
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    });
}
//This Is For Free Hostings Deploy Set "WEB_DEPLOY" VAR FALSE
if (env_1.WEB_DEPLOY === "true") {
    const PORT = process.env.PORT || "5000";
    const app = (0, express_1.default)();
    app.get("/", function (req, res) {
        res.status(200).send("Bot Is Working.");
    });
    app.listen(PORT, function () {
        ApplicationStart();
        console.log(`🚀 WebServer Running On Port :${PORT}`);
    });
}
else {
    ApplicationStart();
}
