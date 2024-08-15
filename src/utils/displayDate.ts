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
  const startYear = date.getFullYear() - (date.getFullYear() % 12);
  return `${startYear}-${startYear + 11}`;
};

export default displayDate;
