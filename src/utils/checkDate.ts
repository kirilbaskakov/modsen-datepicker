import { Format } from '@/types/DatePicker';

const checkDate = (date: Date, min: Date, max: Date, format: Format) => {
  switch (format) {
    case 'day':
      if (
        (date >= min || date.getMonth() == min.getMonth()) &&
        (date <= max || date.getMonth() == max.getMonth())
      ) {
        return true;
      }
      break;
    case 'month':
      if (
        (date >= min || date.getFullYear() == min.getFullYear()) &&
        (date <= max || date.getFullYear() == max.getFullYear())
      ) {
        return true;
      }
      break;
    case 'year':
      if (
        (date >= min || date.getFullYear() + 11 >= min.getFullYear()) &&
        (date <= max || date.getFullYear() <= max.getFullYear())
      ) {
        return true;
      }
      break;
  }
  return false;
};

export default checkDate;
