import React from 'react';

import DateInput from './DateInput';

export default {
  component: DateInput,
  title: 'Date input',
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'date' }
    },
    max: {
      control: { type: 'date' }
    }
  },
  args: {
    min: '01.01.2023',
    max: '12.01.2025'
  },
  decorators: [
    Story => (
      <div style={{ maxWidth: '250px' }}>
        <Story />
      </div>
    )
  ]
};
export const Default = {
  args: {
    range: false
  }
};

export const Range = {
  args: {
    range: true
  }
};
