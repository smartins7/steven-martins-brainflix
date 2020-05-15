import React from "react";

import profile from "../assets/Icons/PNG/userico.png";
import logo from "../assets/Logo/brainflix.svg";
import uploadIcon from "../assets/Icons/SVG/Icon-upload.svg";

export default function Header() {
  return (
    <header className="nav-bar" id="nav-bar">
      <div className="nav-bar__tablet">
        <a className="nav-bar__logo-link" href="index.html">
          <img className="nav-bar__logo" src={logo} alt="Brainflix Logo" />
        </a>
        <nav className="nav-bar__features">
          <input
            type="text"
            id="nav-bar__search"
            className="nav-bar__search"
            placeholder="Search"
            name="search"
          />

          <div className="nav-bar__lower-row">
            <button type="submit" className="nav-bar__button">
              <img
                className="nav-bar__button--icon"
                src={uploadIcon}
                alt="Upload Icon"
              />{" "}
              UPLOAD
            </button>
            <img
              className="nav-bar__profile"
              src={profile}
              alt="User Profile Picture"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
