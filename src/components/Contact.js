import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="row cover bottom">
      <h2 className="text-center contact-header">Contact Me</h2>
      <p className="text-center contact-email">
        Get in touch with me{" "}
        <span className="glyphicon glyphicon-arrow-right"></span>{" "}
        syahrulrmdhon2@gmail.com
      </p>
      <div className="text-center contact-social-icons">
        <p>Or find me on:</p>
        <ul className="centered">
          <a href="https://www.linkedin.com/in/syahrul-romadhon-65a63b131/">
            <li>
              <i className="fa fa-linkedin-square"></i> LinkedIn
            </li>
          </a>
          <a href="https://github.com/syahrulrmdhon">
            <li>
              <i className="fa fa-github"></i> Github
            </li>
          </a>
          <a href="https://twitter.com/syahrulrmdhon">
            <li>
              <i className="fa fa-twitter"></i> Twitter
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
