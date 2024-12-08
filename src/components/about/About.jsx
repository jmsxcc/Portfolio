import React from "react";
import "./about.css";
import Profile from "../../assets/profile.jpg";
import DataPhoto from "./DataSkill";
import Resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Profile} className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">First-class honors graduate in computer and robotic engineering, specializing in HTML, CSS, JavaScript, ReactJS, Next.js and C#. Experienced in developing web applications as a consultant for SCG, enhancing document management, inventory, and logistics systems. Skilled in problem-solving, critical thinking, and time management. Seeking a career as a Full-Stack Developer or Frontend Developer.</p>

            <div className="box-btn-cv">
              <button className="btn-download">
                <a className="btn-text">Demo CV</a>
                <a href={Resume} target="_blank" className="btn-icon">
                  <i className="fa-solid fa-up-right-from-square"></i>{" "}
                </a>
              </button>

              <button className="btn-download">
                <a className="btn-text">Download CV</a>
                <a href={Resume} className="btn-icon" download>
                  <i className="fa-solid fa-floppy-disk" style={{ fontSize: "20px" }}></i>
                </a>
              </button>
            </div>
          </div>

          <div className="about_container_title">
            <h2 className="about_title">Skills</h2>
            <div className="about_icon">
              <h3 className="about_frontend">Frontend</h3>
              {DataPhoto.map(({ id, photo, category }) => {
                if (category === "frontend")
                  return (
                    <div className="about_card" key={id}>
                      <img src={photo} alt="" />
                    </div>
                  );
              })}
            </div>

            <div className="about_icon">
              <h3 className="about_frontend">Backend</h3>
              {DataPhoto.map(({ id, photo, category }) => {
                if (category === "backend")
                  return (
                    <div className="about_card" key={id}>
                      <img src={photo} alt="" />
                    </div>
                  );
              })}
            </div>

            <div className="about_icon">
              <h3 className="about_frontend">Database</h3>
              {DataPhoto.map(({ id, photo, category }) => {
                if (category === "database")
                  return (
                    <div className="about_card" key={id}>
                      <img src={photo} alt="" />
                    </div>
                  );
              })}
            </div>

            <div className="about_icon">
              <h3 className="about_frontend">Tools</h3>
              {DataPhoto.map(({ id, photo, category }) => {
                if (category === "tools")
                  return (
                    <div className="about_card" key={id}>
                      <img src={photo} alt="" />
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
