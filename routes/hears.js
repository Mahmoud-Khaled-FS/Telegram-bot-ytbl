const { Composer } = require('telegraf');

//Regular expressions test
const youtubeLinkRE = new RegExp(
  `^((?:https?:)?\/\/)?((?:www|m)\\.)?((?:youtube(-nocookie)?\\.com|youtu.be))(\/(?:[\\w\\-]+\\?v=|embed\\/|v\/)?)([\\w\\-]+)(\\S+)?$`,
  'img',
);

const hearsControll = require('../controllers/hears');
const bot = new Composer();

bot.hears(youtubeLinkRE, hearsControll.getLink);

// bot.hears(youtubeLinkRE, hearsControll.getLink);

module.exports = bot;
