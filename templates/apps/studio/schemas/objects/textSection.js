export default {
  type: 'object',
  name: 'textSection',
  title: 'Text Section (title, subtitle, text)',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'headingHAlignment',
      type: 'string',
      title: 'Horizontal Alignment of the Heading and CTAs',
      options: {
        list: [
          {title: 'left', value: 'left'},
          {title: 'right', value: 'right'},
          {title: 'center', value: 'center'},
        ],
        layout: 'dropdown'
      }
    },
    {
      name: 'tagline',
      type: 'portableText',
      title: 'Text',
    },
    {
      name: 'text',
      type: 'trimmablePortableText',
      title: 'Trimmable Portable Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      label: 'label',
      alignment: 'headingHAlignment'
    },
    prepare({ heading, label, alignment }) {
      return {
        title: `${heading}`,
        subtitle: `${label} - ${alignment}`
      };
    },
  },
};
