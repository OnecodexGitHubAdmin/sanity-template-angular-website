export default {
  title: 'Customer Feedback Section',
  name: 'customerFeedback',
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
    prepare({ heading }) {
      return {
        title: `Customer Feedback Section`,
        subtitle: `${heading}`
      };
    }
  },
};
