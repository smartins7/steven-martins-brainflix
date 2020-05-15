import React from "react";

import video from "../assets/Video/BrainStationSampleVideo.mp4";

import playIcon from "../assets/Icons/SVG/Icon-play.svg";
import scrubber from "../assets/Icons/SVG/Icon-scrubber-control.svg";
import fullscreenIcon from "../assets/Icons/SVG/Icon-fullscreen.svg";
import volumeIcon from "../assets/Icons/SVG/Icon-volume.svg";

export default function Video() {
  return (
    <div className="video">
      {/* How do I put the actual video in? */}
      <video className="video__hero" poster={video}>
        <source src={video} type="video/mp4" />
        {/* These icons are not working. Could be due to the video tag not being right. */}
        <div className="video-icons">
          <img className="video-icons__play" src={playIcon} alt="Play Button" />
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
  );
}
