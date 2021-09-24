import React from "react"
import { footerSocialData, copyright } from "../../portfolioData"
import FooterSocial from "../../components/FooterComponent/FooterComponent"
import "./FooterContainer.css"

export default function FooterContainer() {
  const social = footerSocialData.map((item) => {
    return (
      <FooterSocial
        key={item.id}
        socialName={item.socialName}
        socialURL={item.socialURL}
        socialImg={item.socialImg}
      />
    )
  })

  return (
    <footer className="footer custom__background">
      <section className="footer-container">
        <div className="socials">{social}</div>
        <div className="copyright">
          {copyright.first__word} &copy; {copyright.second__word}
        </div>
      </section>
    </footer>
  )
}