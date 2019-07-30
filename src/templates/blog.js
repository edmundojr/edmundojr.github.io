import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { get } from 'lodash'

import { Layout, Hero, PostCard } from '../components'

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
          title={"Exploring ideas around design, code, and technology."}
          description={"+ some random stuff."}
        />
        <main className={'blog-grid blog-grid--layout-1'}>
          {posts.map(({ node, index }, i) => {
            const {
              frontmatter: { title, description, date },
              fields: { slug },
            } = node
            return (
              <PostCard
                key={date + index}
                slug={slug}
                title={title}
                description={description}
                date={date}
              />
            )
          })}
        </main>
        <div className="pagination text-center h2 font-weight-bolder mt-6">
          {!isFirst && (
            <Link to={prevPage} rel="prev" aria-label="Previous page">
              ← Prev
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next" aria-label="Next page">
              Next →
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
