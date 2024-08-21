import { weekDays } from '@/constants/date';

import generateWeekDays from './generateWeekDays';

test('base variant', () => {
  const result = generateWeekDays(true, 'monday');
  expect(result).toEqual(weekDays);
});

test('not show dayoffs', () => {
  const result = generateWeekDays(false, 'monday');
  expect(result).toEqual(weekDays.slice(0, 5));
});

test('sunday week begin', () => {
  const result = generateWeekDays(true, 'sunday');
  expect(result).toEqual([weekDays.at(-1), ...weekDays.slice(0, 6)]);
});

test('sunday week begin and not show dayoffs', () => {
  const result = generateWeekDays(false, 'sunday');
  expect(result).toEqual(weekDays.slice(0, 5));
});
