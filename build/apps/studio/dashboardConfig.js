export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'OneCodexGitHubAdmin/sanity-template-angular-website'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        // __experimental_before: [
        //   {
        //     name: 'netlify',
        //     options: {
        //       description:
        //         'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
        //       sites: [
        //         {
        //           buildHookId: '5f889239cf90b11013b552c5',
        //           title: 'Sanity Studio',
        //           name: 'bymaria-sanity-nextjs-landing-pages-studio',
        //           apiId: '77125b28-46f0-49e8-a955-8db8b6885d9c'
        //         },
        //         {
        //           buildHookId: '5f8892390a7a000fe527100b',
        //           title: 'Landing pages Website',
        //           name: 'bymaria-sanity-nextjs-landing-pages',
        //           apiId: '11627919-f573-4f36-8df1-80f2222d646a'
        //         }
        //       ]
        //     }
        //   }
        // ],
        // data: [
        //   {
        //     title: 'GitHub repo',
        //     value: 'https://github.com/OnecodexGitHubAdmin/ByMaria-sanity-nextjs-landing-pages',
        //     category: 'Code'
        //   },
        //   {title: 'Frontend', value: 'https://bymaria-sanity-nextjs-landing-pages.netlify.app', category: 'apps'}
        // ]
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
