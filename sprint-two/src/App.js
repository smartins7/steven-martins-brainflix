import React, { Component } from "react";
import Header from "./components/Header";
import Video from "./components/Video";
import Description from "./components/Description";
import Comments from "./components/Comments";
import CommentsList from "./components/CommentsList";
import VideoList from "./components/VideosList";
import Uploads from "./components/Uploads";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import uuid from "uuid/v1";
// import axios from "axios";
import imageZero from "./assets/Images/video-list-0.jpg";
import imageOne from "./assets/Images/video-list-1.jpg";
import imageTwo from "./assets/Images/video-list-2.jpg";
import imageThree from "./assets/Images/video-list-3.jpg";
import imageFour from "./assets/Images/video-list-4.jpg";
import imageFive from "./assets/Images/video-list-5.jpg";
import imageSix from "./assets/Images/video-list-6.jpg";
import imageSeven from "./assets/Images/video-list-7.jpg";
import imageEight from "./assets/Images/video-list-8.jpg";
import video from "./assets/Video/BrainStationSampleVideo.mp4";

export default class App extends Component {
  state = {
    sideVideo: [
      {
        id: uuid(),
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Scotty Cranmer",
        image: imageOne,
      },
      {
        id: uuid(),
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Scotty Cranmer",
        image: imageTwo,
      },
      {
        id: uuid(),
        title: "Travel Health Useful Medical Information For",
        channel: "Scotty Cranmer",
        image: imageThree,
      },
      {
        id: uuid(),
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: imageFour,
      },
      {
        id: uuid(),
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: imageFive,
      },
      {
        id: uuid(),
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: imageSix,
      },
      {
        id: uuid(),
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: imageSeven,
      },
      {
        id: uuid(),
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: imageEight,
      },
    ],

    mainVideo: {
      id: uuid(),
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title.",
      channel: "By Red Cow",
      image: imageZero,
      views: " 1,001,023",
      likes: "110,985",
      duration: "0:00 / 0:42",
      video: video,
      timestamp: "12/18/2018",

      comments: [
        {
          id: uuid(),
          name: "Micheal Lyons",
          timestamp: "12/18/ 2018",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        },
        {
          id: uuid(),
          name: "Gary Wong",
          timestamp: "12/12/2018",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          id: uuid(),
          name: "Theodore Duncan",
          timestamp: "11/15/2018",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        },
      ],
    },
  };

  //axios calls

  //Set URL and key in a variable?
  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://project-2-api.herokuapp.com/videos?api_key=87406025-19a3-40c6-88d5-0f1aeb285f89"
  //     )
  //     .then((response) => {
  //       state = {
  //         mainVideoDetails: {},
  //       };
  //       this.setState({
  //         mainVideoDetails: response.data,
  //       })
  //         .catch((err) => console.log(err));
  //     };
  // }

  // componentDidMount() {
  // axios
  //     .get(
  //       "https://project-2-api.herokuapp.com/videos?api_key=87406025-19a3-40c6-88d5-0f1aeb285f89"
  //     )
  //     .then((response) => {
  //       state = {
  //         sideVideoDetails: {},
  //       };
  //       this.setState({
  //         sideVideoDetails: response.data,
  //       })
  //         .catch((err) => console.log(err));
  //     };
  //}

  //where do I array.map?
  //update state with data retrieve from axios inside the .then()?
  //wrap side videos with link component to side video id?
  //wrap main video content with link component to main video id?

  render() {
    // Tried creating two additional routes, one for main video page (Video.js). Need api first?
    //Maybe try to create a new component like VideoPage and put all the stuff in the route inside that component? might have to use render props?
    return (
      <Router>
        <Header />
        <Switch>
          {/* <Uploads /> */}
          <Route path="/upload" exact component={Uploads} />
          <Route path="/" exact>
            <Video mainVideo={this.state.mainVideo} />
            <section className="wrapper-one">
              <section className="wrapper-two">
                <Description mainVideo={this.state.mainVideo} />
                {/* <Route path="/video" exact component={Description} /> */}
                <Comments />
                <CommentsList mainVideo={this.state.mainVideo} />
              </section>
              <VideoList sideVideo={this.state.sideVideo} />
              {/* <Route path="/videox" exact component={VideoList} /> */}
            </section>
          </Route>
        </Switch>
      </Router>
    );
  }
}
