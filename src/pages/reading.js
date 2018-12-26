import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import { Hero, Layout } from '../components'

export default class LibraryIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const books = get(this, 'props.data.allGoodreadsBook.edges')
    return (
      <Layout>
        <Helmet title={siteTitle + ' × Reading'} />
        <Hero
          type={'large'}
          title={'From the library of Edmundo Santos'}
          description={'Designer & Book Nerd'}
        />
        <main className={'container-fluid'}>
          <div className={'reading'}>
            {books.map(({ node }) => {
              return <Book props={node} />
            })}
          </div>
        </main>
      </Layout>
    )
  }
}

const Book = ({ props }) => {
  const { shelfNames } = props
  const { bookID, titleWithoutSeries, imageUrl, authors } = props.book
  return (
    <div key={bookID} className={'book' + ' book-' + shelfNames}>
      <img
        src={imageUrl}
        className={'book-cover img-fluid'}
        alt={titleWithoutSeries}
      />
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

export const pageQuery = graphql`
  query LibraryQuery {
    site {
      siteMetadata {
        title
      }
    }
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
