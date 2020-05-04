import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

import { Layout } from '../components'

export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, tags },
      html,
    },
  } = data
  return (
    <Layout>
      <Helmet title={`${title} · Edmundo Santos, Designer`} />
      <main>
        <article className={'post container-grid'}>
          <header className={'post-header container-grid'}>
            <h1 className={'post-title'}>{title}</h1>
            <time className={'post-date'}>{date}</time>
            <Link className={'back-button'} to={'/'} aria-label={'Go back'}>
              ← Back
            </Link>
            <ul className={'post-tags'}>
              {tags.map((tag, index) => (
                <li key={index} className={'post-tags-tag'}>
                  {tag}
                </li>
              ))}
            </ul>
          </header>
          <div className={'post-content container-grid'} dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
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
