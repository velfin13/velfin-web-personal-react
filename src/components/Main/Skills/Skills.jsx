import React from "react";
import { skillDataBackendEnd, skillDataDatabaseEnd, skillDataFrondEnd } from "../../../data/data";
import SkillsCore from "../../core/Skills";
import "./Skills.scss";

const Skills = () => {

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skill</h2>
      <span className="section__subtitle">My tcnichal level</span>

      <div className="skills__container container grid">
        <div>
          <SkillsCore skill={skillDataBackendEnd} />
          <SkillsCore skill={skillDataDatabaseEnd} />
        </div>
        <div>
          <SkillsCore skill={skillDataFrondEnd} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
