import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import CalendarIcon from '@/assets/calendar.svg';
import DeleteIcon from '@/assets/delete.svg';
import theme from '@/constants/theme';
import { DateInputProps } from '@/types/DatePicker';
import fromDateInput from '@/utils/fromDateInput/fromDateInput';
import toDateInput from '@/utils/toDateInput/toDateInput';

import DatePicker from '../DatePicker/DatePicker';
import {
  ErrorText,
  Icon,
  InputContainer,
  InputStyled,
  Label,
  Overlay
} from './styled';

const DateInput = ({
  min = '01.01.100',
  max = '12.31.9999',
  range = false
}: DateInputProps) => {
  const [date, setDate] = useState<string | [string, string]>(
    range ? '' : ['', '']
  );
  const [isOpen, setIsOpen] = useState(false);

  const minDate = new Date(min);
  const maxDate = new Date(max);

  const datepickerValue: Date | [Date, Date] = range
    ? [fromDateInput(date[0]), fromDateInput(date[1])]
    : fromDateInput(date as string);

  const checkDate = (date: string): boolean => {
    const d = fromDateInput(date);
    if (!d) return true;
    return minDate <= d && d <= maxDate;
  };

  const onClick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const onClear = () => {
    setDate(range ? ['', ''] : '');
  };

  const onChange = (id: 0 | 1) => e => {
    if (!range) return setDate(e.target.value);
    const newDate = [...date] as [string, string];
    newDate[id] = e.target.value;
    setDate(newDate);
  };

  const onDateChange = (newDate: Date | [Date, Date]) => {
    if (!range) {
      if (!newDate) {
        return setDate('');
      }
      return setDate(toDateInput(newDate as Date));
    }
    if (!newDate[0]) {
      return setDate(['', '']);
    }
    setDate([toDateInput(newDate[0]), toDateInput(newDate[1])]);
  };

  const getDate = () => {
    if (Array.isArray(date)) {
      return fromDateInput(date[0]) ?? new Date();
    }
    return fromDateInput(date) ?? new Date();
  };

  const onOverlayClick = () => setIsOpen(false);

  return (
    <ThemeProvider theme={theme}>
      {range ? (
        <>
          <Label>From</Label>
          <InputContainer $isError={!checkDate(date[0])}>
            <Icon
              src={CalendarIcon}
              onClick={onClick}
              alt="Calendar"
              title="Open calendar"
            />
            <InputStyled
              type="date"
              min={toDateInput(minDate)}
              max={toDateInput(maxDate)}
              value={date[0]}
              onChange={onChange(0)}
            />
            <Icon
              src={DeleteIcon}
              onClick={onClear}
              alt="Clear"
              title="Clear"
            />
          </InputContainer>
          <Label>To</Label>
          <InputContainer $isError={!checkDate(date[1])}>
            <Icon src={CalendarIcon} onClick={onClick} />
            <InputStyled
              type="date"
              min={toDateInput(minDate)}
              max={toDateInput(maxDate)}
              value={date[1]}
              onChange={onChange(1)}
            />
            <Icon src={DeleteIcon} onClick={onClear} />
          </InputContainer>
        </>
      ) : (
        <>
          <Label>Date</Label>
          <InputContainer $isError={!checkDate(date as string)}>
            <Icon src={CalendarIcon} onClick={onClick} />
            <InputStyled
              type="date"
              min={toDateInput(minDate)}
              max={toDateInput(maxDate)}
              value={date}
              onChange={onChange(0)}
            />
            <Icon src={DeleteIcon} onClick={onClear} />
          </InputContainer>
        </>
      )}
      <ErrorText
        $isVisible={
          range
            ? !checkDate(date[0]) || !checkDate(date[1])
            : !checkDate(date as string)
        }
      >
        Date must be between {minDate.toLocaleDateString()} and{' '}
        {maxDate.toLocaleDateString()}
      </ErrorText>
      {isOpen && (
        <>
          <Overlay onClick={onOverlayClick} />
          {range ? (
            <DatePicker
              date={getDate()}
              onChange={
                onDateChange as (date: [Date, Date] | [null, null]) => void
              }
              value={datepickerValue as [Date, Date]}
              min={min}
              max={max}
              select="range"
            />
          ) : (
            <DatePicker
              date={getDate()}
              onChange={onDateChange as (date: Date | null) => void}
              value={datepickerValue as Date}
              min={min}
              max={max}
              select="date"
            />
          )}
        </>
      )}
    </ThemeProvider>
  );
};

export default DateInput;
