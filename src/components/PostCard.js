import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import posed, { PoseGroup } from 'react-pose'

const Card = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 100,
    transition: {
      y: { type: 'spring', stiffness: 250, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: { duration: 300 },
  },
  hoverable: true,
  hover: {
    scale: 1.01,
    y: -5,
  },
  init: {
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 500, damping: 15 },
  },
})

export default React.memo(({ slug, title, date, description, index }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
    return () => setVisible(false)
  }, [])
  return (
    <PoseGroup>
      {visible && (
        <Card
          key={index}
          className="post-card grid-item"
          style={{
            color: `var(--card-color-${index + 1})`,
            backgroundColor: `var(--card-bg-${index + 1})`,
          }}
        >
          <Link
            to={slug}
            style={{
              color: `var(--card-color-${index + 1})`,
              backgroundColor: `var(--card-bg-${index + 1})`,
            }}
          >
            <h1 className="post-card-title">{title}</h1>
            <time className="post-card-date">{date}</time>
            <p className="post-card-description">{description}</p>
            <small className="post-card-read">Read more ›</small>
          </Link>
        </Card>
      )}
    </PoseGroup>
  )
})
