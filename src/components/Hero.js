import React from 'react'
import Link from 'gatsby-link'

const Hero = ({location}) => {
  const isArticle = location.pathname.startsWith('/blog/')

  return (
    <div className="container-fluid">
      <div className={"hero row align-items-center mt-8 my-md-0 " + (isArticle ? "hero--small" : "")}>
        <div className="col-sm-9 col-md-7 offset-sm-1 offset-lg-2">
          <h1 className="hero__title mb-0">
            From the desk of 
            Edmundo Santos
          </h1>
          <p className="hero__description lead mb-0">
            Multidisciplinary designer & coder
          </p>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  location: { pathname: '' }
};

export default Hero