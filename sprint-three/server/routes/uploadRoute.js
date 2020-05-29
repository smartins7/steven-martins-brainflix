const express = require("express");
const router = express.Router();

const fs = require("fs");

//import image like sprint-one?
// import newVideo from "../../client/src/assets/Images/Upload-video-preview.jpg";

//Do I need something that routes to JSON for post?Like this...
const videoData = fs.readFileSync("./model/videos.json");
// const videoArr = JSON.parse(videoData);

//Messing around with a possible set up...

router.post("/", (req, res) => {
  const newVideo = {
    id: getNewId(),
    title: req.body.title,
    channel: req.body.channel,
    image: newVideo,
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "",
    video:
      "https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
    timestamp: Date.now(),
    comments: [],
  };

  if (!newVideo.title || !newVideo.description) {
    return res.status(404).json({
      errorMessage: "Please provide title and/or description, for the video",
    });
  }

  videos.push(newVideo);
  res.json(newVideo);
});

module.exports = router;
