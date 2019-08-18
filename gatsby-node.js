// const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')
import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: '/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/blog/',
  })

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create pages for blog posts
        const posts = result.data.allMarkdownRemark.edges
        const postsPerPage = 7
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? '/blog/' : `/blog/${i + 1}`,
            component: path.resolve('./src/templates/blog.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              currentPage: i + 1,
            },
          })
        })

        // Create blog posts pages
        posts.forEach((post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: path.resolve('./src/templates/post.js'),
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
