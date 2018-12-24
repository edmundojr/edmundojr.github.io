import React from 'react'

export const Hero = ({ type, title, description }) => (
  <div className={'container-fluid'}>
    <div
      className={
        'hero row align-items-center justify-content-center text-center mt-8 my-md-0 ' +
        (type === 'small' ? 'hero--small' : '')
      }
    >
      <div className={'col-sm-9 col-md-6'}>
        <h1 className={'hero-title mb-0'}>{title}</h1>
        <p className={'hero-description lead mb-0'}>{description}</p>
      </div>
    </div>
  </div>
)
