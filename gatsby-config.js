module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#110f15',
              linkImagesToOriginal: false,
              maxWidth: 1200,
              quality: 100,
              showCaptions: true,
              withWebp: true,
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-1068613-7',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: '@halkeye/gatsby-source-goodreads',
      options: {
        developerKey: 'k3utR8gOzC6HeUkbxbXg',
        goodReadsUserId: '35088315',
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://fbc978873a654e3087dac0d237ba81ff@sentry.io/1533801',
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        apiToken: 'f560d5562bced39cf94873eb7b0b14c0',
        pageViews: 'all',
      },
    },
  ],
}
