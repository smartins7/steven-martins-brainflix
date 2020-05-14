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
// import Comments from "./components/CommentsList";
// import Comments from "./components/VideosList";

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
      <div className="comments-list">{/* Default Comments List */}</div>
      <div className="video-list">
        <h4>Next Video</h4>
        {/* Videos List */}
      </div>
    </div>
  );
};

export default App;
