import React from 'react'

const Hero = ({ type }) => (
  <div className="container-fluid">
    <div className={"hero row align-items-center mt-8 my-md-0 " + (type === "small" ? "hero--small" : "")}>
      <div className="col-sm-9 col-md-7 offset-sm-1 offset-lg-2">
        <h1 className="hero__title mb-0">
          From the desk of Edmundo Santos
        </h1>
        <p className="hero__description lead mb-0">
          Multidisciplinary Designer & UI Developer
        </p>
      </div>
    </div>
  </div>
);

export default Hero
