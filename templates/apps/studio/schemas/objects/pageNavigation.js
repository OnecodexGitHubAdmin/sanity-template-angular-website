export default {
  type: 'object',
  name: 'pageNavigation',
  title: 'Page Navigation',
  fields: [
    {
      name: 'navigationItems',
      type: 'array',
      title: 'Navigation Items',
      of: [
        {
          title: 'Navigation Item',
          type: 'pageNavigationItem',
        },
      ],
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Page Navigation'
      };
    },
  },
};
