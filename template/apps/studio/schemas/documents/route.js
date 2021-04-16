import { MdLink } from "react-icons/md";

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: MdLink,
  validation: Rule =>
    Rule.custom(
      (fields = {}) =>
        !fields.page || !fields.blog || 'Only one type (page or blog) is allowed'
    ),
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      name: 'blog',
      type: 'reference',
      description: 'Select the blog entry that this route should point to',
      to: [
        {
          type: 'blog',
        },
      ],
    }
  ],
  preview: {
    select: {
      slug: 'slug.current',
      title: 'title',
      pageTitle: 'page.title',
    },
    prepare({ slug, title, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Title: ${title}, Page: ${pageTitle}`,
      };
    },
  },
};
