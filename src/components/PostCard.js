import { Link } from 'gatsby'
import React from 'react'
import { motion } from 'framer-motion'

export default React.memo(({ slug, title, date, description, index, variants }) => (
  <motion.a
    href={slug}
    key={index}
    className="post-card grid-item"
    style={{
      color: `var(--card-color-${index + 1})`,
      backgroundColor: `var(--card-bg-${index + 1})`,
    }}
    variants={variants}
  >
    <h1 className="post-card-title">{title}</h1>
    <time className="post-card-date">{date}</time>
    <p className="post-card-description">{description}</p>
    <small className="post-card-read">Read more ›</small>
  </motion.a>
))
