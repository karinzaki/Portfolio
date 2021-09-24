import React from "react"
import { resumeData } from "../../portfolioData"
import "./ResumeContainer.css"
import DownloadRounded from '@mui/icons-material/DownloadRounded'

export default function ResumeContainer() {
  return (
    <section
      className="resume padding-top-bottom custom__background"
      id={resumeData.id}
    >
      <div className="container">
        <h2
          className="h2__style custom__underline"
          data-title={resumeData.id}
        >
          {resumeData.id}
        </h2>
        <p className="resume-info">{resumeData.resumeInfo}</p>
        <a
          className="custom__button"
          aria-label={resumeData.resumeAnchorText}
          download
          href={resumeData.resumeURL}
          rel="noopener "
          target="_blank "
        >
          <div>
            <DownloadRounded>DownloadRounded</DownloadRounded> {resumeData.resumeAnchorText}
          </div>
        </a>
      </div>
    </section>
  )
}