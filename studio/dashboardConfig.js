export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8663701349bd803d5b998f',
                  title: 'Sanity Studio',
                  name: 'mssnci-blog-studio',
                  apiId: '83838121-1381-4ef4-a29e-e9765b20fce1'
                },
                {
                  buildHookId: '5e866370f584586297be1c7c',
                  title: 'Blog Website',
                  name: 'mssnci-blog',
                  apiId: 'bd9baf54-b9d1-4bd7-824c-33ee77c8eb87'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jattoabdul/mssnci-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mssnci-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
