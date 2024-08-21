import { weekDays } from '@/constants/date';
import { WeekBegin } from '@/types/DatePicker';

const generateWeekDays = (
  showDayoffs: boolean,
  weekBegin: WeekBegin
): Array<string> => {
  let week = weekDays;
  if (!showDayoffs) {
    week = week.slice(0, 5);
  }
  if (weekBegin === 'sunday' && showDayoffs) {
    week = [week.at(-1), ...week.slice(0, week.length - 1)];
  }
  return week;
};

export default generateWeekDays;
