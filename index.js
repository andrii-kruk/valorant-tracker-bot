const { Bot } = require("grammy");
require("dotenv/config");

const bot = new Bot(process.env.BOT_ACCESS_TOKEN);

bot.api.setMyCommands([{ command: "start", description: "Start bot." }]);

bot.start();
