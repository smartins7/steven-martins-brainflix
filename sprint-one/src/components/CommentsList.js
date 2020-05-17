// import React from "react";

// import profileGrey from "../assets/Icons/PNG/grey.png";

// //Am I doing the profile picture right? Does it have to be in a string?

// //This goes in App.js?
// //Used className="site" because that's the name of the first div I have in App.js
// // function App() {
// //   return (
// //     <div className="site">
// //       <main>
// //         <div className="comments-list"></div>
// //         <CommentsList comments={comments} />
// //       </main>
// //     </div>
// //   );
// // }

// class CommentsList extends React.Component {
//   state = {
//     comments: [
//       {
//         profile: { profileGrey },
//         name: "Micheal Lyons",
//         date: "12 / 18 / 2018",
//         content:
//           "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
//       },
//       {
//         profile: { profileGrey },
//         name: "Gary Wong",
//         date: "12 / 12 / 2018",
//         content:
//           "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//       },
//       {
//         profile: { profileGrey },
//         name: "Theodore Duncan",
//         date: "11/15/2018",
//         content:
//           "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
//       },
//     ],
//   };

//   render() {
//     const commentsList = this.state.comments.map((comment) => {
//       return (
//         <div>
//           <span className="comments-list__name">{comment.name}</span>;
//           <span className="comments-list__date">{comment.date}</span>;
//           <span className="comments-list__content">{comment.content}</span>;
//         </div>
//       );
//     });
//     return <ul>{commentsList}</ul>;
//   }
// }

// export default CommentsList;

import React from "react";
import profileGrey from "../assets/Icons/PNG/grey.png";

export default function CommentsList({ mainVideo }) {
  const commentsList = mainVideo.comments.map((comment) => {
    return (
      <ul id="comments-list" className="comments-list" key={comment.id}>
        <div className="comments-list__top-row">
          <div className="comments-list__image-wrapper">
            <li className="comments-list__item">
              <img
                className="comments-list__image"
                src={profileGrey}
                alt="User Display"
              />
            </li>
          </div>
          <div className="comments-list__name-wrapper">
            <li className="comments-list__item">
              <h2 className="comments-list__name">{comment.name}</h2>
            </li>
          </div>
          <div className="comments-list__date-wrapper">
            <li className="comments-list__item">
              <h4 className="comments-list__date">{comment.timestamp}</h4>
            </li>
          </div>
        </div>
        <div className="comments-list__content-wrapper">
          <li className="comments-list__item">
            <span className="comments-list__content">{comment.comment}</span>
          </li>
        </div>
      </ul>
    );
  });
  return (
    <section className="default-comments">
      <div className="default-comments">{commentsList}</div>
    </section>
  );
}
