import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'
import { Hero, Layout, PostCard } from '../components'
import posed from 'react-pose'
import { Helmet } from 'react-helmet'

const Main = posed.div({
  enter: {
    delay: 100,
    staggerChildren: 75,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
  initialPose: 'exit',
})

export default ({ data, pageContext }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
    return () => setVisible(false)
  }, [])
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
      <Helmet title={"Articles about design and code · Edmundo Santos, Designer"} />
      <Hero title={'Exploring ideas about design, code, and technology.'} description={'+ some other random stuff.'} />
      <Main className={'blog-grid'} pose={visible ? 'enter' : 'exit'}>
        {posts.map(({ node }, index) => {
          const {
            frontmatter: { title, description, date },
            fields: { slug },
          } = node
          return <PostCard key={index} index={index} slug={slug} title={title} description={description} date={date} />
        })}
      </Main>
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
