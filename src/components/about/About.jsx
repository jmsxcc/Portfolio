import React from "react";
import "./about.css";
import Profile from "../../assets/profile.jpg";
import DataPhoto from "./DataPhoto";
import Resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Profile} className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              A programmer who graduated from computer and robotic engineering
              with first-class honors engages in extensive coding projects,
              specializing in HTML, CSS, JavaScript, Python, and C. Adept at
              problem solving, critical thinking, self-learning, and time
              management. Seeking and having a great desire to pursue a career
              as a web developer or React developer.
            </p>

            <button className="btn-download">
              <a className="btn-text">Download CV</a>
              <a href={Resume} download className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  className="svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </a>
            </button>
          </div>

          <div className="about_container_title">
            <h2 className="about_title">Skills</h2>
            <div className="about_icon">
              <h3 className="about_frontend">Front End</h3>
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
              <h3 className="about_frontend">Back End</h3>
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
