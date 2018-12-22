import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/Hero'

const BlogPostTemplate = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const post = get(props, 'data.markdownRemark')
  const postTitle = post.frontmatter.title
  const postDate = post.frontmatter.date.replace(/(\S+)/g, '<span>$1</span>')
  const postTags = post.frontmatter.tags

  return (
    <Layout>
      <Helmet title={`${postTitle} × ${siteTitle}`} />
      <Hero type={'small'} title={'From the desk of Edmundo Santos'} />
      <main className="container-fluid">
        <article className="post">
          <h1 className="post__title">
            <div className="post__title__link row align-items-center">
              <span className="post__title__detail col-1 offset-lg-1 order-last order-sm-first" />
              <span className="col-11 col-md-6 order-first order-sm-last">
                {postTitle}
              </span>
            </div>
          </h1>
          <div className="row align-items-start">
            <div
              className="col-sm-11 col-md-6 offset-sm-1 offset-lg-2 order-last order-md-first"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <aside className="post__meta col-sm-11 col-md-3 text-md-center offset-sm-1 offset-md-0 order-first order-md-last position-sticky mb-2">
              <time
                className="post__date d-inline-block mb-sm-0"
                dangerouslySetInnerHTML={{ __html: postDate }}
              />
              <ul className="post__tags">
                {postTags.map((tag, index) => (
                  <li key={`${index}`}>{tag}</li>
                ))}
              </ul>
            </aside>
          </div>
        </article>
      </main>
    </Layout>
  )
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
