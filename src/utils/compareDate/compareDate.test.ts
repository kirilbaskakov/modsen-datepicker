import compareDate from './compareDate';

test('compare equal days', () => {
  const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const date2 = new Date(Date.UTC(2012, 11, 20, 6, 7, 8));
  const result = compareDate(date1, date2, 'day');
  expect(result).toBe(0);
});

test('compare different days', () => {
  const date1 = new Date(Date.UTC(2012, 11, 19, 3, 0, 0));
  const date2 = new Date(Date.UTC(2012, 11, 20, 6, 7, 8));
  const result = compareDate(date1, date2, 'day');
  expect(result).toBeLessThan(0);
});

test('compare equal monthes', () => {
  const date1 = new Date(Date.UTC(2012, 11, 25, 3, 0, 0));
  const date2 = new Date(Date.UTC(2012, 11, 20, 6, 7, 8));
  const result = compareDate(date1, date2, 'month');
  expect(result).toBe(0);
});

test('compare different monthes', () => {
  const date1 = new Date(Date.UTC(2013, 10, 19, 3, 0, 0));
  const date2 = new Date(Date.UTC(2012, 11, 20, 6, 7, 8));
  const result = compareDate(date1, date2, 'month');
  expect(result).toBeGreaterThan(0);
});

test('compare equal years', () => {
  const date1 = new Date(Date.UTC(2012, 5, 21, 3, 0, 0));
  const date2 = new Date(Date.UTC(2012, 11, 20, 6, 7, 8));
  const result = compareDate(date1, date2, 'year');
  expect(result).toBe(0);
});

test('compare different years', () => {
  const date1 = new Date(Date.UTC(2011, 11, 25, 3, 0, 0));
  const date2 = new Date(Date.UTC(2012, 9, 20, 6, 7, 8));
  const result = compareDate(date1, date2, 'year');
  expect(result).toBeLessThan(0);
});
