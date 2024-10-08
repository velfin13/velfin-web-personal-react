/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { navbarLinks as navbarLinksEs, socialLinks } from "../../data/data_es";
import { navbarLinks as navbarLinksEn } from "../../data/data_en";
import Socials from "../core/Socials/SocialsFooter";
import "./Footer.scss";


const Footer = ({ lng }) => {

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

  console.log(navbarLinksTraslated);
  console.log(lng);
  

  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Velfin</h1>
              <span className="footer__subtitle">Full stack developer</span>
            </div>

            <ul className="footer__links">
              {navbarLinksTraslated.map((footerLinksState) => (
                <li key={footerLinksState.id}>
                  <a
                    href={footerLinksState.url ? footerLinksState.url : ""}
                    className="footer__link"
                  >
                    {footerLinksState.label ? footerLinksState.label : ""}
                  </a>
                </li>
              ))}
            </ul>

            <Socials socials={socialLinks} />
          </div>

          <p className="footer__copy">&#169; Velkin derechos reservados</p>
        </div>

        {/* <a className="scrollup" href="#">
          <i class="uil uil-arrow-up scrollup__icon"></i>
        </a> */}
      </footer>
    </>
  );
};

export default Footer;
