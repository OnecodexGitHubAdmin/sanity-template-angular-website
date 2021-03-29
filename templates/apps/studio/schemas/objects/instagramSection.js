export default {
  title: 'Instagram Section',
  name: 'instagramSection',
  type: 'object',
  fields:[
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'show',
      type: 'boolean',
      title: 'Show',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare(heading) {
      return {
        title: `Instagram Section`,
        subtitle: `${heading}`
      };
    },
  },
};
