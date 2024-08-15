import { DatePickerProps } from '../components/DatePicker/DatePicker';
import Tasks from '../components/Tasks/Tasks';
import React, { useState } from 'react';

const withTasks = (Datepicker: React.ElementType) => {
  return function WithTasks(props: DatePickerProps) {
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
      </Datepicker>
    );
  };
};

export default withTasks;
