import React from "react";
import uploadPreview from "../assets/Images/Upload-video-preview.jpg";
import Header from "../components/Header";
import axios from "axios";

export default function Uploads(props) {
  const publishClick = (event) => {
    alert("Upload Successful!");
    event.preventDefault();
    // event.reset();
    axios
      .post("http://localhost:5000/videos", {
        title: event.target.videoTitle.value,
        channel: "Mohan Muruge",
        image: "https://i.imgur.com/vVp3k9a.jpg",
        description: event.target.videoDescription.value,
        views: "0",
        likes: "0",
        duration: "4:43",
        video:
          "https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
        comments: [],
      })
      .then((res) => {
        props.history.replace();
      })
      .catch((err) => console.log(err));
  };
  const cancelClick = () => {
    props.history.goBack();
  };

  return (
    //Included header component in here to display at the top of the page.
    //Links are in the header component to get to upload page
    <>
      <Header />
      <div className="uploads">
        <h1 className="uploads__title">Upload Video</h1>
        <div className="uploads-form__container">
          <form
            id="uploads-form"
            className="uploads-form"
            onSubmit={publishClick}
          >
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
                <div className="uploads-form__name-wrapper">
                  <label className="uploads-form__input-title--name">
                    TITLE YOUR VIDEO
                  </label>
                  <input
                    type="text"
                    id="uploads-name-input"
                    className="uploads-form__name"
                    placeholder="Add a title to your video"
                    name="videoTitle"
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
                  name="videoDescription"
                ></textarea>
              </div>
            </div>
            <div className="uploads-form__buttons">
              <br />
              <button className="uploads-form__submit" type="submit">
                PUBLISH
              </button>
              <br />
              <button className="uploads-form__cancel" onClick={cancelClick}>
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
