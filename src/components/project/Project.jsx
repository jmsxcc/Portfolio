import React, { useState } from "react";
import "./project.css";
import Menu from "./Menu";

export const Project = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItem = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updateItem);
  };

  return (
    <section className="work container section" id="project">
      <h2 className="section_title">Project</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span className="work_item" onClick={() => filterItem("ReactJS")}>
          ReactJS
        </span>
        <span className="work_item" onClick={() => filterItem("ReactTS")}>
          ReactTS
        </span>
        <span className="work_item" onClick={() => filterItem("HTML/CSS")}>
          HTML/CSS
        </span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, link, github, category } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href={link} target="_blank" className="work_button1">
                <i className="icon-link work_button-icon"></i>
              </a>

              <a href={github} target="_blank" className="work_button2">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
