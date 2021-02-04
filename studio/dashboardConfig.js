export default {
  widgets: [
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
                  buildHookId: '601c719db85e4800f9a23ef0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bcoegiow',
                  apiId: '5d6ec48e-4759-4add-8d64-6d857e7bb08c'
                },
                {
                  buildHookId: '601c719d6aad3300d0d6ab8e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ri3pd2yf',
                  apiId: 'cddc5a1b-22ea-4032-accf-61cd3d488b79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/psafth/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ri3pd2yf.netlify.app', category: 'apps'}
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
