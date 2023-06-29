const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions


  const breed = path.resolve('./src/templates/breed.tsx')

  const result = await graphql(
    `
      {
        allContentfulBreed(sort: {breedName: ASC}) {
          nodes {
            breedName
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful content`,
      result.errors
    )
    return
  }

  const breeds = result.data.allContentfulBreed.nodes

 

  if (breeds.length > 0) {
    breeds.forEach((singleBreed, index) => {
      const previousBreedSlug = index === 0 ? null : breeds[index - 1].slug
      const nextBreedSlug =
        index === breeds.length - 1 ? null : breeds[index + 1].slug

      createPage({
        path: `/breed/${singleBreed.slug}/`,
        component: breed,
        context: {
          slug: singleBreed.slug,
          previousBreedSlug,
          nextBreedSlug,
        },
      })
    })
  }
}
