import React from "react";
import uploadPreview from "../assets/Images/Upload-video-preview.jpg";
import Header from "../components/Header";
// import { Link } from "react-router";

export default function Uploads() {
  return (
    <>
      <Header />
      <div className="uploads">
        <h1 className="uploads__title">Upload Video</h1>
        <div className="uploads__container">
          <form id="uploads-form" className="uploads-form">
            <label className="uploads-form__image-title">VIDEO THUMBNAIL</label>
            <img
              className="uploads-form__thumbnail"
              src={uploadPreview}
              alt="Video Thumbnail"
            />
            <label className="uploads-form__input-title--name">
              TITLE YOUR VIDEO
            </label>
            <div className="uploads-form__row-one">
              <input
                type="text"
                id="uploads-name-input"
                className="uploads-form__name"
                placeholder="Add a title to your video"
                name="uploadsName"
              />
            </div>
            <br />
            <label className="uploads-form__input-title--description">
              ADD A VIDEO DESCRIPTION
            </label>
            <br />
            <textarea
              type="text"
              id="uploads-content-input"
              placeholder="Add a description of your video"
              className="uploads-form__content"
              name="uploadsUpload"
            ></textarea>
            <br />
            <button className="uploads-form__submit">PUBLISH</button>
            <br />
            <button className="uploads-form__cancel">CANCEL</button>
          </form>
        </div>
      </div>
    </>
  );
}
