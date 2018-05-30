module.exports = {
  siteMetadata: {
    title: 'Edmundo Santos',
    author: 'Edmundo Santos',
    description: 'The daily, weekly, and monthly musings of Edmundo Santos, multidisciplinary designer & coder.',
    siteUrl: 'https://edmundojr.com/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 840,
              linkImagesToOriginal: false,
              wrapperStyle: {
                marginBottom: '1rem'
              }
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1068613-7`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          require('autoprefixer')()
        ],
        precision: 8,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
