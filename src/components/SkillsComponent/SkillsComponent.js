import React from 'react'
import './SkillsComponent.css'

export default function SkillsComponent(props) {
  return (
    <div className="skills__container">
      {/* <p>{props.skillName}</p> */}
      <ul>
        <li className="skills-para">
          <div className="side-bar"></div>
          {props.skillName}
        </li>
      </ul>
    </div>
  )
}