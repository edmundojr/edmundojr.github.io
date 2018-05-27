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
      <header class="row align-items-center post__header position-sticky">
        <div class="order-first d-none d-md-block col-md-1 col-lg-1 offset-lg-1">
          <div class="post__title__decoration"></div>
        </div>
        <h1 class="post__title order-last col-sm-8 col-md-7">${post.frontmatter.title}</h1>
      </header>
    `

    const postContent = `
      <div class="row">
        <div class="order-last order-sm-3 col-sm-8 col-md-7 offset-md-1 offset-lg-2">
          ${post.html}
        </div>
        <aside class="post__meta order-3 order-sm-last col-sm-4 col-md-3 text-sm-center text-uppercase">
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
