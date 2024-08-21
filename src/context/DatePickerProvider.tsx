import React, { ReactNode, useEffect, useState } from 'react';
import { createContext } from 'react';

import { DatePickerProps } from '../components/DatePicker/DatePicker';

export const DatePickerContext = createContext(null);

const DatePickerProvider = ({
  children,
  datepickerProps
}: {
  children: ReactNode;
  datepickerProps: DatePickerProps;
}) => {
  const [date, setDate] = useState(
    datepickerProps.range
      ? (datepickerProps.value[0] ?? new Date())
      : (datepickerProps.value ?? new Date())
  );
  const [selectedDate, setSelectedDate] = useState<
    Date | null | [null | Date, null | Date]
  >(
    datepickerProps.range
      ? (datepickerProps.value ?? [null, null])
      : datepickerProps.value
  );
  useEffect(() => {
    setDate(
      datepickerProps.range
        ? (datepickerProps.value[0] ?? new Date())
        : (datepickerProps.value ?? new Date())
    );
    setSelectedDate(
      datepickerProps.range
        ? (datepickerProps.value ?? [null, null])
        : datepickerProps.value
    );
  }, [datepickerProps.value]);

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
