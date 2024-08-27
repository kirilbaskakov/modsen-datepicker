import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/constants/theme';

import Tasks from './Tasks';

export default {
  component: Tasks,
  title: 'Tasks',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ maxWidth: '300px' }}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </div>
    )
  ]
};

export const Default = {};
