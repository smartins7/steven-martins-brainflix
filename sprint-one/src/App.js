// import React from "react";
// import Header from "./components/Header";
// // import MainContent from "./components/MainContent";
// // import Footer from "./components/Footer";
// export default function App() {
//   return (
//     <div>
//       <Header />
//       {/* <MainContent />
//       <Footer /> */}
//     </div>
//   );
// }

import React from "react";
// import Header from "./components/Header";
// import Video from "./components/Video";
// import Description from "./components/Description";
// import Comments from "./components/Comments";
// import VideoList from "./components/VideosList";
import CommentsList from "./components/CommentsList";

import profile from "./assets/Icons/PNG/userico.png";
import logo from "./assets/Logo/brainflix.svg";
import uploadIcon from "./assets/Icons/SVG/Icon-upload.svg";
import viewsIcon from "./assets/Icons/SVG/Icon-views.svg";
import likesIcon from "./assets/Icons/SVG/Icon-likes.svg";
import video from "./assets/Video/BrainStationSampleVideo.mp4";
import playIcon from "./assets/Icons/SVG/Icon-play.svg";
import scrubber from "./assets/Icons/SVG/Icon-scrubber-control.svg";
import fullscreenIcon from "./assets/Icons/SVG/Icon-fullscreen.svg";
import volumeIcon from "./assets/Icons/SVG/Icon-volume.svg";

const App = () => {
  return (
    <div className="site">
      <header className="nav-bar" id="nav-bar">
        <div className="nav-bar__tablet">
          <a className="nav-bar__logo-link" href="index.html">
            <img className="nav-bar__logo" src={logo} alt="Brainflix Logo" />
          </a>
          <nav className="nav-bar__features">
            <input
              type="text"
              id="nav-bar__search"
              className="nav-bar__search"
              placeholder="Search"
              name="search"
            />

            <div className="nav-bar__lower-row">
              <button type="submit" className="nav-bar__button">
                <img
                  className="nav-bar__button--icon"
                  src={uploadIcon}
                  alt="Upload Icon"
                />{" "}
                UPLOAD
              </button>
              <img
                className="nav-bar__profile"
                src={profile}
                alt="User Profile Picture"
              />
            </div>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <div className="video">
          {/* How do I put the actual video in? */}
          <video className="video__hero" poster={video}>
            <source src={video} type="video/mp4" />
            {/* These icons are not working. Could be due to the video tag not being right. */}
            <div className="video-icons">
              <img
                className="video-icons__play"
                src={playIcon}
                alt="Play Button"
              />
              <img
                className="video-icons__scrubber"
                src={scrubber}
                alt="scrubber"
              />
              <img
                className="video-icons__fullscreen"
                src={fullscreenIcon}
                alt="Fullscreen Button"
              />
              <img
                className="video-icons__volume"
                src={volumeIcon}
                alt="Volume Button"
              />
            </div>
          </video>
        </div>
      </main>
      <div className="description">
        <h1 className="description__title">BMX Rampage: 2018 Highlights</h1>
        <div className="description__tablet">
          <div className="description__details">
            <h2 className="description__author">By Red Cow</h2>
            <h2 className="description__date">12/18/2018</h2>
          </div>
          <div className="description__icons">
            <h4 className="description__views">
              <img
                className="description__views-icon"
                src={viewsIcon}
                alt="Views Counter"
              />
              1,001,023
            </h4>
            <h4 className="description__likes">
              <img
                className="description__views-icon"
                src={likesIcon}
                alt="Likes Counter"
              />
              110,985
            </h4>
          </div>
        </div>
        <h4 className="description__content">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </h4>
      </div>
      <div className="comments">
        <h1 className="comments__title">3 Comments</h1>
        <div className="comments__container">
          <form id="comments-form" className="comments-form">
            <div className="comments-form__row-one">
              <img
                className="comments-form__profile"
                src={profile}
                alt="User Profile Picture"
              />
              <div className="comments-form__input-details">
                <label className="comments-form__input-title">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  type="text"
                  id="comments-content-input"
                  placeholder="Write comment here"
                  className="comments-form__content"
                  name="commentsComment"
                ></textarea>
              </div>
            </div>

            <br />
            <button type="submit" className="comments-form__submit">
              COMMENT
            </button>
          </form>
        </div>
      </div>

      <CommentsList />
      <div className="video-list">
        <h4>Next Video</h4>
        {/* Videos List */}
      </div>
    </div>
  );
};

