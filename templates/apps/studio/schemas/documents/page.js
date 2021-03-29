export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'identifier',
      type: 'string',
      title: 'Query Identifier',
    },
    {
      name: 'language',
      type: 'string',
      title: 'language',
      options: {
        list: [
          {title: 'de', value: 'de'},
          {title: 'en', value: 'en'},
        ],
        layout: 'dropdown'
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'person' },
        { type: 'personBanner' },
        { type: 'categoryCard' },
        { type: 'categoryCardGrid' },
        { type: 'imageSection' },
        { type: 'imageCarousel' },
        { type: 'mailchimp' },
        { type: 'textSection' },
        { type: 'socialMediaToolbar' },
        { type: 'divider' },
        { type: 'customerFeedback' },
        { type: 'instagramSection' },
        { type: 'pageNavigation' },
        { type: 'pageNavigationItem' },
        { type: 'navigatableTextSection' },
        { type: 'trimmablePortableText' },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],

  preview: {
    select: {
      title: 'title',
      language: 'language',
      identifier: 'identifier',
      media: 'openGraphImage',
    },
    prepare: ({title, language, identifier, media}) => {
      return {
        title,
        subtitle: `${language} - ${identifier}`,
        media
      };
    }
  },
};
