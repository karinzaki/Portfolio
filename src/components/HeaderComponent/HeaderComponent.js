import React from 'react'
import './HeaderComponent.css'
import { footerSocialData, AboutSection } from '../../portfolioData'
import FooterComponent from '../FooterComponent/FooterComponent'
import DownloadRounded from '@mui/icons-material/DownloadRounded'

export default function HeaderComponent(props) {
  const social = footerSocialData.map(item => {
    return (
      <>
      <FooterComponent 
        key={item.id}
        socialName={item.socialName}
        socialURL={item.socialURL}
        socialImg={item.socialImg}
      />
      </>
    )
  })

  return (
    <>
      <h1 className="mt-0 mb-0">{props.name}</h1>
      <p className="main-p">{props.job}</p>
      <p className="about-me">{AboutSection.paragraph}</p>
      <p className="about-me">{AboutSection.paragraph2}</p>
      <div className="header__social">{social}</div>
      <a 
        className="custom__button"
        aria-label="Download Resume"
        href={props.resumeLink}
        rel="noopener "
        target="_blank"
      >
        {/* <svg data-testid={`${props.fontIcon}`}></svg> {props.AnchorText} */}
        <div className="download-res">
          <DownloadRounded>{`${props.fontIcon}`}</DownloadRounded> {props.AnchorText} 
        </div>
      </a>
    </>
  )

}