import addToDate from './addToDate';

test('date not changed', () => {
  const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  addToDate(date, 2, 'day');
  const expectedDate = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  expect(date.toLocaleDateString()).toBe(expectedDate.toLocaleDateString());
});

test('add days', () => {
  const date = new Date(Date.UTC(2012, 9, 20, 3, 0, 0));
  const newDate = addToDate(date, 2, 'day');
  const expectedDate = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  expect(newDate.toLocaleDateString()).toBe(expectedDate.toLocaleDateString());
});

test('add monthes', () => {
  const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const newDate = addToDate(date, 2, 'month');
  const expectedDate = new Date(Date.UTC(2014, 11, 20, 3, 0, 0));
  expect(newDate.toLocaleDateString()).toBe(expectedDate.toLocaleDateString());
});

test('add years', () => {
  const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const newDate = addToDate(date, 1, 'year');
  const expectedDate = new Date(Date.UTC(2024, 11, 20, 3, 0, 0));
  expect(newDate.getFullYear()).toBe(expectedDate.getFullYear());
});
