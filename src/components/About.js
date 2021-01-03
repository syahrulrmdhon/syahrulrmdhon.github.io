import React from "react";

import photo from "../assets/photo_me.jpg";

const About = () => {
  return (
    <div id="about" className="row cover">
      <h2 className="text-center">About Me</h2>
      <div className="row">
        <div className="col-md-12 text-center about-info">
          <img
            alt="profilepic"
            className="img-circle text-center profile-img"
            src={photo}
          />
          <p
            className="text-center"
            style={{ marginLeft: "15vw", marginRight: "15vw" }}
          >
            I'am a Frontend Developer with a demonstrated history of working in
            the information technology and services industry. Skilled in
            Javascript, React, HTML, CSS/SCSS
          </p>
        </div>
        <div className="row break">
          <div className="col-md-12 about-last">
            <p className="text-center">
              Check out my latest projects{" "}
              <span className="glyphicon glyphicon-arrow-down"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
