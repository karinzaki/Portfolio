import React from "react"
import "./PortfolioFilterComponent.css"

export default function PortfolioFilterComponent(props) {
  return (
    <li
      className={`gallery__list--item font-weight-bold h2__style list-inline-item filter ${props.active}`}
      data-filter={props.filtering}
    >
      {props.list__word}
    </li>
  )
}