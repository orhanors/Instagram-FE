import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div class='container'>
      <div className="options">
        <a>About</a>
        <a>Vlog</a>
        <a>Jobs</a>
        <a>Help</a>
        <a>API</a>
        <a>Privacy</a>
        <a>Terms</a>
        <a>Top Accounts</a>
        <a>Hashtags</a>
        <a>Locations</a>
      </div>
      <div className="options">
        <a>English</a>
        <a>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          Instagram from Facebook
        </a>
      </div>
    </div>
  );
};

export default Footer;
