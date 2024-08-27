import React from 'react';

import { withHolidays, withPicker, withRangePicker,withTasks } from '@/hocs';
import { DatePickerProps } from '@/types/DatePicker';

import Calendar from '../Calendar/Calendar';

const DatePicker = ({
  tasks,
  holidays,
  select,
  value,
  onChange,
  ...props
}: DatePickerProps) => {
  let WrappedCalendar = Calendar;
  if (tasks) {
    WrappedCalendar = withTasks(WrappedCalendar);
  }
  if (holidays) {
    WrappedCalendar = withHolidays(WrappedCalendar, holidays);
  }
  if (select === 'date') {
    WrappedCalendar = withPicker(WrappedCalendar, onChange, value);
  }
  if (select === 'range') {
    WrappedCalendar = withRangePicker(WrappedCalendar, onChange, value);
  }
  return <WrappedCalendar {...props} />;
};

export default DatePicker;
