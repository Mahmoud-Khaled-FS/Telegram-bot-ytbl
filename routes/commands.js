const commandsControll = require('../controllers/commands');
const { Composer } = require('telegraf');
const bot = new Composer();

bot.start(commandsControll.getStart);

bot.help(commandsControll.getHelp);

bot.on('message', commandsControll.getMessage);

module.exports = bot;
