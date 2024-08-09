import { DatePickerProps } from '../components/DatePicker/DatePicker';
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

export const DatePickerContext = createContext(null);

const DatePickerProvider = ({
  children,
  datepickerProps
}: {
  children: ReactNode;
  datepickerProps: DatePickerProps;
}) => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<
    Date | null | [null | Date, null | Date]
  >(datepickerProps.range ? [null, null] : null);
  const value = {
    date,
    setDate,
    selectedDate,
    setSelectedDate,
    ...datepickerProps
  };
  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  );
};

export default React.memo(DatePickerProvider);
