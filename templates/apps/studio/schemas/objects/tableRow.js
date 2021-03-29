export default {
  type: 'object',
  name: 'tableRow',
  title: 'Table Row',
  fields: [    
    {
      name: 'columns',
      type: 'array',
      title: 'Columns',
      of: [
        {
          title: 'Column',
          type: 'tableRowItem',
        },
      ],
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
