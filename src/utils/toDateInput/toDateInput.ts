const toDateInput = (date: Date): string => {
  const res = date.toLocaleDateString('en-GB').split('/');
  res.reverse();
  return res.join('-');
};

export default toDateInput;
