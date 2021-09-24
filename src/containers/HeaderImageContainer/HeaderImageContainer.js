import React from "react"
import HeaderContainer from "../../components/HeaderComponent/HeaderComponent"
import { headerInfo } from "../../portfolioData"
import "./HeaderImageContainer.css"
import animation from "../../images/animation.png"

export default function HeaderImageContainer() {
  return (
    <section className="header-info">
      <div className="container">
        <div className="row  align-content-center">
          <div className="header-image">
          <img src={animation} alt="" />
            <HeaderContainer
              name={headerInfo.name}
              job={headerInfo.job}
              resumeLink={headerInfo.resumeLink}
              fontIcon={headerInfo.fontIcon}
              AnchorText={headerInfo.AnchorText}
            />
            {/* <span className="header-image">
              <HeaderImageComponent headerImage_src={headerImage.headerImage_src} />
            </span> */}
          </div>
        </div>
      </div>
    </section>
  )
}