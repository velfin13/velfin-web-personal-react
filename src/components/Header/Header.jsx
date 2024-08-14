import React, { useState } from "react";

import { navbarLinks as navbarLinksEs } from "../../data/data_es";
import { navbarLinks as navbarLinksEn } from "../../data/data_en";
import "./Header.scss";

const Header = ({ lng, setLanguage }) => {
  const [collapse, setCollapse] = useState(false);
  
  var navbarLinksTraslated = [];

  switch (lng) {
    case "en":
      navbarLinksTraslated = navbarLinksEn;
      break;
    case "es":
      navbarLinksTraslated = navbarLinksEs;
      break;
  
    default:
      navbarLinksTraslated = navbarLinksEn;
      break;
  }

  
  /* boton collapzar */
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  /* Boton cambiar idioma */
  const handleChangeLng = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href className="nav__logo">
          Velfin Velásquez
        </a>

        <div className={collapse ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navbarLinksTraslated.map((navBarState) => (
              <li className="nav__item" key={navBarState.id}>
                <a
                  href={navBarState.url ? navBarState.url : ""}
                  className="nav__link"
                >
                  <i className={`${navBarState.icon} nav__icon`}></i>{" "}
                  {navBarState.label ? navBarState.label : ""}
                </a>
              </li>
            ))}

            <li className="nav__item">
              <center>
                <select
                  name="lenguage"
                  value={lng}
                  onChange={handleChangeLng}
                  className="change__lenguage"
                >
                  <option value="es">Spanish</option>
                  <option value="en">English</option>
                </select>
              </center>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={handleCollapse}></i>
        </div>

        <div className="nav__btns">
          {!collapse && (
            <>
              {/* Theme change button */}
              {/* <i class="uil uil-moon change-theme"></i> */}
              <div className="nav__toggle" id="nav-toggle">
                <i className="uil uil-apps" onClick={handleCollapse}></i>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
