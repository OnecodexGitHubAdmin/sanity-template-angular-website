export default {
  title: 'SocialMediaToolbar',
  name: 'socialMediaToolbar',
  type: 'object',
  fields: [
    {
      name: 'show',
      type: 'boolean',
      title: 'Show Toolbar',
    },{
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'instagramLink',
      type: 'url',
      title: 'InstagramLink',
    },
    {
      name: 'twitterLink',
      type: 'url',
      title: 'TwitterLink',
    },
    {
      name: 'facebookLink',
      type: 'url',
      title: 'FacebookLink',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
      };
    },
  },
};
