import React, { ReactNode, SetStateAction, useEffect, useState } from 'react';
import { createContext } from 'react';

import { CalendarProps } from '@/types/DatePicker';

export const DatePickerContext = createContext<
  CalendarProps & {
    date: Date;
    setDate: React.Dispatch<SetStateAction<Date>>;
  }
>(null);

const DatePickerProvider = ({
  children,
  datepickerProps
}: {
  children: ReactNode;
  datepickerProps: CalendarProps;
}) => {
  const [date, setDate] = useState<Date>(datepickerProps.date);

  useEffect(() => {
    if (datepickerProps.date) setDate(datepickerProps.date);
  }, [datepickerProps.date]);

  const value = {
    ...datepickerProps,
    date,
    setDate
  };

  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  );
};

export default React.memo(DatePickerProvider);
