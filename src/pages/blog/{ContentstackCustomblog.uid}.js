import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const BlogPost = ({ data, children }) => {
  const image = getImage(data.allContentstackCustomblog.nodes[0].heroimage.url)
  const content = data.allContentstackCustomblog.nodes[0].content
  // return 
  return (
    <Layout pageTitle={data.allContentstackCustomblog.nodes[0].title}>
      <p>Posted: {data.allContentstackCustomblog.nodes[0].posteddate}</p>
      <img 
      src={data.allContentstackCustomblog.nodes[0].heroimage.url}
      alt="Should be read from contentstack"
      style={{width:'500px', height:'500px'}}
      />  
    {/* <GatsbyImage
      image={image}
    /> */}
    <div dangerouslySetInnerHTML={ { __html: content}} />
    
    {children}
    </Layout>
  )
}

export const query = graphql`
query($uid: String)  {
  allContentstackCustomblog(filter: {uid: {eq: $uid}}) {
    nodes {
      title
      posteddate(formatString: "MMMM D, YYYY")
      uid
      heroimage {
        url
      }
      content
    }
  }
}
`

export const Head = ({ data }) => <Seo title='blog posts' />

export default BlogPost