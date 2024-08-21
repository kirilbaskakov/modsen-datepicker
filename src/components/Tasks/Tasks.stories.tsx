import React from 'react';

import Tasks from './Tasks';

export default {
  component: Tasks,
  title: 'Tasks',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    )
  ]
};

export const Default = {};
