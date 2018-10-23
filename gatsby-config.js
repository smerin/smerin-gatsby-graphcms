module.exports = {
  siteMetadata: {
    title: "My blog",
    description: "This is my cool blog"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-PKB2BF7",
        includeInDevelopment: false
      }
    }
  ]
};
