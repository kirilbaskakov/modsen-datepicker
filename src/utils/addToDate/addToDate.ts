import { YEARS_PER_PAGE } from '@/constants/table';
import { Format } from '@/types/DatePicker';

const addToDate = (date: Date, value: number, format: Format) => {
  const dateCopy = new Date(date);
  switch (format) {
    case 'day':
      dateCopy.setMonth(date.getMonth() + value);
      break;
    case 'month':
      dateCopy.setFullYear(dateCopy.getFullYear() + value);
      break;
    case 'year':
      dateCopy.setFullYear(dateCopy.getFullYear() + YEARS_PER_PAGE * value);
      break;
  }
  return dateCopy;
};

export default addToDate;
