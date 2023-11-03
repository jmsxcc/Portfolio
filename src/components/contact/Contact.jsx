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
            <a href={link} className="contact_card" key={id} target="_blank">
              <div className="contact_icon">
                <i className={icon}></i>
              </div>
              <h3 className="contact_title">{title}</h3>
              <p className="contact_desc">{desc}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
