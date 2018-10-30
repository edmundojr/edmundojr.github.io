import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
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
          type={"small"}
          title={"From the library of Edmundo Santos"}
          description={"Designer & Book Nerd"}
        />
        <main className="container-fluid">
          <div className={"reading"}>
            {books.map(({ node }) => {
              const id = node.id
              const title = node.title_without_series
              const image = node.image_url
              const author = node.authors[0].name
              return (
                <div key={id} className={"book"}>
                  <img src={image} className="book-cover img-fluid" alt=""/>
                  <div className={"book-details"}>
                    {title}<br/>
                    <div className="book-details-author text-muted">{author}</div>
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
          title
          title_without_series
          image_url
          link
          num_pages
          publisher
          publication_day
          publication_month
          publication_year
          published
          authors {
            id
            name
          }
        }
      }
    }
  }
`
