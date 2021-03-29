export default {
  type: 'object',
  name: 'pageNavigationItem',
  title: 'Navigation Item',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'sectionLink',
      type: 'string',
      title: 'Link',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      link: 'sectionLink',
    },
    prepare({ title, link }) {
      return {
        title,
        subtitle: link
      };
    },
  }
};
