import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import posed from 'react-pose'
import { Hero, Layout } from '../components'

const Books = posed.div({
  enter: {
    delay: 100,
    staggerChildren: 25,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
  initialPose: 'exit',
});

export default ({ data }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
    return () => setVisible(false)
  }, [])
  const {
    allGoodreadsBook: { edges: books },
  } = data
  return (
    <Layout>
      <Helmet title={"From the library of Edmundo Santos"} />
      <Hero type={'large'} title={'From the library of Edmundo Santos'} description={'Designer & Book Nerd'} />
      <main className={'container-fluid'}>
        <Books className={'reading'} pose={visible ? 'enter' : 'exit'}>
          {books.map(({ node }) => (
            <Book props={node} key={node.book.bookID} />
          ))}
        </Books>
      </main>
    </Layout>
  )
}

const BookContent = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
  },
  init: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    rotateX: -25,
  },
})

const Book = ({ props }) => {
  const {
    shelfNames,
    book: { titleWithoutSeries, imageUrl, authors },
  } = props
  return (
    <BookContent className={'book' + ' book-' + shelfNames}>
      <img src={imageUrl} className={'book-cover img-fluid'} alt={titleWithoutSeries} />
      <div className={'book-details'}>
        <h4 className={'book-details-title'}>{titleWithoutSeries}</h4>
        <div className={'book-details-author'}>
          <figure
            style={{
              backgroundImage: 'url(' + authors[0].imageUrl + ')',
            }}
            className={'book-details-author-image img-fluid'}
          />
          <figcaption>{authors[0].name}</figcaption>
        </div>
      </div>
    </BookContent>
  )
}

export const query = graphql`
  query LibraryQuery {
    allGoodreadsBook(
      filter: { shelfNames: { in: ["currently-reading", "read"] } }
      sort: { fields: [shelfNames, review___dateUpdated], order: ASC }
    ) {
      edges {
        node {
          shelfNames
          review {
            dateUpdated
          }
          book {
            bookID
            titleWithoutSeries
            imageUrl
            authors {
              name
              imageUrl
            }
          }
        }
      }
    }
  }
`
