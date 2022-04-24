const fs = require('fs');
const ytdl = require('ytdl-core');
const downloadYT = require('./../helper/downloadYT');
const Audios = require('../models/audios');

exports.getLink = async function (ctx, next) {
  const waitingMessage = await ctx.telegram.forwardMessage(
    ctx.chat.id,
    process.env.CHANNEL_ID,
    +process.env.GIF_WAITING,
  );
  try {
    const info = await ytdl.getInfo(ctx.message.text);

    const audioData = await Audios.findOne({ audioId: info.videoDetails.videoId });
    if (!audioData) {
      const audioArray = info.formats.filter(
        (format) => format.hasAudio && format.audioQuality === 'AUDIO_QUALITY_MEDIUM',
      );
      const audio = audioArray[audioArray.length - 1];
      await downloadYT(audio.url, info.videoDetails.videoId, async (path) => {
        ctx.telegram.sendChatAction(ctx.chat.id, 'upload_voice');
        const audioMessage = await ctx.telegram.sendAudio(
          process.env.CHANNEL_ID,
          { source: fs.createReadStream(path) },
          { title: info.videoDetails.title },
        );
        ctx.telegram.deleteMessage(ctx.chat.id, waitingMessage.message_id);
        ctx.telegram.forwardMessage(ctx.chat.id, process.env.CHANNEL_ID, audioMessage.message_id);
        const audioInsert = new Audios({
          audioId: info.videoDetails.videoId,
          messageId: audioMessage.message_id,
          user: ctx.from,
          chatId: ctx.chat,
        });
        await audioInsert.save();
        fs.unlink(path, (err) => console.log(err));
      });
    } else {
      ctx.telegram.sendChatAction(ctx.chat.id, 'upload_voice');
      ctx.telegram.deleteMessage(ctx.chat.id, waitingMessage.message_id);
      ctx.telegram.forwardMessage(ctx.chat.id, process.env.CHANNEL_ID, audioData.messageId);
    }
  } catch (err) {
    ctx.telegram.deleteMessage(ctx.chat.id, waitingMessage.message_id);
    throw err;
  }
};
