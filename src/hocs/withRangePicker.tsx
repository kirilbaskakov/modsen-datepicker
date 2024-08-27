import React, { useEffect, useState } from 'react';

import ClearButton from '@/components/ClearButton/ClearButton';
import { CalendarProps,CellVariant } from '@/types/DatePicker';

const withRangePicker = (
  Datepicker: React.ElementType<CalendarProps>,
  onChange?: (date: [Date, Date] | [null, null]) => void,
  value?: [Date, Date]
) => {
  return function WithPicker(props: CalendarProps) {
    const [selectedDate, setSelectedDate] = useState<
      [Date, Date] | [null, null]
    >(value ?? [null, null]);
    const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

    useEffect(() => {
      setSelectedDate(value ?? [null, null]);
    }, [value]);

    const onCellClick = (date: Date) => {
      if (!selectedDate[0] || selectedDate[1]) {
        setSelectedDate([date, null]);
        return;
      }
      if (!selectedDate[1]) {
        setSelectedDate([selectedDate[0], date]);
        onChange([selectedDate[0], date]);
        return;
      }
    };

    const getCellVariant = (date: Date, variant: CellVariant): CellVariant => {
      const second = selectedDate[1] ?? hoveredDate;
      if (selectedDate[0]) {
        if (
          date.toLocaleDateString() === selectedDate[0].toLocaleDateString()
        ) {
          variant = selectedDate[0] <= second ? 'rangeBegin' : 'rangeEnd';
        } else if (
          second &&
          date.toLocaleDateString() === second.toLocaleDateString()
        ) {
          variant = selectedDate[0] < second ? 'rangeEnd' : 'rangeBegin';
        } else if (
          second &&
          ((date >= selectedDate[0] && date <= second) ||
            (date >= second && date <= selectedDate[0]))
        ) {
          variant = 'inRange';
        }
      }
      if (props.getCellVariant) {
        variant = props.getCellVariant(date, variant);
      }
      return variant;
    };

    const onClear = () => {
      setSelectedDate([null, null]);
      if (onChange) {
        onChange([null, null]);
      }
    };

    const onCellHover = (date: Date | null) => setHoveredDate(date);

    return (
      <Datepicker
        {...props}
        onCellClick={onCellClick}
        onCellHover={onCellHover}
        getCellVariant={getCellVariant}
      >
        {selectedDate[1] && <ClearButton onClick={onClear} />}
        {props.children ?? null}
      </Datepicker>
    );
  };
};

export default withRangePicker;
