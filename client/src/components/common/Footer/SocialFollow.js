import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYelp,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css';

function SocialFollow() {
  return (
    <div className="social-container">
      <h3>Follow Us</h3>
      <a
        href="https://www.yelp.com/biz/budders-bakery-fountain-valley"
        className="yelp social"
      >
        <FontAwesomeIcon icon={faYelp} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/buddersbakery"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/Buddersbakery" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/budders.bakery/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default SocialFollow;
