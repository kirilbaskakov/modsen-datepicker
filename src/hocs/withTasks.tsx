import React, { useState } from 'react';

import { CalendarProps } from '@/types/DatePicker';

import Tasks from '../components/Tasks/Tasks';

const withTasks = (Datepicker: React.ElementType<CalendarProps>) => {
  return function WithTasks(props: CalendarProps) {
    const [taskDate, setTaskDate] = useState(null);

    const onClose = () => setTaskDate(null);

    const onDoubleClick = (date: Date) => {
      setTaskDate(date);
      if (props.onCellDoubleClick) props.onCellDoubleClick(date);
    };

    const dateOptions = {
      day: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      month: {
        year: 'numeric',
        month: 'long'
      },
      year: {
        year: 'numeric'
      }
    };
    return (
      <Datepicker {...props} onCellDoubleClick={onDoubleClick}>
        {taskDate && (
          <Tasks
            onClose={onClose}
            date={taskDate.toLocaleDateString(
              'en-gb',
              dateOptions[props.format ?? 'day']
            )}
          />
        )}
        {props.children ?? null}
      </Datepicker>
    );
  };
};

export default withTasks;
