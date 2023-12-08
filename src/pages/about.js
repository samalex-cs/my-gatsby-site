import * as React from "react"
import { graphql} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = ({data}) => {
    return (
      <Layout pageTitle={data.allContentstackCustompage.nodes[0].title}>
        <p>{data.allContentstackCustompage.nodes[0].textarea}</p>
        <img 
          src={data.allContentstackCustompage.nodes[0].heroimage.url}
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          style={{width:'500px'}}/>
      </Layout>
    )
  }

export const query = graphql`
query {
  allContentstackCustompage(filter: {uid: {eq: "bltaf1a8c47923e1a70"}}) {
    nodes {
      title
      textarea
      heroimage {
        url
      }
    }
  }
}
`

export const Head = () => <Seo title="About" />
export default AboutPage
