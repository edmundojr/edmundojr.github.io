import React from 'react'

export default ({ title, description }) => (
  <div key={'hero'} className={'hero'}>
    <h1 className={'hero-title'}>{title}</h1>
    <p className={'hero-description lead mb-0'}>{description}</p>
  </div>
)
