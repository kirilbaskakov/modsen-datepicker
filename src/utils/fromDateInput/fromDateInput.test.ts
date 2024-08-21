import fromDateInput from './fromDateInput';

test('date from date input', () => {
  const date = '2024-12-05';
  const result = fromDateInput(date);
  const expectedDate = new Date(Date.UTC(2024, 11, 5, 3, 0, 0));
  expect(result.toLocaleDateString()).toBe(expectedDate.toLocaleDateString());
});

test('bad date', () => {
  const date = '';
  const result = fromDateInput(date);
  expect(result).toBeUndefined();
});
