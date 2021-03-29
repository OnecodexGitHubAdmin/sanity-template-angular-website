export default {
  type: 'object',
  name: 'categoryCardGrid',
  title: 'Card Grid',
  fields: [
    {
      name: 'categoryCards',
      type: 'array',
      title: 'Cards',
      of: [
        {
          title: 'Card',
          type: 'categoryCard',
        },
      ],
    },
    {
      name: 'numberOfImagesInARow',
      type: 'number',
      title: 'Show number of cards in a row'
    },
    {
      name: 'numberOfImagesInARowMobile',
      type: 'number',
      title: 'Show number of cards in a row for mobiles'
    },
  ],
  preview: {
    select: {
    },
    prepare({  }) {
      return {
        title: `card grid`
      };
    },
  },
};
