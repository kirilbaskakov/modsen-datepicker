import { DatePickerContext } from '@/context/DatePickerProvider';
import React, { useContext } from 'react';
import { Clear } from './styled';

const ClearButton = () => {
  const { setSelectedDate, selectedDate, onChange, range } =
    useContext(DatePickerContext);
  if (!selectedDate || (range && !selectedDate[0])) {
    return null;
  }
  const onClear = () => {
    setSelectedDate(range ? [null, null] : null);
    if (onChange) {
      onChange(range ? [null, null] : null);
    }
  };
  return <Clear onClick={onClear}>Clear</Clear>;
};

export default ClearButton;
