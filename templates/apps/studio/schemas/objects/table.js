export default {
  type: 'object',
  name: 'table',
  title: 'Table',
  fields: [
    {
      name: 'header',
      type: 'tableRow',
      title: 'Header',
    },
    {
      name: 'rows',
      type: 'array',
      title: 'Rows',
      of: [
        {
          title: 'Row',
          type: 'tableRow',
        },
      ],
    }
  ],
  preview: {
    select: {
    },
    prepare() {
      return {
        title: 'table'
      };
    },
  }
};
