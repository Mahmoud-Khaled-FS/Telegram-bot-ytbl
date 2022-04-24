exports.getStart = async (ctx) => {
  await ctx.reply(`Hello, ${ctx.from.first_name}`);
  ctx.reply(
    'With the help of this bot you can download music from YouTube Just send your link and it will download to you!',
  );
};

exports.getHelp = async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, process.env.CHANNEL_ID, +process.env.GIF_HELP);
};

exports.getMessage = (ctx) => {
  // console.log(ctx.message);
  ctx.reply('Please, Enter Youtube Link!');
};
