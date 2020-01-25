import React from 'react'
import { graphql, Link } from 'gatsby'
import { Hero, Layout, PostCard } from '../components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 100, scale: 0.95, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
  pageContext: { currentPage: page, numPages },
}) => {
  const prevPage = page - 1 === 1 ? '/' : (page - 1).toString()
  const nextPage = '/blog/' + (page + 1).toString()
  const isFirst = page === 1
  const isLast = page === numPages

  return (
    <Layout>
      <Helmet title={'Articles about design and code · Edmundo Santos, Designer'} />
      <Hero title={'Exploring ideas about design, code, and technology.'} description={'+ some other random stuff.'} />
      <motion.div className={'blog-grid'} variants={container} initial="hidden" animate="visible">
        {posts.map(({ node }, index) => {
          const {
            frontmatter: { title, description, date },
            fields: { slug },
          } = node
          return (
            <PostCard
              key={index}
              index={index}
              slug={slug}
              title={title}
              description={description}
              date={date}
              variants={item}
            />
          )
        })}
      </motion.div>
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
