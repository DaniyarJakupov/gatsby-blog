import React from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'

const postLayout = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <h2>{markdownRemark.frontmatter.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`

export default postLayout
