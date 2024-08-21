import toDateInput from './toDateInput';

test('date to date input', () => {
  const date = new Date('2024-12-05');
  const result = toDateInput(date);
  const expectedDate = '2024-12-05';
  expect(result).toBe(expectedDate);
});
