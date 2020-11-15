// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'polpol.ski',
  siteDescription: 'A co, książkę piszesz?',

  templates: {
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-TLKFFXB',
        enabled: true,
        debug: true,
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        template: './src/templates/Post.vue',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        plugins: [
          '@gridsome/remark-prismjs',
          [
            '@noxify/gridsome-plugin-remark-embed',
            {
              enabledProviders: ['Youtube', 'Twitter'],
            },
          ],
        ],
      },
    },
  ],
};
