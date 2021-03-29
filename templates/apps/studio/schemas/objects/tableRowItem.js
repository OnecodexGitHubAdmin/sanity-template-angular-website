export default {
  type: 'object',
  name: 'tableRowItem',
  title: 'Table Row Item',
  fields: [    
    {
      name: 'tagline',
      type: 'portableText',
      title: 'Portable Text Item',
    }
  ],
  preview: {
    select: {
    },
    prepare() {
      return {
        title: 'Table Row'
      };
    },
  }
};
