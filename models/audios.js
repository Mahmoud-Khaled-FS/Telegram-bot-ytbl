const mongoose = require('mongoose');

const Scheam = mongoose.Schema;

const audiosScheam = new Scheam({
  audioId: {
    required: true,
    type: String,
  },
  messageId: {
    required: true,
    type: Number,
  },
  user: Object,
  chatId: Object,
});

module.exports = mongoose.model('audios', audiosScheam);
