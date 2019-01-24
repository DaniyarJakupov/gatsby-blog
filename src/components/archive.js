import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    color: #5e72e4;
    font-size: 0.8rem;
  }
`

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
            <h2>Archive</h2>
            <ArchiveList>
              {edges.map(({ node: { frontmatter } }) => (
                <li key={frontmatter.title}>
                  <Link to={`/posts${frontmatter.slug}`}>
                    <h3>{frontmatter.title}</h3>
                  </Link>
                </li>
              ))}
            </ArchiveList>
          </aside>
        </>
      )
    }}
  />
)

export default Archive
