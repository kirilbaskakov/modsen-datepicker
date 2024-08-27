const fromDateInput = (date: string): Date | undefined => {
  if (isNaN(new Date(date).getTime())) return undefined;
  return new Date(date);
};

export default fromDateInput;
