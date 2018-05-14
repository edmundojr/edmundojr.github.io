import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    const post      = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    // const postDate  = post.frontmatter.date.replace(/\S+/g, function(a) {
    //   return `<span>${a}</span>`
    // })
    const postHeader = `
      <header class="post__header">
        <h1 class="post__title">${post.frontmatter.title}</h1>
      </header>
    `
    const postMeta = `
      <aside class="post__meta">
        <time class="post__date">
          ${post.frontmatter.date.replace(/\S+/g, function (a) {
            return `<span>${a}</span>`
          })}
        </time>
      </aside>
    `

    return (
      <main className="main">
        <Helmet title={`${post.frontmatter.title} × ${siteTitle}`} />
        <article className="content post" dangerouslySetInnerHTML={{ __html: postHeader + post.html + postMeta }} />
      </main>
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
        tags
      }
    }
  }
`
