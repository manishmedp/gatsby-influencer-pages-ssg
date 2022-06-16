module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-ap-south-1.graphcms.com/v2/cl4f79jee1dpe01wbbaxohsha/master",
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTUyOTA0OTIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDRmNzlqZWUxZHBlMDF3YmJheG9oc2hhL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjdiNTFiOWU1LTJkMWUtNDhlNC1iYWVjLTNjMDNkZWVjZmY1MSIsImp0aSI6ImNsNGZoN3k5cTF2cmQwMXh1ZzJiZzNxd3EifQ.sQ_zFKT-JL_OqZSnITi3ZYBcCzPlFcBfNDFPjp4m2VTh8FzYBfU5XsYTgbbAPWVPVjwMgr3deFOlKxh2ptQWARdfoEsJ1KxO_txei56_IFUQVwaDiZFYcmXoPrirXi5yoZS2odHzANWs4ZutAYxCS-TuPKhkU-12AkJWoQZLFUzlS1l7inmje-DN-VAxtJ-G9zbDHLWzenWX0irZtB2rpFCmEQr0UcMmOlL_yjR00WkZ6rBj1okh4w6__BfW9w2Xoe4dZK9X3ocESYY0gr37bSpWHC1YiIokVBQiLMgRH2KP2QirWxydGqUTD4BJOxPfIqNK_XcSqcOBj6gHMm6x0ydINUhzARBHdjNKhsBh-4WDc2ueb9Pd369fjgReaJ175ySpRz7VfTYtHck-LzL8QSJRfte5iTnia9V-CIYrhiHsyrmCWTd0VLFTPZoNoN7FYArFgvOi-yxQxLSPbFcaoTScgHqgofQelHSf6PZ5gaeTEzbxGR-WpdxRevn-tCNEEvs5P3oIPRxgOVehISLaOlg6IRvnXzq2gCQnK9SfvpYIFCif5ZRWoFSM8hL3fc3rOgWhT0y4kTXsG4syQE6Ls73FwEPXh01IYZOkT-aI1F5Bj85qKWf4JEVaeGKf1edaqAnf0Xoh1YRhP0S6bkzFsYNBe66atpD-4serVVqrZoY",
        // token:
        //   "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ1MTUwMDgsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDFramwzY3g3Z2VxMDF6NjIzNjFjZm0xL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImZhYzM4NzhhLTZjMTctNDQxMC05YjdkLWY2MTc4NWU3MjIyNyIsImp0aSI6ImNsNDJuaW44djQ3ZzMwMXhzM3F0MzcyNjUifQ.0SCLVkWOZlHANCM7uaX3AVC8GnaNV-mGfWBTiaylkDJWSuqDXvst3fC2InLTjLgaQf853st5ErCfUL35JTEaE4GfOqrdc3j7BhSBn1xq6GVn8sDziYpIbNHvBGElCvP2gHxQNxn0PjoJFYUZJMa_B-YZCoN0JJVWR_BJFhfPGefG36ZPRywrnl_7aKUM4nX8Bv7xZhsmVxOOC64i_CdekjoyFHGEkNiIZrJVcOGExxhj-t1bxv3kKJ8hLJtXMVismCpfGoXph9sCnTd6fxsYfOsWyPoeQIck8asKRiX2zEVxkVjPFD6zLyfxUYUvfn7xTAX_c5nwbWec_oDexuK1hTCyG4LV3G_pfd8WRqbiNEoIYcyX7h24FvD6NsimSgoi8oVyTyzS-bml_ddZ2IACPGdMgXZmNNKl7t4cStLjtQIwtosaw2rIn4C8LOp7_gXRj78V7bu0h3dGHszTmnyHXE_UFP3ViXYIHa4LoTRhtm-0GWU2-XUj4BsLir9wq7d8mvrKiM51epFALqmf0pwPLtC0dUqNrJ0a6GIzAiJKBW_oIFZDGNpBZxnP0gO3S6jVPPaJxu2EuMQN3FAc3p2EcUFqrHoIWDaKMfBuKgIxQQE3D3g1GSPmzYTZmQlVtXK3q_hyKDmTl4mDegsPEX1ZM1GXJf61o7dC6zdafbqK9ys"
      },
    },
  ],
}
