import React from "react";
import profile from "../assets/Icons/PNG/userico.png";

export default function Comments() {
  return (
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
  );
}
