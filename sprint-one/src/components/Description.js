// import React from "react";

// import viewsIcon from "./assets/Icons/SVG/Icon-views.svg";
// import likesIcon from "./assets/Icons/SVG/Icon-likes.svg";

// return (
//   <div className="description">
//     <h1 className="description__title">BMX Rampage: 2018 Highlights</h1>
//     <div className="description__tablet">
//       <div className="description__details">
//         <h2 className="description__author">By Red Cow</h2>
//         <h2 className="description__date">12/18/2018</h2>
//       </div>
//       <div className="description__icons">
//         <h4 className="description__views">
//           <img
//             className="description__views-icon"
//             src={viewsIcon}
//             alt="Views Counter"
//           />
//           1,001,023
//         </h4>
//         <h4 className="description__likes">
//           <img
//             className="description__views-icon"
//             src={likesIcon}
//             alt="Likes Counter"
//           />
//           110,985
//         </h4>
//       </div>
//     </div>
//     <h4 className="description__content">
//       On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew
//       the doors off what is possible on two wheels, unleashing some of the
//       biggest moments the sport has ever seen. While mother nature only allowed
//       for one full run before the conditions made it impossible to ride, that
//       was all that was needed for event veteran Kyle Strait, who won the event
//       for the second time -- eight years after his first Red Cow Rampage title
//     </h4>
//   </div>
// );

import React from "react";
import viewsIcon from "../assets/Icons/SVG/Icon-views.svg";
import likesIcon from "../assets/Icons/SVG/Icon-likes.svg";

export default function Description({ mainVideo }) {
  return (
    <>
      <div className="description">
        <h1 className="description__title">{mainVideo.title}</h1>
        <div className="description__tablet">
          <div className="description__details">
            <h2 className="description__author">{mainVideo.channel}</h2>
            <h2 className="description__date">{mainVideo.timestamp}</h2>
          </div>
          <div className="description__icons">
            <h4 className="description__views">
              <img
                className="description__views-icon"
                src={viewsIcon}
                alt="Views Counter"
              />
              {mainVideo.views}
            </h4>
            <h4 className="description__likes">
              <img
                className="description__views-icon"
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
