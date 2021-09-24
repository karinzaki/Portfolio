import React from 'react'
import './PortfolioComponent.css'
import { GitHub, LocationOn } from '@mui/icons-material/'

export default function PortfolioComponent(props) {
  return (
    <article
      data-aos-anchor-placement="bottom-bottom"
      className={`card-item ${props.filter__word}`}
    >
      <div className="wrapper">
        <div className="pf-row card__detail--wrapper">
          <div className="card__container">
            <div className="background-container">
              <img
                className="photo"
                src={props.imgURL}
                alt={props.projectName}
                loading="lazy"
              />
              <div className="info">
                <ul className="details">
                  <li className="link-tag">
                    <ul>
                    <LocationOn>LocationOn</LocationOn>
                      <li><a
                        href={props.liveDemo}
                        aria-label={props.liveDemoText}
                        rel="noopener"
                        target="_blank"
                      >Visit Live Demo!</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card__detail--holder">
            <div className="details__wrapper">
              <div className="card__detail">
                <h3 className="proj-heading">{props.projectName}</h3>
                <p className="proj-desc">{props.project__info}</p>
              </div>
              <div className="link-holder">
                <a
                  className="btn"
                  aria-label={props.liveDemoText}
                  rel="noopener"
                  target="_blank "
                  href={props.liveDemo}
                >
                  <GitHub>GitHub</GitHub> {props.liveDemoText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}