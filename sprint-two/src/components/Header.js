import React from "react";
import { Link } from "react-router-dom";

import profile from "../assets/Icons/PNG/userico.png";
import logo from "../assets/Logo/brainflix.svg";
import uploadIcon from "../assets/Icons/SVG/Icon-upload.svg";

export default function Header() {
  return (
    <header className="nav-bar" id="nav-bar">
      <div className="nav-bar__tablet">
        {/* Links to upload page when "upload" button is clicked and back to home page when logo is clicked. */}
        <Link to="/" className="nav-bar__logo-link">
          <img className="nav-bar__logo" src={logo} alt="Brainflix Logo" />
        </Link>
        <nav className="nav-bar__features">
          <input
            type="text"
            id="nav-bar__search"
            className="nav-bar__search"
            placeholder="Search"
            name="search"
          />

          <div className="nav-bar__lower-row">
            <Link to="/upload" className="nav-bar__button">
              <img
                className="nav-bar__button--icon"
                src={uploadIcon}
                alt="Upload Icon"
              />{" "}
              UPLOAD
            </Link>
            <img
              className="nav-bar__profile"
              src={profile}
              alt="User Profile"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
