export default {
  type: 'object',
  name: 'trimmablePortableText',
  title: 'Trimmable Portable Text',
  fields: [
    {
      name: 'text',
      type: 'portableText',
      title: 'Text',
    },
    {
      name: 'trimText',
      type: 'boolean',
      title: 'Trim Text in Mobile View',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Trimmable Portable Text'
      };
    },
  },
};
