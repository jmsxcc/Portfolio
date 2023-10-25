import React from "react";
import "./home.css";
import Profile from "../../assets/profile.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Profile} alt="" className="home_img" />
        <h1 className="home_name">Chaichan Janramtrai</h1>
        <span className="home_titles">Hi, I'm James</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
