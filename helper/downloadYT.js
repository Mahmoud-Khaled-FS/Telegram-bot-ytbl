const fs = require('fs');
const path = require('path');
const axios = require('axios').default;

// fileUrl: the absolute url of the image or video you want to download
// downloadFolder: the path of the downloaded file on your machine
module.exports = async (fileUrl, fileName, cd) => {
  // Get the file name

  // The path of the downloaded file on our machine
  const localFilePath = path.resolve(__dirname, '..', 'audios', fileName + '.mp3');
  try {
    const response = await axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'stream',
    });

    const w = response.data.pipe(fs.createWriteStream(localFilePath));
    await w.on('finish', () => {
      console.log('Successfully downloaded file!');
      cd(localFilePath);
    });
    // return localFilePath;
  } catch (err) {
    throw new Error(err);
  }
};
