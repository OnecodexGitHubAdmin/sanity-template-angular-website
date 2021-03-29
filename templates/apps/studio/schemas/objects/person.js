export default {
  type: 'object',
  name: 'person',
  title: 'Person',
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
      name: 'trimmablePortableText',
      type: 'trimmablePortableText',
      title: 'Text',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true,
      },
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
      name: 'sectionLink',
      type: 'string',
      title: 'Link for whole section'
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
      showHeadingOnTop: 'showHeadingOnTop',
      text: 'trimmablePortableText'
    },
    prepare({ title, media, showHeadingOnTop, text }) {
      return {
        title,
        subtitle: `Person section, header on top: ${showHeadingOnTop}, trim text: ${text && text.trimText}`,
        media,
      };
    },
  },
};
