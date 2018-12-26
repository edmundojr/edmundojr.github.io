import React from 'react'

export const Hero = ({ title, description }) => (
  <div className={'hero container-grid'}>
    <div className={'hero-content'}>
      <h1 className={'hero-title mb-0'}>{title}</h1>
      <p className={'hero-description lead mb-0'}>{description}</p>
    </div>
  </div>
)
