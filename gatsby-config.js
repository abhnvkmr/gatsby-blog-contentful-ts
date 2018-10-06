module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog Starter with Contentful and TypeScript',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-blog-contentful-typescript',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `bzpuv9ei76p1`,
        accessToken: `dae752f74426682392b011f1fe622ec4bcc8a502175a7435f823a730ecd12eec`
      }
    },
    'gatsby-transformer-remark'
  ],
}
