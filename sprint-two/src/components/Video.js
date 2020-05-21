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
          </button>
          <button className="video-player__btn">
            <img
              className="fas fa-volume-up"
              src={volumeIcon}
              alt="Volume Button"
            />
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
