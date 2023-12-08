/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentstack",
      options: {
        api_key: 'xxxxx',
        delivery_token: 'xxxx',
        environment: "development",
        branch: 'main',
        cdn: 'https://cdn.contentstack.io/v3',
        expediteBuild: "true",
        enableSchemaGeneration: "false",
        downloadImages: "false",
        contentTypes: ["title", "menu", "custompage", "customblog", "custom_author"]
      }
    }
  ],
}
