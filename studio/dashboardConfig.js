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
                  buildHookId: '5e1712a0e4390c2aa4fbc010',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-abxu2rrq',
                  apiId: 'ded16026-dda2-4ab3-bbc0-4c0aa3b6b1e3'
                },
                {
                  buildHookId: '5e1712a0d2b9617c5d3a825e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k33dqot1',
                  apiId: '152faf91-b00b-4bbf-b63c-247022517388'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SarahOueslati/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k33dqot1.netlify.com', category: 'apps'}
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
