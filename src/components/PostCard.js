import { Link } from 'gatsby'
import React from 'react'
import posed from 'react-pose'

const Card = posed(Link)({
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
  },
  exit: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    rotateX: -25,
  },
  hoverable: true,
  hover: {
    y: -5,
    scale: 1.01,
  },
})

export default React.memo(({ slug, title, date, description, index }) => (
  <Card
    to={slug}
    key={index}
    className="post-card grid-item"
    style={{
      color: `var(--card-color-${index + 1})`,
      backgroundColor: `var(--card-bg-${index + 1})`,
    }}
  >
    <h1 className="post-card-title">{title}</h1>
    <time className="post-card-date">{date}</time>
    <p className="post-card-description">{description}</p>
    <small className="post-card-read">Read more ›</small>
  </Card>
))
