module.exports = {
  siteMetadata: {
    title: "Standard title",
    titleTemplate: "%s | George Smerin",
    description: "This is my cool blog",
    url: "https://agitated-torvalds-2fddae.netlify.com",
    image: "/images/george.jpg",
    twitterUsername: "@georgesmerin"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",
        fieldName: "gcms",
        url:
          "https://api-euwest.graphcms.com/v1/cjp6mu0pz871t01ghp77ep4es/master"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PKB2BF7",
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              showCaptions: false,
              linkImagesToOriginal: false,
              quality: 80
            }
          }
        ]
      }
    }
  ]
};
