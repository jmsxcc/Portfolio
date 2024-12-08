import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav_logo">
          <img src="https://img.icons8.com/plumpy/100/j.png" />
        </a>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="icon-user"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#education" className="nav_link">
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#project" className="nav_link">
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className="copyright">&copy; 2024</span>
        </div>
      </aside>

      <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Navbar;
