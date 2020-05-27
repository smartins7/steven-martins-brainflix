import React from "react";
import viewsIcon from "../assets/Icons/SVG/Icon-views.svg";
import likesIcon from "../assets/Icons/SVG/Icon-likes.svg";
import dateConvert from "../components/Date";

export default function Description({ mainVideo }) {
  return (
    <>
      <div className="description">
        <h1 className="description__title">{mainVideo.title}</h1>
        <div className="description__tablet">
          <div className="description__details">
            <h2 className="description__author">{mainVideo.channel}</h2>
            <h2 className="description__date">
              {dateConvert(new Date(mainVideo.timestamp))}
            </h2>
          </div>
          <div className="description__icons">
            <h4 className="description__views">
              <img
                className="description__icon-views"
                src={viewsIcon}
                alt="Views Counter"
              />
              {mainVideo.views}
            </h4>
            <h4 className="description__likes">
              <img
                className="description__icon-likes"
                src={likesIcon}
                alt="Likes Counter"
              />
              {mainVideo.likes}
            </h4>
          </div>
        </div>
        <h4 className="description__content">{mainVideo.description}</h4>
      </div>
    </>
  );
}
