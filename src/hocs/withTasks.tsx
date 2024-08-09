import { DatePickerProps } from '../components/DatePicker/DatePicker';
import Tasks from '../components/Tasks/Tasks';
import React, { useState } from 'react';

const withTasks = (Datepicker: React.ElementType) => {
  return function WithTasks(props: DatePickerProps) {
    const [taskDate, setTaskDate] = useState(null);
    const handleChange = (date: Date) => {
      if (!props.range) {
        setTaskDate(date);
      }
      if (props.onChange) props.onChange(date);
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
      <Datepicker {...props} onChange={handleChange}>
        {taskDate && (
          <Tasks
            date={taskDate.toLocaleDateString(
              'en-gb',
              dateOptions[props.format ?? 'day']
            )}
          />
        )}
      </Datepicker>
    );
  };
};

export default withTasks;
