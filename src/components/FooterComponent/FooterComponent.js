import React from "react"
import './FooterComponent.css'

export default function FooterComponent(props) {
  return (
    <>
      <a
        href={props.socialURL}
        target='_blank'
        rel='noreferrer noopener'
        className='footer__icon rounded-circle d-inline-flex position-relative justify-content-center align-items-center'
        title={props.socialName}
        aria-label={props.socialName}>
        {props.socialImg}
      </a>
    </>
  )
}