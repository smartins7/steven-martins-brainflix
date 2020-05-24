import React from "react";
import uploadPreview from "../assets/Images/Upload-video-preview.jpg";
import Header from "../components/Header";

export default function Uploads() {
  return (
    //Included header component in here to display at the top of the page.
    //Links are in the header component to get to upload page
    <>
      <Header />
      <div className="uploads">
        <h1 className="uploads__title">Upload Video</h1>
        <div className="uploads-form__container">
          <form id="uploads-form" className="uploads-form">
            <div className="uploads-form__desktop-wrapper">
              <div className="uploads-form__thumbnail-wrapper">
                <figcaption className="uploads-form__image-title">
                  VIDEO THUMBNAIL
                </figcaption>
                <img
                  className="uploads-form__thumbnail"
                  src={uploadPreview}
                  alt="Video Thumbnail"
                />
              </div>
              <div className="uploads-form__form-wrapper">
                <label className="uploads-form__input-title--name">
                  TITLE YOUR VIDEO
                </label>
                <input
                  type="text"
                  id="uploads-name-input"
                  className="uploads-form__name"
                  placeholder="Add a title to your video"
                  name="uploadsName"
                />
                <br />
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
              </div>
            </div>
            <div className="uploads-form__buttons">
              <br />
              <button className="uploads-form__submit">PUBLISH</button>
              <br />
              <button className="uploads-form__cancel">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
