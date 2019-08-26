import React from 'react'
import { graphql, Link } from 'gatsby'
import { Hero, Layout, PostCard } from '../components'

export default ({ data, pageContext }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data
  const { currentPage: page, numPages } = pageContext
  const prevPage = page - 1 === 1 ? '/blog/' : (page - 1).toString()
  const nextPage = '/blog/' + (page + 1).toString()
  const isFirst = page === 1
  const isLast = page === numPages

  return (
    <Layout>
      <Hero title={'Exploring ideas about design, code, and technology.'} description={'+ some other random stuff.'} />
      <main className={'blog-grid'}>
        {posts.map(({ node }, index) => {
          const {
            frontmatter: { title, description, date },
            fields: { slug },
          } = node
          return <PostCard key={index} index={index} slug={slug} title={title} description={description} date={date} />
        })}
      </main>
      <div className={'pagination'}>
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

export const query = graphql`
  query blog($limit: Int!, $skip: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
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
