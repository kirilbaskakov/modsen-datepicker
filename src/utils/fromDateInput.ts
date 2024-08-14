const fromDateInput = (date: string): Date => {
  if (isNaN(new Date(date).getTime())) return undefined;
  return new Date(date);
};

export default fromDateInput;
