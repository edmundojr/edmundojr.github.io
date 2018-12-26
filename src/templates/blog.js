import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { Layout, Hero } from '../components'

export default class Blog extends React.Component {
  render() {
    const pageTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const { currentPage: page, numPages } = get(this, 'props.pageContext')
    const prevPage = page - 1 === 1 ? '/blog/' : (page - 1).toString()
    const nextPage = '/blog/' + (page + 1).toString()
    const isFirst = page === 1
    const isLast = page === numPages
    return (
      <Layout>
        <Helmet title={pageTitle + ' × Articles'} />
        <Hero
          title={'Edmundo Santos'}
          description={'User Interface Designer'}
        />
        <main className={'blog-grid blog-grid--layout-1'}>
          {posts.map(({ node }, i) => {
            const {
              frontmatter: { title, description, date },
              fields: { slug },
            } = node
            return (
              <Link key={slug} to={slug} className={'post-card grid-item'}>
                <h1 className={'post-card-title'}>{title}</h1>
                <time className={'post-card-date'}>{date}</time>
                <p className={'post-card-description'}>{description}</p>
              </Link>
            )
          })}
        </main>
        <div className="pagination text-center">
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ←
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next">
              →
            </Link>
          )}
        </div>
      </Layout>
    )
  }
}

export const blog = graphql`
  query blog($limit: Int!, $skip: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
