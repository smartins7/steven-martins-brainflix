import React from "react";

import imageOne from "../assets/Images/video-list-1.jpg";
import imageTwo from "../assets/Images/video-list-2.jpg";
import imageThree from "../assets/Images/video-list-3.jpg";
import imageFour from "../assets/Images/video-list-4.jpg";
import imageFive from "../assets/Images/video-list-5.jpg";
import imageSix from "../assets/Images/video-list-6.jpg";
import imageSeven from "../assets/Images/video-list-7.jpg";
import imageEight from "../assets/Images/video-list-8.jpg";

const videos = [
  {
    img: { imageOne },
    title: "Become A Travel Pro In One Easy Lesson...",
    name: "Scotty Cranmer",
  },
  {
    img: { imageTwo },
    title: "Les Houches The Hidden Gem Of The...",
    name: "Scotty Cranmer",
  },
  {
    img: { imageThree },
    title: "Travel Health Useful Medical Information...",
    name: "Scotty Cranmer",
  },
  {
    img: { imageFour },
    title: "Cheap Airline Tickets Great Ways To Save",
    name: "Emily Harper",
  },
  {
    img: { imageFive },
    title: "Take A Romantic Break In A Boutique Hotel",
    name: "Ethan Owen",
  },
  {
    img: { imageSix },
    title: "Choose The Perfect Accommodations",
    name: "Lydia Perez",
  },
  {
    img: { imageSeven },
    title: "Cruising Destination Ideas",
    name: "Timothy Austin",
  },
  {
    img: { imageEight },
    title: "Train Travel On Track For Safety",
    name: "Scotty Cranmer",
  },
];

//This goes in App.js?
//Used className="site" because that's the name of the first div I have in App.js
function App() {
  return (
    <div className="site">
      <main>
        <div className="videos-list"></div>
        <VideosList videos={videos} />
      </main>
    </div>
  );
}

function VideosList(props) {
  const videosList = props.videos.map((videos) => {
    return <li>{videos}</li>;
  });
  console.log(videosList);
  return <ul className="videos-list">{videosList}</ul>;
}

export default App;
