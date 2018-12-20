import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import Helmet from 'react-helmet'

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
              const id = node.id
              const bookTitle = node.title_without_series
              const bookCover = node.large_image_url
                ? node.large_image_url
                : node.image_url
                  ? node.image_url
                  : node.small_image_url
              const bookAuthorName = node.authors[0].name
              const bookAuthorImage = node.authors[0].image_url
              return (
                <div key={id} className={'book'}>
                  <img
                    src={bookCover}
                    className={'book-cover img-fluid'}
                    alt={bookTitle}
                  />
                  <div className={'book-details'}>
                    <h4 className={'book-details-title'}>{bookTitle}</h4>
                    <div className={'book-details-author'}>
                      <figure
                        style={{
                          backgroundImage: 'url(' + bookAuthorImage + ')',
                        }}
                        className={'book-details-author-image img-fluid'}
                      />
                      <figcaption>{bookAuthorName}</figcaption>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query LibraryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allGoodreadsBook(sort: { fields: published, order: DESC }) {
      edges {
        node {
          id
          title_without_series
          image_url
          large_image_url
          small_image_url
          authors {
            id
            name
            image_url
          }
        }
      }
    }
  }
`
