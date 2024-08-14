import React from "react";
import AboutImg from "../../../assets/img/about.jpg";
import "./About.scss";

const About = ({lng}) => {

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img
          src={AboutImg}
          alt="img"
          className="about__img"
        />

        <div className="about__data">
          <p className="about__description">
            Web developer, with extensive kmowledge and years of experience, working in web tecnologies and UI & Ux design, delivering quality work
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">years <br /> experience</span>
            </div>

            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-name">Complete <br /> proyects</span>
            </div>

            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">Companies <br /> worked</span>
            </div>

          </div>

          {/* <div className="about__buttons">
            <a
              download="true"
              target="_blank"
              href="assets/pdf/Alexa-Cv.pdf"
              className="button button-flex"
            >
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
