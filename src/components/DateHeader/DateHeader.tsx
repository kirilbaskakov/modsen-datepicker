import React, { useContext, useState } from 'react';

import NextIcon from '@/assets/Next.svg';
import PrevIcon from '@/assets/Prev.svg';
import { DatePickerContext } from '@/context/datePicker';
import { CalendarProps } from '@/types/DatePicker';
import addToDate from '@/utils/addToDate/addToDate';
import displayDate from '@/utils/displayDate/displayDate';

import DatePicker from '../Calendar/Calendar';
import { ArrowIcon, Header, InnerDatepickerContainer, Title } from './styled';

const DateHeader = () => {
  const { format, date, setDate, min, max } = useContext(DatePickerContext);
  const [innerDatepicker, setInnerDatepicker] = useState<{
    isOpen: boolean;
    props: CalendarProps;
  }>({ isOpen: false, props: { format: 'year' } });

  const minDate = new Date(min);
  const maxDate = new Date(max);

  const dateDisplayed = displayDate(date, format);

  const onPrev = () => setDate((date: Date) => addToDate(date, -1, format));

  const onNext = () => setDate((date: Date) => addToDate(date, 1, format));

  const onTitleClick = () =>
    format !== 'year' &&
    setInnerDatepicker(({ isOpen }) => ({
      isOpen: !isOpen,
      props: { format: 'year' }
    }));

  const onInnerClick = (newDate: Date) => {
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
        <ArrowIcon
          src={PrevIcon}
          onClick={onPrev}
          data-testid="icon-prev"
          alt="Previous page"
          title="Previous page"
        />
        <Title onClick={onTitleClick} $isHoverable={format !== 'year'}>
          {dateDisplayed}
        </Title>
        <ArrowIcon
          src={NextIcon}
          onClick={onNext}
          data-testid="icon-next"
          alt="Next page"
          title="Next page"
        />
      </Header>
      {innerDatepicker.isOpen && (
        <InnerDatepickerContainer>
          <DatePicker
            {...innerDatepicker.props}
            min={minDate}
            max={maxDate}
            onCellClick={onInnerClick}
          />
        </InnerDatepickerContainer>
      )}
    </>
  );
};

export default DateHeader;
