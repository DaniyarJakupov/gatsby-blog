import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const LISTING_QEURY = graphql`
  query LISTING_QEURY {
    allMarkdownRemark(
      limit: 7
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QEURY}
    render={data => {
      const { allMarkdownRemark } = data
      return allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
        </article>
      ))
    }}
  />
)

export default Listing
