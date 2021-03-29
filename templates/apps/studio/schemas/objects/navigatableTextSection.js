export default {
  type: 'object',
  name: 'navigatableTextSection',
  title: 'Navigatable Text Section (title, subtitle, text)',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'id',
      type: 'string',
      title: 'Navigatable Id For Section',
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
      name: 'trimmablePortableText',
      type: 'trimmablePortableText',
      title: 'Trimmable Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      label: 'label',
      alignment: 'headingHAlignment',
      id: 'id',
      text: 'trimmablePortableText'
    },
    prepare({ heading, label, alignment, id, text }) {
      return {
        title: `${heading}`,
        subtitle: `${label} - align: ${alignment} - id: ${id} - trim text: ${text && text.trimText}`
      };
    },
  },
};
