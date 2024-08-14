/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Portfolio.scss";
import Proyectos from "./Proyectos";
import { portafoliosData } from "../../../data/data";

const Portfolio = ({ lng }) => {

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">Check out some of my work</span>
      <div className="portfolio__container container">
        <Proyectos portafolios={portafoliosData} />
      </div>
    </section>
  );
};

export default Portfolio;
