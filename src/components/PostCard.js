import { Link } from 'gatsby'
import React from 'react'

export const PostCard = React.memo(({slug, title, date, description}) => {
  return (
    <Link to={slug} className="post-card grid-item">
      <h1 className="post-card-title">{title}</h1>
      <time className="post-card-date">{date}</time>
      <p className="post-card-description">{description}</p>
      <small className="post-card-read">Read more ›</small>
    </Link>
  )
});
