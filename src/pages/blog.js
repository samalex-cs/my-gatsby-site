import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link, graphql } from 'gatsby'

// const BlogPage = () => {
//     const data = useStaticQuery(graphql`
//     query {
//         allFile {
//           nodes {
//             name
//           }
//         }
//       }
//   `)
//   return (
//     <Layout pageTitle="My Blog Posts">
//       <p>My cool posts will go in here</p>
//     </Layout>
//   )
// }

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blogs">
        {
          data.allContentstackCustomblog.nodes.map((node) => (
            <article key={node.uid}>
              <h2>
              <Link to={`/blog/${node.uid}`}>
                {node.title}
              </Link>
            </h2>
              <p>Posted: {node.posteddate}</p>
            </article>
          ))
        }
      </Layout>
    )
  }

export const query = graphql`
query {
  allContentstackCustomblog {
    nodes {
      title
      posteddate(formatString: "MMMM D, YYYY")
      uid
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage