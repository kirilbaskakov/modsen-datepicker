import React, { useContext, useMemo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow
} from './styled';
import generateWeekDays from '@/utils/generateWeekDays';
import generateTableData from '@/utils/generateTableData';
import { DatePickerContext } from '@/context/DatePickerProvider';
import cellVariant from '@/utils/cellVariant';

const DateTable = () => {
  const {
    min,
    max,
    selectedDate,
    setSelectedDate,
    onChange,
    range,
    date,
    format,
    weekBegin,
    showDayoffs,
    holidays
  } = useContext(DatePickerContext);
  const minDate = new Date(min);
  const maxDate = new Date(max);
  const [hoveredDate, setHoveredDate] = useState(null);

  const onMouseEnter = (date: Date) => () => setHoveredDate(date);

  const onCellClick = (date: Date) => () => {
    if (range) {
      if (selectedDate[0] && !selectedDate[1]) {
        if (onChange) onChange([selectedDate[0], date]);
        return setSelectedDate([selectedDate[0], date]);
      }
      setSelectedDate([date, null]);
      return;
    }
    setSelectedDate(date);
    if (!range && onChange) {
      onChange(date);
    }
  };

  const onMouseLeave = () => setHoveredDate(null);

  const tableData = useMemo(
    () =>
      generateTableData(date, format, weekBegin, showDayoffs, minDate, maxDate),
    [date, format, weekBegin, showDayoffs, min, max]
  );

  return (
    <Table onMouseLeave={onMouseLeave}>
      {format === 'day' && (
        <TableHeader>
          {generateWeekDays(showDayoffs, weekBegin).map(day => (
            <TableHeaderCell key={day}>{day}</TableHeaderCell>
          ))}
        </TableHeader>
      )}
      <TableBody>
        {tableData.map((week, index) => (
          <TableRow key={index}>
            {week.map(({ date, isDisabled, display }) => (
              <TableCell
                key={display}
                $variant={cellVariant(
                  date,
                  selectedDate,
                  hoveredDate,
                  isDisabled
                )}
                $isHoliday={holidays.find(
                  (holiday: Date) =>
                    holiday.toLocaleDateString([], {
                      month: 'numeric',
                      day: 'numeric'
                    }) ===
                    date.toLocaleDateString([], {
                      month: 'numeric',
                      day: 'numeric'
                    })
                )}
                onClick={onCellClick(date)}
                onMouseEnter={onMouseEnter(date)}
              >
                {display}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DateTable;
