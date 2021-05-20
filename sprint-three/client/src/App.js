import React, { Component } from "react";
import Header from "./components/Header";
import Video from "./components/Video";
import Description from "./components/Description";
import Comments from "./components/Comments";
import CommentsList from "./components/CommentsList";
import VideoList from "./components/VideosList";
import axios from "axios";
export default class App extends Component {
  //Setting data from express in state
  state = {
    mainVideoDetails: {},
    sideVideos: [],
  };
  componentDidMount() {
    this.getVideos();
    this.getVideosList();
  }
  getVideos() {
    axios
      .get("http://localhost:5000/videos/1af0jruup5gu")
      .then((response) => {
        this.setState({
          mainVideoDetails: response.data,
        });
      })
      .catch((err) => console.log(err));
  }
  getVideosList() {
    axios
      .get("http://localhost:5000/videos")
      .then((response) => {
        this.setState({
          sideVideos: response.data,
        });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate(prevProps) {
    const oldVideoId = prevProps.match.params.id;
    const newVideoId = this.props.match.params.id;
    if (newVideoId !== oldVideoId) {
      //Makes sure new video is not the same as a previous one
      axios
        .get("http://localhost:5000/videos/" + newVideoId)
        .then((response) =>
          this.setState({
            mainVideoDetails: response.data,
          })
        )
        .catch((err) => console.log(err));
    }
  }
  render() {
    return (
      <>
        <Header />
        <Video mainVideo={this.state.mainVideoDetails} />
        <section className="wrapper-one">
          <section className="wrapper-two">
            <Description mainVideo={this.state.mainVideoDetails} />
            <Comments />
            <CommentsList mainVideo={this.state.mainVideoDetails} />
          </section>
          <VideoList
            //Filter ensures that the current video doesn't show up in next video list
            sideVideo={this.state.sideVideos.filter(
              (video) => video.id !== this.state.mainVideoDetails.id
            )}
          />
        </section>
      </>
    );
  }
}
