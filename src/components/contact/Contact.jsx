import React from "react";
import "./contact.css";
import DataContact from "./DataContact";

const Contact = () => {
  return (
    <section className="container section" id="contact">
      <h2 className="section_title">Contact</h2>

      <div className="contact_container grid">
        {DataContact.map(({ id, icon, link, title, desc }) => {
          return (
            <div className="contact_card" key={id}>
              <a href={link} className="contact_icon" target="_blank">
                <i className={icon}></i>
              </a>
              <h3 className="contact_title">{title}</h3>
              <p className="contact_desc">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
