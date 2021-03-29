export default {
  type: 'object',
  name: 'personBanner',
  title: 'Side-By-Side Banner',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'SubTitle',
    },
    {
      name: 'showImageFirst',
      type: 'boolean',
      title: 'Show Image First',
    },
    {
      name: 'socialMediaToolbar',
      type: 'socialMediaToolbar',
      title: 'Social Media Toolbar'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          title: 'imageSection',
          type: 'imageSection',
        },
      ],
    },
    {
      name: 'hideImageThumbnails',
      type: 'boolean',
      title: 'Hide Image Thumbnails',
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
      subtitle: 'label',
     // media: 'images.0',
     showImageFirst: 'showImageFirst',
     socialMediaToolbar: 'socialMediaToolbar',
     hideImageThumbnails: 'hideImageThumbnails',
     text: 'trimmablePortableText'
    },
    prepare({ heading, media, hideImageThumbnails, text, socialMediaToolbar, showImageFirst }) {
      return {
        title: `Side-By-Side Banner: ${heading}`,
        subtitle: `showImageFirst: ${showImageFirst}, socialMediaToolbar: ${socialMediaToolbar}, hide thumbnails: ${hideImageThumbnails}, trim text: ${text && text.trimText}`,
       // media,
      };
    },
  },
};
