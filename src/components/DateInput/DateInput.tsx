import React, { useState } from 'react';

import CalendarIcon from '@/assets/Calendar.svg';
import DeleteIcon from '@/assets/delete.svg';
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

export interface DateInputProps {
  min?: Date | string;
  max?: Date | string;
  range?: boolean;
}

const DateInput = ({
  min = '01.01.100',
  max = '12.31.9999',
  range = false
}: DateInputProps) => {
  const minDate = new Date(min);
  const maxDate = new Date(max);
  const [date, setDate] = useState<string | [string, string]>(
    range ? '' : ['', '']
  );
  const datepickerValue: Date | [Date, Date] = range
    ? [fromDateInput(date[0]), fromDateInput(date[1])]
    : fromDateInput(date as string);
  const [isOpen, setIsOpen] = useState(false);

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

  const onDateChange = (newDate: Date) => {
    if (!range) {
      if (!newDate) {
        return setDate('');
      }
      return setDate(toDateInput(newDate));
    }
    if (!newDate[0]) {
      return setDate(['', '']);
    }
    setDate([toDateInput(newDate[0]), toDateInput(newDate[1])]);
  };

  return (
    <>
      {range ? (
        <>
          <Label>From</Label>
          <InputContainer $isError={!checkDate(date[0])}>
            <Icon src={CalendarIcon} onClick={onClick} />
            <InputStyled
              type="date"
              min={toDateInput(minDate)}
              max={toDateInput(maxDate)}
              value={date[0]}
              onChange={onChange(0)}
            />
            <Icon src={DeleteIcon} onClick={onClear} />
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
          <Overlay onClick={() => setIsOpen(false)} />
          <DatePicker
            onChange={onDateChange}
            value={datepickerValue}
            min={min}
            max={max}
            range={range}
          />
        </>
      )}
    </>
  );
};

export default DateInput;
