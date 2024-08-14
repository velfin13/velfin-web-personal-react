/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ContactmeCore from "../../core/Contactme";

import { contactosData } from "../../../data/data";
import "./Contactme.scss";

const Contactme = () => {

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact me</h2>
      <span className="section__subtitle">Get in touch</span>
      <ContactmeCore contactos={contactosData} />
    </section>
  );
};

export default Contactme;
