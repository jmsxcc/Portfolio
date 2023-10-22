import React from "react";
import "./education.css";
import Data from "./Data";

const Education = () => {
  return (
    <section className="education container section" id="education">
      <h2 className="section_title">Education</h2>

      <div className="education_container grid">
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
    </section>
  );
};

export default Education;
