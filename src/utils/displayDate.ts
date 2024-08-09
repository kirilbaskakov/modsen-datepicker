import { Format } from '@/types/DatePicker';

const displayDate = (date: Date, format: Format): string => {
  if (format === 'day') {
    return (
      date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getFullYear()
    );
  }
  if (format === 'month') {
    return String(date.getFullYear());
  }
  return `${date.getFullYear()}-${date.getFullYear() + 11}`;
};

export default displayDate;
