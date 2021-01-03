import React from "react";

const Hero = () => {
  return (
    <div className="row cover top">
      <div className="col-xs-12">
        <div className="row">
          <div className="col-xs-12 headline">
            <h1 className="text-center">Hi, I'm Syahrul Romadhon</h1>
            <p className="lead text-center">A Frontend Developer.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 center-block text-center">
            <a href="#about">
              <span
                id="scrollIcon"
                className="front-glyph glyphicon glyphicon-menu-down"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
