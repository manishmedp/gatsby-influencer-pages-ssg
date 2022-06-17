import { graphql } from "gatsby"
import React from "react"
export default function IndexPage(props) {
  console.log("influencers", props?.data?.influencers?.nodes)
  return <>Hello SSG Influencers</>
}

export const pageQuery = graphql`
  query MyQuery {
    influencers: allGraphCmsInfluencer {
      nodes {
        id
        name
        active
        channels
        instaclinikUrl
        location
        image {
          id
          url
        }
      }
    }
  }
`
