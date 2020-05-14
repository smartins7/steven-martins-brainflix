import React from "react";

import profileGrey from "../assets/Icons/PNG/grey.png";

//Am I doing the profile picture right? Does it have to be in a string?

const comments = [
  {
    profile: { profileGrey },
    name: "Micheal Lyons",
    date: "12 / 18 / 2018",
    content:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    profile: { profileGrey },
    name: "Gary Wong",
    date: "12 / 12 / 2018",
    content:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    profile: { profileGrey },
    name: "Theodore Duncan",
    date: "11/15/2018",
    content:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

//This goes in App.js?
//Used className="site" because that's the name of the first div I have in App.js
function App() {
  return (
    <div className="site">
      <main>
        <div className="comments-list"></div>
        <CommentsList comments={comments} />
      </main>
    </div>
  );
}

function CommentsList(props) {
  const commentsList = props.comments.map((comments) => {
    return <li>{comments}</li>;
  });
  console.log(commentsList);
  return <ul className="student-list">{commentsList}</ul>;
}

export default App;
