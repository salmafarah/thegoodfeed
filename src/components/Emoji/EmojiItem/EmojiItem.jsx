import React from "react";
import { NavLink as Link } from "react-router-dom";

export default ({ to, imgSrc, alt, css, text }) => (
  <div className="emoji">
    <Link
      to={to}
      activeClassName="selectedEmoji"
      style={{ textDecoration: "none" }}
    >
      <img src={imgSrc} alt={alt} className="emojiImg" />
      <p>{text}</p>
    </Link>
  </div>
);
