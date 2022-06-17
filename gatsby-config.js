module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-ap-south-1.graphcms.com/v2/cl4f79jee1dpe01wbbaxohsha/master",
        // token:
        //   "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTUyOTA0OTIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDRmNzlqZWUxZHBlMDF3YmJheG9oc2hhL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjdiNTFiOWU1LTJkMWUtNDhlNC1iYWVjLTNjMDNkZWVjZmY1MSIsImp0aSI6ImNsNGZoN3k5cTF2cmQwMXh1ZzJiZzNxd3EifQ.sQ_zFKT-JL_OqZSnITi3ZYBcCzPlFcBfNDFPjp4m2VTh8FzYBfU5XsYTgbbAPWVPVjwMgr3deFOlKxh2ptQWARdfoEsJ1KxO_txei56_IFUQVwaDiZFYcmXoPrirXi5yoZS2odHzANWs4ZutAYxCS-TuPKhkU-12AkJWoQZLFUzlS1l7inmje-DN-VAxtJ-G9zbDHLWzenWX0irZtB2rpFCmEQr0UcMmOlL_yjR00WkZ6rBj1okh4w6__BfW9w2Xoe4dZK9X3ocESYY0gr37bSpWHC1YiIokVBQiLMgRH2KP2QirWxydGqUTD4BJOxPfIqNK_XcSqcOBj6gHMm6x0ydINUhzARBHdjNKhsBh-4WDc2ueb9Pd369fjgReaJ175ySpRz7VfTYtHck-LzL8QSJRfte5iTnia9V-CIYrhiHsyrmCWTd0VLFTPZoNoN7FYArFgvOi-yxQxLSPbFcaoTScgHqgofQelHSf6PZ5gaeTEzbxGR-WpdxRevn-tCNEEvs5P3oIPRxgOVehISLaOlg6IRvnXzq2gCQnK9SfvpYIFCif5ZRWoFSM8hL3fc3rOgWhT0y4kTXsG4syQE6Ls73FwEPXh01IYZOkT-aI1F5Bj85qKWf4JEVaeGKf1edaqAnf0Xoh1YRhP0S6bkzFsYNBe66atpD-4serVVqrZoY",
      },
    },
  ],
}
