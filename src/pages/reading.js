import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { Hero, Layout } from '../components'
// import config from '../config'

export default ({ data }) => {
  const {
    allGoodreadsBook: { edges: books },
  } = data
  return (
    <Layout>
      {/*<Helmet title={config.title + ' × Reading'} />*/}
      <Hero type={'large'} title={'From the library of Edmundo Santos'} description={'Designer & Book Nerd'} />
      <main className={'container-fluid'}>
        <div className={'reading'}>
          {books.map(({ node }) => (
            <Book props={node} key={node.book.bookID} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

const Book = ({ props }) => {
  const {
    shelfNames,
    book: { titleWithoutSeries, imageUrl, authors },
  } = props
  return (
    <div className={'book' + ' book-' + shelfNames}>
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
    </div>
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
