const isHoliday = (
  date: Date,
  holidays: Array<[Date, string]>
): undefined | [Date, string] =>
  holidays.find(
    ([holidayDate]) =>
      holidayDate.toLocaleDateString([], {
        month: 'numeric',
        day: 'numeric'
      }) ===
      date.toLocaleDateString([], {
        month: 'numeric',
        day: 'numeric'
      })
  );

export default isHoliday;
