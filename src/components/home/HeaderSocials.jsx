import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a
        href="https://www.facebook.com/chaychan.jamremtrai/"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-facebook" id="home-icon"></i>
      </a>

      <a
        href="https://github.com/jmsxcc"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-brands fa-github" id="home-icon"></i>
      </a>

      <a
        href="mailto: chaichan.janr@gmail.com"
        className="home_social-link"
        target="_blank"
      >
        <i className="fa-solid fa-envelope" id="home-icon"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
