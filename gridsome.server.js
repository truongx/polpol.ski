// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const wordsPerMinute = 200

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api/
  })

  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type Post implements Node @infer {
        timeToRead: Int
      }
    `)
  })

  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
      Post: {
        timeToRead: (obj, args, context, info) => {
          return Math.ceil(obj.content.split(' ').length/wordsPerMinute);
        }
      }
    })
  })
}
