import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/constants/theme';
import DatePickerProvider from '@/context/datePicker';
import { CalendarProps } from '@/types/DatePicker';

import DateHeader from '../DateHeader/DateHeader';
import DateTable from '../DateTable/DateTable';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { CalendarStyled } from './styled';

const Calendar = ({
  date = new Date(),
  format = 'day',
  weekBegin = 'monday',
  showDayoffs = true,
  min = '01.01.100',
  max = '12.31.9999',
  showHeader = true,
  onCellClick,
  onCellHover,
  onCellDoubleClick,
  getCellVariant,
  children
}: CalendarProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CalendarStyled>
        <ErrorBoundary>
          <DatePickerProvider
            datepickerProps={{
              date,
              format,
              weekBegin,
              showDayoffs,
              min,
              max,
              showHeader,
              onCellClick,
              onCellHover,
              onCellDoubleClick,
              getCellVariant
            }}
          >
            {showHeader && <DateHeader />}
            <DateTable />
            {children}
          </DatePickerProvider>
        </ErrorBoundary>
      </CalendarStyled>
    </ThemeProvider>
  );
};

export default Calendar;
