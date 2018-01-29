import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Bio from '../components/Bio'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <article className="post">
        <Helmet title={`${post.frontmatter.title} · ${siteTitle}`} />
        <header>
          <h1>{post.frontmatter.title}</h1>
          <time className="post__meta">{post.frontmatter.date}</time>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Bio />
      </article>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
      }
    }
  }
`
