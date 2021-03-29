export default {
  type: 'object',
  name: 'hero',
  title: 'Banner',
  fields: [
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
      name: 'headingVAlignment',
      type: 'string',
      title: 'Vertical Alignment of the Heading and CTAs',
      options: {
        list: [
          {title: 'top', value: 'top'},
          {title: 'bottom', value: 'bottom'},
          {title: 'center', value: 'center'},
        ],
        layout: 'dropdown'
      }
    },
    {
      name: 'tagline',
      type: 'portableText',
      title: 'Tagline',
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
      title: 'Call to actions (CTAs)',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Banner section',
        media,
      };
    },
  },
};
