import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio" className="row cover">
      <h2 className="text-center">Portfolio</h2>
      <div className="container">
        <div className="row portfolio-projects">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-5 text-center">
                <h4 className="portfolio-projects--title">Earth Quotes</h4>
                <p className="portfolio-projects--desc">
                  Random quotes shown over google earth images
                </p>
                <p className="portfolio-projects--desc">
                  Uses: Javascript, JQuery, Bootstrap
                </p>
                <a
                  className="btn btn-rounded portfolio-projects--btn"
                  href="https://sonorangirl.github.io/Earth-Quotes/#"
                  role="button"
                >
                  View Project
                </a>
              </div>
              <div className="col-sm-7 text-center">
                <img
                  className="portfolio-projects--image"
                  alt="project1"
                  src="https://sonorangirl.github.io/img/slice-quotes.png"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-5 text-center pull-right-sm">
                <h4 className="portfolio-projects--title">Task Timer</h4>
                <p className="portfolio-projects--desc">
                  A Pomodoro clock timer with a task list integration
                </p>
                <p className="portfolio-projects--desc">
                  Uses: Javascript, JQuery, Bootstrap
                </p>
                <a
                  className="btn btn-rounded portfolio-projects--btn"
                  href="https://sonorangirl.github.io/Task-Timer/"
                  role="button"
                >
                  View Project
                </a>
              </div>
              <div className="col-sm-7 text-center pull-right-sm">
                <img
                  className="img-rounded portfolio-projects--image"
                  alt="project2"
                  src="https://sonorangirl.github.io/img/slice-task-timer.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-projects">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-5 text-center">
                <h4 className="portfolio-projects--title">Whats the Weather</h4>
                <p className="portfolio-projects--desc">
                  A weather app to check current weather conditions.
                </p>
                <p className="portfolio-projects--desc">
                  Uses: Javascript, Jquery, APIs
                </p>
                <a
                  className="btn btn-rounded portfolio-projects--btn"
                  href="https://sonorangirl.github.io/Weather/"
                  role="button"
                >
                  View Project
                </a>
              </div>
              <div className="col-sm-7 text-center">
                <img
                  className="img-rounded portfolio-projects--image"
                  alt="project3"
                  src="https://sonorangirl.github.io/img/weather-slice.png"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-5 text-center pull-right-sm">
                <h4 className="portfolio-projects--title">Simon Game</h4>
                <p className="portfolio-projects--desc">
                  A simple recreation of the 80s game Simon.
                </p>
                <p className="portfolio-projects--desc">
                  Uses: Javascript, Sass, JQuery
                </p>
                <a
                  className="btn btn-rounded portfolio-projects--btn"
                  href="https://sonorangirl.github.io/Simon-Game/"
                  role="button"
                >
                  View Project
                </a>
              </div>
              <div className="col-sm-7 text-center pull-right-sm">
                <img
                  className="img-rounded portfolio-projects--image"
                  alt="project4"
                  src="https://sonorangirl.github.io/img/slice-simon.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
