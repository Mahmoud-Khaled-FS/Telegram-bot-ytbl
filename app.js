const { Telegraf, session } = require('telegraf');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
//------------------------------------------------------------------------------------
// setup bot
const app = new Telegraf(process.env.API_TOKEN_BOT);
//------------------------------------------------------------------------------------
// require bit functionality
const commands = require('./routes/commands');
const hears = require('./routes/hears');
// app.ma
app.use((ctx, next) => {
  if (ctx.chat.type !== 'channel') {
    next(ctx);
  }
});
app.use(session());
app.use(hears);
app.use(commands);
// Handling errors
app.catch((err, ctx) => {
  console.log('catch');
  console.log(err);
  ctx.reply('Something Wrong..!');
});

app.use((ctx) => {
  ctx.reply(ctx.session.error);
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then((res) => {
    // console.log(res);
    app.launch();
  })
  .catch((err) => {
    console.log(err);
  });
