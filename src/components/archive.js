import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

const ALL_POSTS_QUERY = graphql`
  query ALL_POSTS_QUERY {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
`

const Archive = () => (
  <StaticQuery
    query={ALL_POSTS_QUERY}
    render={({ allMarkdownRemark: { edges } }) => {
      return (
        <>
          <aside>
            <h4>Archive</h4>
            <ul>
              {edges.map(({ node: { frontmatter } }) => (
                <li key={frontmatter.title}>
                  <Link to={`/posts${frontmatter.slug}`}>
                    <h3>{frontmatter.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </>
      )
    }}
  />
)

export default Archive
