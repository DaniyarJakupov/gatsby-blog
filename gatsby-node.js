const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
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
    `).then(({ data: { allMarkdownRemark: { edges } } }) => {
      edges.forEach(({ node: { frontmatter } }) => {
        createPage({
          path: `posts${frontmatter.slug}`,
          component: path.resolve('./src/components/archive.js'),
          context: {
            slug: frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}
