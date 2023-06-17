import React from "react";
import resumeSvg from "../../assets/resume.svg";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="left">
        <p className="heading">
          A <span>Resume</span> Genrator Make your own
          <span> free</span> resume.
        </p>
      </div>
      <div className="right">
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
