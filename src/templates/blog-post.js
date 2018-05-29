import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const post = this.props.data.markdownRemark
    const postTitle = post.frontmatter.title
    const postLink = post.frontmatter.slug
    const postDate = post.frontmatter.date
    const postTags = post.frontmatter.tags

    const postContent = `
      <div class="row align-items-start">
        <div class="col-sm-11 col-md-7 offset-sm-1 offset-lg-2 order-last order-md-first">
          ${post.html}
        </div>
        <aside class="post__meta col-sm-11 col-md-3 text-md-center offset-sm-1 offset-md-0 order-first order-md-last position-sticky mb-2">
          <time class="post__date d-inline-block mb-1 mb-sm-0">
            ${postDate.replace(/\S+/g, function (a) {
              return `<span>${a}</span>`
            })}
          </time>
          <ul class="post__tags">
            ${postTags.map((tag, index) => {
              return `
                <li key=${index}>${tag}</li>
              `
            }).join("")}
          </ul>
        </aside>
      </div>
    `

    return (
      <main className="container-fluid">
        <Helmet title={`${postTitle} × ${siteTitle}`} />
        <article className="post">
          <h1 className="post__title">
            <Link to={postLink} className="post__title__link row align-items-center">
              <span className="post__title__detail col-1 offset-lg-1 order-last order-sm-first"></span>
              <span className="col-11 col-md-7 order-first order-sm-last">
                {postTitle}
              </span>
            </Link>
          </h1>
          <div dangerouslySetInnerHTML={{ __html: postContent }} />
        </article>
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
