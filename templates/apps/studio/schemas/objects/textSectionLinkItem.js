export default {
  type: 'object',
  name: 'textSectionLinkItem',
  title: 'Link Item',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'sectionLink',
      type: 'string',
      title: 'Link On Page',
    },
    {
      name: 'websiteLink',
      type: 'string',
      title: 'Link On Website',
    },
    {
      name: 'inlinePrevious',
      type: 'boolean',
      title: 'Set Link Inline To Previous Element',
    },
    {
      name: 'inlineNext',
      type: 'boolean',
      title: 'Set Link Inline To Next Element',
    },
  ],
  preview: {
    select: {
      title: 'text',
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
