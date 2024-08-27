import React, { useEffect, useState } from 'react';

import ClearButton from '@/components/ClearButton/ClearButton';
import { CalendarProps,CellVariant } from '@/types/DatePicker';

const withPicker = (
  Datepicker: React.ElementType<CalendarProps>,
  onChange?: (date: Date | null) => void,
  value?: Date | null
) => {
  return function WithPicker(props: CalendarProps) {
    const [selectedDate, setSelectedDate] = useState(value);

    useEffect(() => {
      setSelectedDate(value);
    }, [value]);

    const onCellClick = (date: Date) => {
      setSelectedDate(date);
      if (onChange) {
        onChange(date);
      }
    };

    const getCellVariant = (date: Date, variant: CellVariant): CellVariant => {
      if (
        selectedDate &&
        date.toLocaleDateString() === selectedDate.toLocaleDateString()
      ) {
        variant = 'selected';
      }
      if (props.getCellVariant) {
        variant = props.getCellVariant(date, variant);
      }
      return variant;
    };

    const onClear = () => {
      setSelectedDate(null);
      if (onChange) {
        onChange(null);
      }
    };

    return (
      <Datepicker
        {...props}
        onCellClick={onCellClick}
        getCellVariant={getCellVariant}
      >
        {selectedDate && <ClearButton onClick={onClear} />}
        {props.children ?? null}
      </Datepicker>
    );
  };
};

export default withPicker;