export default App;

// import React, { Component } from "react";
// import "./styles/main.css";
// import Header from "./components/Header";
// import Video from "./components/Video";
// import Description from "./components/Description";
// import Comments from "./components/Comments";
// import CommentsList from "./components/CommentsList";
// import VideoList from "./components/VideosList";
// // import uuid() from ... where? I remember seeing this but not sure how it works

// export default class App extends Component {
//   state = {
//     sideVideo: [
//       {
//         id: uuid(),
//         title: "Become A Travel Pro In One Easy Lesson",
//         channel: "Scotty Cranmer",
//         image: "../assets/Images/video-list-1.jpg",
//       },
//       {
//         id: uuid(),
//         title: "Les Houches The Hidden Gem Of The Chamonix",
//         channel: "Scotty Cranmer",
//         image: "../assets/Images/video-list-2.jpg",
//       },
//       {
//         id: uuid(),
//         title: "Travel Health Useful Medical Information For",
//         channel: "Scotty Cranmer",
//         image: "../assets/Images/video-list-3.jpg",
//       },
//       {
//         id: uuid(),
//         title: "Cheap Airline Tickets Great Ways To Save",
//         channel: "Emily Harper",
//         image: "../assets/Images/video-list-4.jpg",
//       },
//       {
//         id: uuid(),
//         title: "Take A Romantic Break In A Boutique Hotel",
//         channel: "Ethan Owen",
//         image: "../assets/Images/video-list-5.jpg",
//       },
//       {
//         id: uuid(),
//         title: "Choose The Perfect Accommodations",
//         channel: "Lydia Perez",
//         image: "../assets/Images/video-list-6.jpg",
//       },
//       {
//         id: uuid(),
//         title: "Cruising Destination Ideas",
//         channel: "Timothy Austin",
//         image: "../assets/Images/video-list-7.jpg",
//       },
//       {
//         id: uuid(),
//         title: "Train Travel On Track For Safety",
//         channel: "Scotty Cranmer",
//         image: "../assets/Images/video-list-8.jpg",
//       },
//     ],

//     mainVideo = {
//       id: uuid(),
//       title: "BMX Rampage: 2018 Highlights",
//       description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
//       channel: "By Red Cow",
//       image: "../assets/Images/video-list-0.jpg",
//       views: " 1,001,023",
//       likes: "110,985",
//       //duration?
//       duration: 'type of <string>',
//       video: "../assets/Video/BrainStationSampleVideo.mp4",
//       //   convert this to timestamp?
//       timestamp: "12/18/2018",

//       comments: [
//         {
//           id: uuid(),
//           name: "Micheal Lyons",
//           timestamp: "12 / 18 / 2018",
//           comment:
//             "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
//         },
//         {
//           id: uuid(),
//           name: "Gary Wong",
//           timestamp: "12 / 12 / 2018",
//           comment:
//             "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//         },
//         {
//           id: uuid(),
//           name: "Theodore Duncan",
//           timestamp: "11/15/2018",
//           comment:
//             "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
//         },
//       ],
//     },
//   };

//   render() {
//     return (
//             <>
//         {/* Added sections in here for flexbox layout of sidebar */}
//         <Header />
//         <Video  />
//         <section className="wrapper-1">
//           <section className="wrapper-2"></section>
//             <Description mainVideo={this.state.mainVideo} />

//             <Comments  />
//             <CommentsList mainVideo={this.state.mainVideo}>
//                     </section>
//             <VideoList sideVideo={this.state.sideVideo} />
//           </section>
//                 </>
//         );
//     }

// }
