export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eb196651ab417fdc8951350',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kbtj1evn',
                  apiId: 'e14a9fe4-1231-4e70-b891-d76221929966'
                },
                {
                  buildHookId: '5eb196664e4ed15ed192751d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1j166jmr',
                  apiId: '7a3c8859-677a-406a-b5b8-f379c72dc44f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thariniK/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1j166jmr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
