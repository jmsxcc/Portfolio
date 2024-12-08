import React from "react";
import "./education.css";
import Data from "./Data";

const Education = () => {
  return (
    <section className="education container section grid" id="education">
      <div className="education_container grid">
        <h2 className="section_title">Education</h2>
        <div className="timeline grid">
          {Data.map(({ id, icon, year, title, desc, category }) => {
            if (category === "education") {
              return (
                <div className="timeline_item" key={id}>
                  <i className={icon}></i>
                  <span className="timeline_data">{year}</span>
                  <h3 className="timeline_title">{title}</h3>
                  <p className="timeline_text">{desc}</p>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="education_container grid">
        <h2 className="section_title">Work Experience</h2>
        <div className="timeline grid">
          {Data.map(({ id, icon, year, title, desc, category }) => {
            if (category === "job") {
              return (
                <div className="timeline_item" key={id}>
                  <i className={icon}></i>
                  <span className="timeline_data">{year}</span>
                  <h3 className="timeline_title">{title}</h3>
                  <p className="timeline_text">{desc}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
