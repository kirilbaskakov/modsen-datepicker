import isHoliday from './isHoliday';

const holidays: Array<[Date, string]> = [
  [new Date(Date.UTC(2024, 3, 12)), 'a'],
  [new Date(Date.UTC(2024, 3, 14)), 'b'],
  [new Date(Date.UTC(2024, 1, 22)), 'c']
];

test('not holiday', () => {
  const date = new Date(Date.UTC(2024, 3, 13));
  const result = isHoliday(date, holidays);
  expect(result).toBeUndefined();
});

test('is holiday', () => {
  const date = new Date(Date.UTC(2023, 3, 12));
  const result = isHoliday(date, holidays);
  expect(result).toEqual(holidays[0]);
});
