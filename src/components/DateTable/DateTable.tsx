import React, { useContext, useMemo } from 'react';

import { DatePickerContext } from '@/context/datePicker';
import { CellVariant } from '@/types/DatePicker';
import generateTableData from '@/utils/generateTableData/generateTableData';
import generateWeekDays from '@/utils/generateWeekDays/generateWeekDays';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow
} from './styled';

const DateTable = () => {
  const {
    min,
    max,
    date,
    format,
    weekBegin,
    showDayoffs,
    onCellClick,
    onCellHover,
    onCellDoubleClick,
    getCellVariant
  } = useContext(DatePickerContext);

  const minDate = new Date(min);
  const maxDate = new Date(max);

  const onMouseEnter = (date: Date) => () => onCellHover && onCellHover(date);

  const onDoubleClick = (date: Date) => () => {
    if (onCellDoubleClick) onCellDoubleClick(date);
  };
  const onClick = (date: Date) => () => {
    if (onCellClick) {
      onCellClick(date);
    }
  };

  const onMouseLeave = () => onCellHover && onCellHover(null);

  const tableData = useMemo(
    () =>
      generateTableData(date, format, weekBegin, showDayoffs, minDate, maxDate),
    [date, format, weekBegin, showDayoffs, min, max]
  );

  const renderCell = ({ date, display, isDisabled }) => {
    let variant: CellVariant = isDisabled ? 'disabled' : 'primary';
    if (getCellVariant) {
      variant = getCellVariant(date, variant);
    }
    return (
      <TableCell
        key={display}
        $variant={variant}
        onClick={isDisabled ? null : onClick(date)}
        onDoubleClick={onDoubleClick(date)}
        onMouseEnter={onMouseEnter(date)}
      >
        {display}
      </TableCell>
    );
  };

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
          <TableRow key={index}>{week.map(renderCell)}</TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DateTable;
