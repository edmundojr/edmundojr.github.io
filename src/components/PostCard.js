import { Link } from 'gatsby'
import React from 'react'
import { motion } from 'framer-motion'

export const PostCard = ({ slug, title, date, description, index }) => (
  <motion.a
    href={slug}
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
  </motion.a>
)
