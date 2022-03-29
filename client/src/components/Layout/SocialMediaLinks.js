import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Layout.style.css";

export const SocialMediaLinks = (props) => {
  return (
    <div>
      <span
        className="social-media-icon"
        onClick={() =>
          window.open("https://www.linkedin.com/in/anbuanand", "_blank")
        }
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </span>
      <span
        className="social-media-icon"
        onClick={() =>
          window.open("https://github.com/anbuanand-github", "_blank")
        }
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SocialMediaLinks);
