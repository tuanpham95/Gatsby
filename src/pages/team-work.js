import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ViewList from "../components/viewList"
function TeamWork({ data }) {
  console.log(data)
  return (
    <Layout>
      <Link to="/">Home</Link>
      <SEO title="TeamWork" />
      {data.serviceJson.data.map((item, index) => {
        return <ViewList key={index} data={item} />
      })}
    </Layout>
  )
}
export default TeamWork
export const query = graphql`
  {
    serviceJson {
      data {
        description
        title
        imgSrc {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
