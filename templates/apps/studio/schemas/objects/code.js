import React from 'react';

const HTMLpreview = ({ value }) => (
  // eslint-disable-next-line
  <div dangerouslySetInnerHTML={{ __html: value.html }} />
);

export default {
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      options: {
        language: 'html',
      },
    },
  ],
  preview: {
    select: {
      code: 'code',
    },
  },
};
