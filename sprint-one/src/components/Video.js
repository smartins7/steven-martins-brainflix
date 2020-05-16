import React from "react";

import playIcon from "../assets/Icons/SVG/Icon-play.svg";
import scrubber from "../assets/Icons/SVG/Icon-scrubber-control.svg";
import fullscreenIcon from "../assets/Icons/SVG/Icon-fullscreen.svg";
import volumeIcon from "../assets/Icons/SVG/Icon-volume.svg";

export default function Video({ mainVideo }) {
  return (
    <div className="video-player">
      <div className="video-player__controls">
        <button className="video-player__btn">
          <img className="fas fa-play" src={playIcon} alt="Play Button" />
          {/* // <i className="fas fa-play"></i> */}
        </button>

        <div className="video-player__progress-bar">
          <div className="video-player__progress-timeline">
            <div className="video-player__progress-scrubber">
              {" "}
              <img src={scrubber} alt="Scrubber" />
            </div>
          </div>
          <div className="video-player__progress-text">
            {mainVideo.duration}
          </div>
        </div>

        <div className="video-player__btn-group">
          <button className="video-player__btn">
            <img
              className="fas fa-expand"
              src={fullscreenIcon}
              alt="Full Screen Button"
            />
            {/* <i className="fas fa-expand"></i> */}
          </button>
          <button className="video-player__btn">
            <img
              className="fas fa-volume-up"
              src={volumeIcon}
              alt="Volume Button"
            />
            {/* <i className="fas fa-volume-up"></i> */}
          </button>
        </div>
      </div>
      <video
        poster={mainVideo.image}
        className="video-player__video"
        src={mainVideo.video}
      ></video>
    </div>
  );
}

// import React from "react";

// import video from "../assets/Video/BrainStationSampleVideo.mp4";

// // import playIcon from "../assets/Icons/SVG/Icon-play.svg";
// // import scrubber from "../assets/Icons/SVG/Icon-scrubber-control.svg";
// // import fullscreenIcon from "../assets/Icons/SVG/Icon-fullscreen.svg";
// // import volumeIcon from "../assets/Icons/SVG/Icon-volume.svg";
// import imageZero from "../assets/Images/video-list-0.jpg";

// export default function Video() {
//   return (
//     <div className="video-player">
//       <div className="video-player__controls">
//         <button className="video-player__btn">
//           <i className="fas fa-play"></i>
//         </button>

//         <div className="video-player__progress-bar">
//           <div className="video-player__progress-timeline">
//             <div className="video-player__progress-scrubber"></div>
//           </div>
//           <div className="video-player__progress-text">0:00 / 0:42</div>
//         </div>

//         <div className="video-player__btn-group">
//           <button className="video-player__btn">
//             <i className="fas fa-expand"></i>
//           </button>
//           <button className="video-player__btn">
//             <i className="fas fa-volume-up"></i>
//           </button>
//         </div>
//       </div>
//       <video
//         poster={imageZero}
//         className="video-player__video"
//         src={video}
//       ></video>
//     </div>
//   );
// }
