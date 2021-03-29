export default {
  type: 'object',
  name: 'imageCarousel',
  title: 'Image Carousel',
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
      title: 'Trimmable Text',
    },
    {
      name: 'images',
      type: 'array',
      of: [
        {
          title: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }
      ]
    },
    {
      name: 'numberOfImagesInARow',
      type: 'number',
      title: 'Show number of images in a row'
    },
    {
      name: 'imageTitle',
      type: 'string',
      title: 'Image Title',
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
      showHeadingOnTop: 'showHeadingOnTop',
      text: 'trimmablePortableText'
    },
    prepare({ title, showHeadingOnTop, text }) {
      return {
        title,
        subtitle: `Image Carousel section - showHeadingOnTop: ${showHeadingOnTop}, trim text: ${text && text.trimText}`,
      };
    },
  },
};
