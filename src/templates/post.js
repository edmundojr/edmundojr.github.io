import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql, Link } from 'gatsby'

import { Layout } from '../components'

const BlogPostTemplate = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const post = get(props, 'data.markdownRemark')
  const {
    frontmatter: { title, date, tags },
  } = post
  return (
    <Layout>
      <Helmet title={`${title} × ${siteTitle}`} />
      <main>
        <article className={'post container-grid'}>
          <header className={'post-header container-grid'}>
            <Link className={'back-button'} to={'/blog/'} aria-label={'Back to home'}>←</Link>
            <h1 className={'post-title'}>{title}</h1>
            <time className={'post-date'}>{date}</time>
            <ul className={'post-tags'}>
              {tags.map((tag, index) => (
                <li key={`${index}`} className={'post-tags-tag'}>
                  {tag}
                </li>
              ))}
            </ul>
          </header>
          <div
            className={'post-content container-grid'}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
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
        date(formatString: "dddd, MMMM DD, YYYY")
        tags
      }
    }
  }
`
