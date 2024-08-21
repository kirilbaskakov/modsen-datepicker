import { MONTHS_ROWS, YEARS_PER_PAGE,YEARS_ROWS } from '@/constants/table';

import generateTableData from './generateTableData';

test('generate days format', () => {
  const date = new Date(Date.UTC(2024, 7, 20, 3, 0, 0));
  const min = new Date(Date.UTC(2019, 7, 20, 3, 0, 0));
  const max = new Date(Date.UTC(2026, 7, 20, 3, 0, 0));
  const data = generateTableData(date, 'day', 'monday', true, min, max);
  expect(data).toHaveLength(6);
  const beginData = new Date(Date.UTC(2024, 6, 29, 3, 0, 0));
  data.forEach(row => {
    expect(row).toHaveLength(7);
    row.forEach(item => {
      expect(item).toEqual(
        expect.objectContaining({
          date: expect.any(Date),
          isDisabled: expect.any(Boolean),
          display: expect.any(String)
        })
      );
      expect(item.date.toLocaleDateString()).toBe(
        beginData.toLocaleDateString()
      );
      expect(item.isDisabled).toBe(beginData.getMonth() !== 7);
      beginData.setDate(beginData.getDate() + 1);
    });
  });
});

test('generate month format', () => {
  const date = new Date(Date.UTC(2024, 7, 20, 3, 0, 0));
  const min = new Date(Date.UTC(2019, 7, 20, 3, 0, 0));
  const max = new Date(Date.UTC(2026, 7, 20, 3, 0, 0));
  const data = generateTableData(date, 'month', 'monday', true, min, max);
  expect(data).toHaveLength(MONTHS_ROWS);
  data.forEach((row, rowIndex) => {
    expect(row).toHaveLength(Math.floor(12 / MONTHS_ROWS));
    row.forEach((item, index) => {
      expect(item).toEqual(
        expect.objectContaining({
          date: expect.any(Date),
          isDisabled: expect.any(Boolean),
          display: expect.any(String)
        })
      );
      const monthIndex = rowIndex * Math.floor(12 / MONTHS_ROWS) + index;
      expect(item.date.getMonth()).toBe(monthIndex);
      expect(item.date.getFullYear()).toBe(2024);
    });
  });
});

test('generate year format', () => {
  const date = new Date(Date.UTC(2024, 7, 20, 3, 0, 0));
  const min = new Date(Date.UTC(2019, 7, 20, 3, 0, 0));
  const max = new Date(Date.UTC(2026, 7, 20, 3, 0, 0));
  const data = generateTableData(date, 'year', 'monday', true, min, max);
  expect(data).toHaveLength(YEARS_ROWS);
  let startYear = 2024 - (2024 % YEARS_PER_PAGE);
  data.forEach(row => {
    expect(row).toHaveLength(Math.floor(YEARS_PER_PAGE / MONTHS_ROWS));
    row.forEach(item => {
      expect(item).toEqual(
        expect.objectContaining({
          date: expect.any(Date),
          isDisabled: expect.any(Boolean),
          display: expect.any(String)
        })
      );
      expect(item.date.getFullYear()).toBe(startYear++);
    });
  });
});
