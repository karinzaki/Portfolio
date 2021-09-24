import React from "react"
import "./SkillsContainer.css"
import SkillsComponent from "../../components/SkillsComponent/SkillsComponent"
import { SkillList, SkillsSection } from "../../portfolioData"

export default function SkillContainer() {
  const skills = SkillList.map((item) => {
    return <SkillsComponent key={item.id} skillName={item.skillName} />;
  });

  return (
    <section className="overall custom__background">
      <div
        className="skills"
        id={SkillsSection.id}
      >
        <div className="container">
          <h2
            className="h2__style custom__underline"
            data-title={SkillsSection.title}
          >
            {SkillsSection.title}
          </h2>
          <section className="skill-holder">
            {skills}
          </section>
        </div>
      </div>
    </section>
  )
}