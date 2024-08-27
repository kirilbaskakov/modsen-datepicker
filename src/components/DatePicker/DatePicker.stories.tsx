import DatePicker from './DatePicker';

export default {
  component: DatePicker,
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
    format: 'day',
    min: '01.01.2023',
    max: '12.01.2025',
    showDayoffs: true,
    weekBegin: 'monday'
  }
};

export const Default = {};

export const WithTasks = {
  args: {
    tasks: true
  }
};

export const WithPicker = {
  args: {
    select: 'date'
  }
};

export const WithRangePicker = {
  args: {
    select: 'range'
  }
};

export const WithHolidays = {
  args: {
    holidays: 'default'
  }
};
