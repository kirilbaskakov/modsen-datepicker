import Tasks from './Tasks';
import React from 'react';

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
