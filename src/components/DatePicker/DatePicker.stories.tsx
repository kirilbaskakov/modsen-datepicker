import withTasks from '@/hocs/withTasks';
import DatePicker from './DatePicker';

export default {
  component: withTasks(DatePicker),
  title: 'Datepicker',
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'date' }
    },
    max: {
      control: { type: 'date' }
    },
    weekBegin: {
      options: ['monday', 'sunday'],
      control: { type: 'radio' }
    }
  },
  args: {
    min: '01.01.2023',
    max: '12.01.2025',
    range: false,
    showDayoffs: true,
    weekBegin: 'monday'
  }
};

export const Default = {
  args: {
    format: 'day'
  }
};

export const Monthes = {
  args: {
    format: 'month'
  }
};

export const Years = {
  args: {
    format: 'year'
  }
};
