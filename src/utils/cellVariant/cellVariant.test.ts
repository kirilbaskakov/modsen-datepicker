import cellVariant from './cellVariant';

test('primary', () => {
  const date = new Date('2023-12-05');
  const result = cellVariant(date, new Date(), new Date(), false);
  expect(result).toBe('primary');
});

test('primary when range', () => {
  const date = new Date('2023-12-05');
  const result = cellVariant(
    date,
    [new Date(), new Date()] as [Date, Date],
    new Date(),
    false
  );
  expect(result).toBe('primary');
});

test('selected', () => {
  const date = new Date('2023-12-05');
  const selectedDate = new Date('2023-12-05');
  const result = cellVariant(date, selectedDate, new Date(), false);
  expect(result).toBe('selected');
});

test('disabled', () => {
  const date = new Date('2023-12-05');
  const result = cellVariant(date, new Date(), new Date(), true);
  expect(result).toBe('disabled');
});

test('range begin', () => {
  const date = new Date('2023-12-05');
  const selectedDate: [Date, Date] = [
    new Date('2023-12-05'),
    new Date('2023-12-08')
  ];
  const result = cellVariant(date, selectedDate, new Date(), false);
  expect(result).toBe('rangeBegin');
});

test('range end', () => {
  const date = new Date('2023-12-08');
  const selectedDate: [Date, Date] = [
    new Date('2023-12-05'),
    new Date('2023-12-08')
  ];
  const result = cellVariant(date, selectedDate, new Date(), false);
  expect(result).toBe('rangeEnd');
});

test('in range', () => {
  const date = new Date('2023-12-06');
  const selectedDate: [Date, Date] = [
    new Date('2023-12-05'),
    new Date('2023-12-08')
  ];
  const result = cellVariant(date, selectedDate, new Date(), false);
  expect(result).toBe('inRange');
});
