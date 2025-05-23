module.exports = {
  siteMetadata: {
    siteTitle: `Tabler React 2 Docs`,
    defaultTitle: `Tabler React 2 Docs`,
    siteTitleShort: `Tabler React 2 Docs`,
    siteDescription: `Documentation for Tabler React 2`,
    siteUrl: `https://tabler-react-2.pages.dev`,
    siteAuthor: `@jackcrane`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#066fd1`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        homePath: `src/home`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/jackcrane/tabler-react-2`,
        baseDir: `docs`,
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tabler React 2 Docs`,
        short_name: `Tabler React 2 Docs`,
        start_url: `/getting-started`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
