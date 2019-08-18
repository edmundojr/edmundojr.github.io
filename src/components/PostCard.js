import { Link } from 'gatsby'
import React from 'react'

export const PostCard = React.memo(({ slug, title, date, description, index }) => (
  <Link
    to={slug}
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
  </Link>
))

PostCard.displayName = 'PostCard'
