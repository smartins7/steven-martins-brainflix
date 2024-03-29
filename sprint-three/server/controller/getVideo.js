const fs = require("fs");

const getVideo = (id) => {
  const videoData = fs.readFileSync("./model/videos.json");

  const filteredvideoData = JSON.parse(videoData)
    .filter((video) => video.id === id)
    .shift();
  return filteredvideoData;
};

module.exports = getVideo;
