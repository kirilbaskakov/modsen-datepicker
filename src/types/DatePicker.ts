export type DateInputProps = Partial<{
  min: Date | string;
  max: Date | string;
  range: boolean;
}>;

export type CalendarProps = Partial<{
  date: Date;
  format: Format;
  showDayoffs: boolean;
  weekBegin: WeekBegin;
  min: string | Date;
  max: string | Date;
  showHeader: boolean;
  children: React.ReactNode;
  onCellClick: (date: Date) => void;
  onCellHover: (date: Date | null) => void;
  onCellDoubleClick: (date: Date) => void;
  getCellVariant: (date: Date, varaint: string) => CellVariant;
}>;

type BaseDatePickerProps = {
  tasks: boolean;
  holidays: Array<[Date, string]> | 'default';
} & CalendarProps;

interface NoneSelectProps extends BaseDatePickerProps {
  select: 'none';
  value: never;
  onChange: never;
}

interface DateSelectProps extends BaseDatePickerProps {
  select: 'date';
  value: Date | null;
  onChange: (value: Date | null) => void;
}

interface RangeSelectProps extends BaseDatePickerProps {
  select: 'range';
  value: [Date, Date] | [null, null];
  onChange: (value: [Date, Date] | [null, null]) => void;
}

export type DatePickerProps = Partial<
  NoneSelectProps | DateSelectProps | RangeSelectProps
>;

export type CellVariant =
  | 'primary'
  | 'disabled'
  | 'selected'
  | 'rangeBegin'
  | 'rangeEnd'
  | 'inRange'
  | 'holiday';

export type WeekBegin = 'monday' | 'sunday';

export type Format = 'day' | 'month' | 'year';
