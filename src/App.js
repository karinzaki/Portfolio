import React, { Component } from "react"
import "jquery"
import "./App.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./css/style.css"
import "./css/normalize.css"
// import Main from "./containers/Main"

import { main } from "./main"
import ColorContainer from "./containers/ColorContainer/ColorContainer"
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer"
import PortfolioContainer from "./containers/PortfolioContainer/PortfolioContainer"
import SkillContainer from "./containers/SkillsContainer/SkillsContainer"
import ResumeContainer from "./containers/ResumeContainer/ResumeContainer"
import FooterContainer from "./containers/FooterContainer/FooterContainer"
import HeaderImageContainer from "./containers/HeaderImageContainer/HeaderImageContainer"

class App extends Component {
  componentDidMount() {
    main()
  }

  render() {
    return (
      <>
        <ColorContainer />
        <HeaderContainer />
        <HeaderImageContainer />
        <main>
          <PortfolioContainer />
          <SkillContainer />
          <ResumeContainer />
        </main>
        <FooterContainer />
      </>
    )
  }
}

export default App;
