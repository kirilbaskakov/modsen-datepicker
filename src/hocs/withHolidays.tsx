import React from 'react';

import { mockedHolidays } from '@/constants/date';
import { CalendarProps,CellVariant } from '@/types/DatePicker';
import isHoliday from '@/utils/isHoliday/isHoliday';

const withHolidays = (
  Datepicker: React.ElementType<CalendarProps>,
  holidays: Array<[Date, string]> | 'default'
) => {
  return function WithHolidays(props: CalendarProps) {
    const getCellVariant = (date: Date, variant: CellVariant): CellVariant => {
      if (
        variant == 'primary' &&
        isHoliday(date, holidays === 'default' ? mockedHolidays : holidays)
      ) {
        variant = 'holiday';
      }
      if (props.getCellVariant) {
        variant = getCellVariant(date, variant);
      }
      return variant;
    };

    return <Datepicker {...props} getCellVariant={getCellVariant} />;
  };
};

export default withHolidays;
