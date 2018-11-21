import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Archive = () => (
  <StaticQuery
    query={graphql`
      query BlogArchive {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <aside>
            <h4>Archive</h4>
            {data.allMarkdownRemark.edges.map(post => (
              <ul>
                <li key={post.node.frontmatter.title}>
                  <h3>{post.node.frontmatter.title}</h3>
                </li>
              </ul>
            ))}
          </aside>
        </>
      )
    }}
  />
)

export default Archive
