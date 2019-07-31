import React from 'react'

export const Hero = React.memo(({ title, description }) => (
  <div className="hero container-grid">
    <div className="hero-content">
      <h1 className="hero-title">{title}</h1>
      {description && <p className="hero-description lead mb-0">{description}</p>}
    </div>
  </div>
));
