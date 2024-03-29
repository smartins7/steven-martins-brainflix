const { v4: uuid } = require("uuid");
const express = require("express");
const cors = require("cors");
const getVideo = require("./controller/getVideo");
const getVideoList = require("./controller/getVideoList");
const fs = require("fs");
const app = express();

// // middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from express");
});

// chaining routes
app
  .route("/videos")
  .get((req, res) => {
    res.json(getVideoList());
  })
  .post((req, res) => {
    const videoData = JSON.parse(fs.readFileSync("./model/videos.json"));
    const videoObj = {
      id: uuid(),
      title: req.body.title,
      channel: req.body.channel,
      image: "https://i.imgur.com/vVp3k9a.jpg",
      description: req.body.description,
      views: "0",
      likes: "0",
      duration: "4:43",
      video:
        "https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      timestamp: Date.now(),
      comments: [],
    };

    videoData.push(videoObj);
    fs.writeFileSync("./model/videos.json", JSON.stringify(videoData));

    res.json(videoData);
  })
  .put((req, res) => {
    res.send("Video updated");
  });

// dynamic path using an id as a param
app.get("/videos/:id", (req, res) => {
  const vidId = req.params.id;
  res.json(getVideo(vidId));
});

//Error message if wrong url
app.get("/*", (req, res) => {
  res.send(`<h1>Page not found</h1>`);
});

app.listen(5000, console.log("app is listening at: http://localhost:5000"));
