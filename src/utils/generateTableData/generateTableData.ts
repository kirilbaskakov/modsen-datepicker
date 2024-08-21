import { monthes } from '@/constants/date';
import { MONTHS_ROWS, YEARS_PER_PAGE, YEARS_ROWS } from '@/constants/table';
import { Format, WeekBegin } from '@/types/DatePicker';
import TableCell from '@/types/TableCell';

import compareDate from '../compareDate/compareDate';

const genDayData = (
  date: Date,
  weekBegin: WeekBegin = 'monday',
  showDayoffs = true,
  min: Date,
  max: Date
): TableCell[][] => {
  const dateCopy = new Date(date);
  dateCopy.setDate(1);
  const startDay = weekBegin === 'monday' || !showDayoffs ? 1 : 0;
  do {
    dateCopy.setDate(dateCopy.getDate() - 1);
  } while (dateCopy.getDay() != startDay);
  const result: TableCell[][] = [];
  for (let week = 0; week < 6; week++) {
    const days: TableCell[] = [];
    for (let day = 0; day < (showDayoffs ? 7 : 5); day++) {
      const isDisabled =
        dateCopy.getMonth() != date.getMonth() ||
        compareDate(dateCopy, min, 'day') < 0 ||
        compareDate(dateCopy, max, 'day') > 0;
      days.push({
        date: new Date(dateCopy),
        isDisabled,
        display: String(dateCopy.getDate())
      });
      dateCopy.setDate(dateCopy.getDate() + 1);
    }
    if (!showDayoffs) {
      dateCopy.setDate(dateCopy.getDate() + 2);
    }
    result.push(days);
  }
  return result;
};

const genMonthData = (date: Date, min: Date, max: Date): TableCell[][] => {
  const dateCopy = new Date(date);
  dateCopy.setDate(1);
  dateCopy.setMonth(0);
  const result: TableCell[][] = [];
  let i = 0;
  for (let row = 0; row < MONTHS_ROWS; row++) {
    result.push([]);
    for (let col = 0; col < Math.floor(12 / MONTHS_ROWS); col++) {
      const isDisabled =
        compareDate(dateCopy, min, 'month') < 0 ||
        compareDate(dateCopy, max, 'month') > 0;
      result
        .at(-1)
        .push({ date: new Date(dateCopy), display: monthes[i++], isDisabled });
      dateCopy.setMonth(dateCopy.getMonth() + 1);
    }
  }
  return result;
};

const genYearData = (date: Date, min: Date, max: Date): TableCell[][] => {
  const dateCopy = new Date(date);
  dateCopy.setDate(1);
  dateCopy.setMonth(0);
  while (dateCopy.getFullYear() % YEARS_PER_PAGE != 0) {
    dateCopy.setFullYear(dateCopy.getFullYear() - 1);
  }
  const result: TableCell[][] = [];
  for (let row = 0; row < YEARS_ROWS; row++) {
    result.push([]);
    for (let col = 0; col < Math.floor(YEARS_PER_PAGE / YEARS_ROWS); col++) {
      const isDisabled =
        compareDate(dateCopy, min, 'year') < 0 ||
        compareDate(dateCopy, max, 'year') > 0;
      result.at(-1).push({
        date: new Date(dateCopy),
        display: String(dateCopy.getFullYear()),
        isDisabled
      });
      dateCopy.setFullYear(dateCopy.getFullYear() + 1);
    }
  }
  return result;
};
const generateTableData = (
  date: Date,
  format: Format,
  weekBegin: WeekBegin = 'monday',
  showDayoffs = true,
  min: Date,
  max: Date
): TableCell[][] => {
  switch (format) {
    case 'day':
      return genDayData(date, weekBegin, showDayoffs, min, max);
    case 'month':
      return genMonthData(date, min, max);
    case 'year':
      return genYearData(date, min, max);
  }
  return [];
};

export default generateTableData;
