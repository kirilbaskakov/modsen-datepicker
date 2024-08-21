import { Format } from '@/types/DatePicker';

const compareDate = (date1: Date, date2: Date, format: Format) => {
  const dateCopy1 = new Date(date1);
  const dateCopy2 = new Date(date2);
  dateCopy1.setHours(0, 0, 0, 0);
  dateCopy2.setHours(0, 0, 0, 0);
  if (format !== 'day') {
    dateCopy1.setDate(1);
    dateCopy2.setDate(1);
  }
  if (format === 'year') {
    dateCopy1.setMonth(0);
    dateCopy2.setMonth(0);
  }
  return dateCopy1.getTime() - dateCopy2.getTime();
};

export default compareDate;
