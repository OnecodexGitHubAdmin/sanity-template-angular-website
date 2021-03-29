import { MdMenu } from "react-icons/md";

export default {
  name: 'subNavigationItem',
  type: 'object',
  title: 'Sub Navigation Item',
  icon: MdMenu,
  fields: [
    {
      name: 'titleDe',
      type: 'string',
      title: 'titleDe',
    },
    {
      name: 'titleEn',
      type: 'string',
      title: 'titleEn',
    },
    {
      name: 'link',
      type: 'string',
      title: 'link',
    },
    {
      name: 'subNavigationItems',
      type: 'array',
      title: 'Sub Menu Items',
      of: [
        {
          title: 'Sub Navigation Item',
          type: 'subNavigationItem',
        },
      ],
    }    
  ],
  preview: {
    select: {
      titleDe: 'titleDe',
      titleEn: 'titleEn',
      link: 'link',
    },
    prepare({ titleDe, titleEn, link }) {
      return {
        title:  `Sub Navigation Item: ${titleDe}`,
        subtitle: `${link} - de: ${titleDe}, en: ${titleEn}`
      };
    },
  },
};
