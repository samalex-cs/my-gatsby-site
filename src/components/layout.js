import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    siteTitle,
    navLinkText } from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      allContentstackTitle {
        nodes {
          title
        }
      }
      allContentstackMenu {
        nodes {
          menu {
            url {
              href
              title
            }
          }
        }
      }
    }
  `)
  return (
    <div className={container}>
      <header className={siteTitle}>{data.allContentstackTitle.nodes[0].title}</header>  
      <nav>
        <ul className={navLinks}>
      
        {
          data.allContentstackMenu.nodes[0].menu.map((menu) => (
            <li className={navLinkItem}>
            <Link className={navLinkText} to={menu.url.href}>{menu.url.title}</Link>
          </li>
          ))
        }
        
        </ul>      
      </nav>
      {/* <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
        </li>
        <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">About</Link>
        </li>
        <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">Blog</Link>
        </li>
        </ul>
      </nav> */}
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout