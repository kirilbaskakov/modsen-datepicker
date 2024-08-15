import React, { useContext, useState } from 'react';
import DatePicker, { DatePickerProps } from '../DatePicker/DatePicker';
import { ArrowIcon, Header, InnerDatepickerContainer, Title } from './styled';
import addToDate from '@/utils/addToDate';
import displayDate from '@/utils/displayDate';
import NextIcon from '@/assets/Next.svg';
import PrevIcon from '@/assets/Prev.svg';
import { DatePickerContext } from '@/context/DatePickerProvider';

const DateHeader = () => {
  const { format, date, setDate, min, max } = useContext(DatePickerContext);
  const minDate = new Date(min);
  const maxDate = new Date(max);
  const [innerDatepicker, setInnerDatepicker] = useState<{
    isOpen: boolean;
    props: DatePickerProps;
  }>({ isOpen: false, props: { format: 'year' } });

  const dateDisplayed = displayDate(date, format);

  const onPrev = () => setDate(date => addToDate(date, -1, format));

  const onNext = () => setDate(date => addToDate(date, 1, format));

  const onTitleClick = () =>
    format !== 'year' &&
    setInnerDatepicker(({ isOpen }) => ({
      isOpen: !isOpen,
      props: { format: 'year' }
    }));

  const onInnerChange = (newDate: Date) => {
    const dateCopy = new Date(date);
    switch (innerDatepicker.props.format) {
      case 'year':
        dateCopy.setFullYear(newDate.getFullYear());
        if (format === 'month') {
          setInnerDatepicker({
            isOpen: false,
            props: { format: 'year' }
          });
        } else {
          setInnerDatepicker({
            isOpen: true,
            props: { format: 'month', showHeader: false }
          });
        }
        break;
      case 'month':
        dateCopy.setMonth(newDate.getMonth());
        setInnerDatepicker({
          isOpen: false,
          props: { format: 'year' }
        });
        break;
    }
    setDate(dateCopy);
  };

  return (
    <>
      <Header>
        <ArrowIcon src={PrevIcon} onClick={onPrev} />
        <Title onClick={onTitleClick} $isHoverable={format !== 'year'}>
          {dateDisplayed}
        </Title>
        <ArrowIcon src={NextIcon} onClick={onNext} />
      </Header>
      {innerDatepicker.isOpen && (
        <InnerDatepickerContainer>
          <DatePicker
            {...innerDatepicker.props}
            value={date}
            min={minDate}
            max={maxDate}
            onChange={onInnerChange}
          />
        </InnerDatepickerContainer>
      )}
    </>
  );
};

export default DateHeader;
