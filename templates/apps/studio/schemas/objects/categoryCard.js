export default {
  type: 'object',
  name: 'categoryCard',
  title: 'Card (image with padding, title and link to category)',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'showHeadingOnTop',
      type: 'boolean',
      title: 'Show Heading On Top',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'trimmablePortableText',
      type: 'trimmablePortableText',
      title: 'Trimmable Text',
    },
    {
      name: 'backgroundImage',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
      ],
    },
    {
      title: 'Link for whole section',
      name: 'sectionLink',
      type: 'string'
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'backgroundImage',
      showHeadingOnTop: 'showHeadingOnTop',
      text: 'trimmablePortableText'
    },
    prepare({ heading, subtitle, media, showHeadingOnTop, text }) {
      return {
        title: `card: ${heading}`,
        subtitle: `${subtitle}, header on top: ${showHeadingOnTop}, trim text: ${text && text.trimText}`,
        media,
      };
    },
  },
};
