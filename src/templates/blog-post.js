import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    const post      = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const postHeader = `
      <h1 class="post__title">
        <div class="post__title__link row align-items-center">
          <span class="post__title__detail col-1 offset-lg-1 order-last order-sm-first"></span>
          <span class="col-11 col-md-7 order-first order-sm-last">
            ${post.frontmatter.title}
          </span>
        </Link>
      </h1>
    `

    const postContent = `
      <div class="row align-items-start">
        <div class="col-sm-11 col-md-7 offset-sm-1 offset-lg-2 order-last order-md-first">
          ${post.html}
        </div>
        <aside class="post__meta col-sm-11 col-md-3 text-md-center offset-sm-1 offset-md-0 order-first order-md-last position-sticky mb-2">
          <time class="post__date d-inline-block mb-1 mb-sm-0">
            ${post.frontmatter.date.replace(/\S+/g, function (a) {
              return `<span>${a}</span>`
            })}
          </time>
        </aside>
      </div>
    `

    return (
      <main className="container-fluid">
        <Helmet title={`${post.frontmatter.title} × ${siteTitle}`} />
        <article className="post" dangerouslySetInnerHTML={{ __html: postHeader + postContent }} />
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
