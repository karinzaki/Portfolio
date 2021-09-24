import React from "react"
import NavbarLinks from "../../components/Navbar/NavbarLinks/NavbarLinks"
import NavbarIcon from "../../components/Navbar/NavbarIcon/NavbarIcon"
import NavbarLogo from "../../components/Navbar/NavbarLogo/NavbarLogo"
import { navbarLinks, logoData } from "../../portfolioData"
import "./HeaderContainer.css"

export default function HeaderContainer() {
  const navbar_anchor = navbarLinks.map((item) => {
    return (
      <NavbarLinks
        key={item.id}
        id={item.label__span__title}
        navigateTo={item.navigateTo}
        label__span__title={item.label__span__title}
      />
    )
  })

  // Home
  const logoDetails = logoData.map((item) => {
    return (
      <NavbarLogo
        key={item.id}
        first__word={item.first__word}
        inspan={item.inspan}
        name__ariaLabel={item.name__ariaLabel}
      />
    )
  })

  // rest of nav content
  return (
    <header className="header custom__background">
      <nav className="navbar navbar-light" id="navbar">
        <div className="container1">
          <span className="home">{logoDetails}</span>
          <NavbarIcon />
          <ul className="navbar-nav">{navbar_anchor}</ul>
        </div>
      </nav>
    </header>
  )
}