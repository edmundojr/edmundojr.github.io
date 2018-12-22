import React from 'react'

const Hero = ({ type, title, description }) => (
  <div className={'container-fluid'}>
    <div
      className={
        'hero row align-items-center mt-8 my-md-0 ' +
        (type === 'small' ? 'hero--small' : '')
      }
    >
      <div className={'col-sm-9 col-md-6 offset-sm-1 offset-lg-2'}>
        <h1 className={'hero__title mb-0'}>{title}</h1>
        <p className={'hero__description lead mb-0'}>{description}</p>
      </div>
    </div>
  </div>
)

export default Hero
