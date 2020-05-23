import React from "react";
import profileGrey from "../assets/Icons/PNG/grey.png";

export default function CommentsList({ mainVideo }) {
  if (mainVideo.comments === undefined) {
    return <p>Loading...</p>;
  }
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
