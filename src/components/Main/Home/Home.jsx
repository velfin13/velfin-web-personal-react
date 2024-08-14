/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HomeIMG from '../../../assets/img/perfil.png';
import { socialLinks } from "../../../data/data";
import SocialsHome from "../../core/Socials/SocialsHome";
import "./Home.scss";

const Home = ({ lng }) => {

  return (
    <section className="home section" id="home">
      <div className="div home__container container grid">
        <div className="home__content grid">
          <SocialsHome socials={socialLinks} />

          <div className="home__img">
            <img
              className="home__blog"
              src={HomeIMG}
              alt="img"
            />
          </div>

          <div className="home__data">
            <div className="home__title">Hi, I'm Velfin</div>
            <h3 className="home__subtitle">Full strack developer</h3>
            <p className="home__description">High level experience in web design and development knowledga</p>
            <a href="#contact" className="button button--flex">
              Contact me
              <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll up</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
