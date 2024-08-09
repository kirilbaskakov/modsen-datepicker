const cellVariant = (
  date: Date,
  selectedDate,
  hoveredDate,
  isDisabled: boolean
) => {
  if (isDisabled) {
    return 'disabled';
  }
  if (!Array.isArray(selectedDate)) {
    if (date.toLocaleDateString() === selectedDate?.toLocaleDateString()) {
      return 'selected';
    }
    return 'primary';
  }
  const first = selectedDate[0];
  if (!first) {
    return 'primary';
  }
  const second = selectedDate[1] ?? hoveredDate;
  if (date.toLocaleDateString() === first.toLocaleDateString()) {
    return first <= second ? 'rangeBegin' : 'rangeEnd';
  }
  if (second && date.toLocaleDateString() === second.toLocaleDateString()) {
    return first < second ? 'rangeEnd' : 'rangeBegin';
  }
  if (
    second &&
    ((date >= first && date <= second) || (date >= second && date <= first))
  ) {
    return 'inRange';
  }
  return 'primary';
};

export default cellVariant;
