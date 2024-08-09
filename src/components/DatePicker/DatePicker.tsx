import React from 'react';
import { DatePickerStyled } from './styled';

import { Format, WeekBegin } from '@/types/DatePicker';
import DateTable from '../DateTable/DateTable';
import DateHeader from '../DateHeader/DateHeader';
import DatePickerProvider from '@/context/DatePickerProvider';
import ClearButton from '../ClearButton/ClearButton';
import { mockedHolidays } from '@/constants/date';

export interface DatePickerProps {
  onChange?: (date: Date | [Date, Date]) => void;
  format?: Format;
  showDayoffs?: boolean;
  holidays?: Array<Date>;
  weekBegin?: WeekBegin;
  range?: boolean;
  min?: string | Date;
  max?: string | Date;
  showHeader?: boolean;
  children?: React.ReactNode;
}

const DatePicker = ({
  onChange,
  format = 'day',
  weekBegin = 'monday',
  showDayoffs = true,
  holidays = mockedHolidays,
  range = false,
  min = '01.01.100',
  max = '12.31.9999',
  showHeader = true,
  children
}: DatePickerProps) => {
  return (
    <DatePickerStyled>
      <DatePickerProvider
        datepickerProps={{
          onChange,
          format,
          weekBegin,
          showDayoffs,
          holidays,
          range,
          min,
          max,
          showHeader
        }}
      >
        {showHeader && <DateHeader />}
        <DateTable />
        {children}
        <ClearButton />
      </DatePickerProvider>
    </DatePickerStyled>
  );
};

export default DatePicker;
