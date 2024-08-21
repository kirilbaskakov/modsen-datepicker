import displayDate from './displayDate';

test('display day', () => {
  const date = new Date(Date.UTC(2024, 7, 20, 3, 0, 0));
  const result = displayDate(date, 'day');
  expect(result).toBe('August 2024');
});

test('display month', () => {
  const date = new Date(Date.UTC(2024, 7, 20, 3, 0, 0));
  const result = displayDate(date, 'month');
  expect(result).toBe('2024');
});

test('display year', () => {
  const date = new Date(Date.UTC(2024, 7, 20, 3, 0, 0));
  const result = displayDate(date, 'year');
  expect(result).toBe('2016-2027');
});
