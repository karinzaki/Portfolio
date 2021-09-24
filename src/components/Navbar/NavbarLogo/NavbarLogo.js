import React from 'react'
import './NavbarLogo.css'

export default function NavbarLogo(props) {
  return (
    <a 
      className="navbar-brand logo text-uppercase"
      href="index.html"
      aria-label={props.name_ariaLabel}
      data-name={props.name_ariaLabel}
    >
      {props.first_word} <span>{props.inspan}</span>
    </a>
  )
}