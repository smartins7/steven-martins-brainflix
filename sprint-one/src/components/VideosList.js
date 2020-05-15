import React from "react";

// import imageOne from "../assets/Images/video-list-1.jpg";
// import imageTwo from "../assets/Images/video-list-2.jpg";
// import imageThree from "../assets/Images/video-list-3.jpg";
// import imageFour from "../assets/Images/video-list-4.jpg";
// import imageFive from "../assets/Images/video-list-5.jpg";
// import imageSix from "../assets/Images/video-list-6.jpg";
// import imageSeven from "../assets/Images/video-list-7.jpg";
// import imageEight from "../assets/Images/video-list-8.jpg";

const videos = [
  {
    id: uuid(),
    title: "Become A Travel Pro In One Easy Lesson",
    channel: "Scotty Cranmer",
    image: "../assets/Images/video-list-1.jpg",
  },
  {
    id: uuid(),
    title: "Les Houches The Hidden Gem Of The Chamonix",
    channel: "Scotty Cranmer",
    image: "../assets/Images/video-list-2.jpg",
  },
  {
    id: uuid(),
    title: "Travel Health Useful Medical Information For",
    channel: "Scotty Cranmer",
    image: "../assets/Images/video-list-3.jpg",
  },
  {
    id: uuid(),
    title: "Cheap Airline Tickets Great Ways To Save",
    channel: "Emily Harper",
    image: "../assets/Images/video-list-4.jpg",
  },
  {
    id: uuid(),
    title: "Take A Romantic Break In A Boutique Hotel",
    channel: "Ethan Owen",
    image: "../assets/Images/video-list-5.jpg",
  },
  {
    id: uuid(),
    title: "Choose The Perfect Accommodations",
    channel: "Lydia Perez",
    image: "../assets/Images/video-list-6.jpg",
  },
  {
    id: uuid(),
    title: "Cruising Destination Ideas",
    channel: "Timothy Austin",
    image: "../assets/Images/video-list-7.jpg",
  },
  {
    id: uuid(),
    title: "Train Travel On Track For Safety",
    channel: "Scotty Cranmer",
    image: "../assets/Images/video-list-8.jpg",
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

// import React from "react";

// export default function VideoList({ sideVideo }) {
//   const videoList = sideVideo.map((video) => {
//     return (
//       <div className="video-list-container__video-elements">
//         <img
//           className="video-list-container__video-elements--img"
//           src={video.image}
//           alt="Video Thumbnail Image"
//         />
//         <div className="video-list-container__video-elements--info">
//           <h2 className="video-list-container__video-elements--info-title">
//             {video.title}
//           </h2>
//           <h4 className="video-list-container__video-elements--info-channel">
//             {video.channel}
//           </h4>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <section className="video-list">
//       <div className="video-list__container">
//         <h1 className="video-list__container-title">NEXT VIDEO</h1>
//         {videoList}
//       </div>
//     </section>
//   );
// }
