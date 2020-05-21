import React from "react";

export default function VideoList({ sideVideo }) {
  const videoList = sideVideo.map((video) => {
    return (
      <div className="video-list__container-video-elements" key={video.id}>
        <img
          className="video-list__container-video-elements--img"
          src={video.image}
          alt="Video Thumbnail"
        />
        <div className="video-list__container-video-elements--info">
          <span className="video-list__container-video-elements--info-title">
            {video.title}
          </span>
          <span className="video-list__container-video-elements--info-channel">
            {video.channel}
          </span>
        </div>
      </div>
    );
  });
  return (
    <section className="video-list">
      <div className="video-list__container">
        <h1 className="video-list__container-title">NEXT VIDEO</h1>
        {videoList}
      </div>
    </section>
  );
}
