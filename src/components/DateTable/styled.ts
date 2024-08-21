import styled from 'styled-components';

import theme from '@/constants/theme';

const TABLE_PADDING = '0.5rem 0';

const CELL_SIZE = '32px';
const CELL_RADIUS = '8px';
const CELL_BEGIN_RADIUS = '8px 0px 0px 8px';
const CELL_END_RADIUS = '0px 8px 8px 0px';

const TOOLTIP_PADDING = '0.25rem 0.5rem';
const TOOLTIP_RADIUS = '5px';

export const Table = styled.table`
  font-family: sans;
  margin: 0 auto;
  padding: ${TABLE_PADDING};
`;

export const TableHeader = styled.tr`
  font-weight: ${theme.fw.bold};
  font-size: ${theme.fs.m};
`;

export const TableHeaderCell = styled.th`
  width: ${CELL_SIZE};
  height: ${CELL_SIZE};
  background-color: ${theme.colors.bgPrimary};
  text-align: center;
  vertical-align: middle;
`;

const TableCellBase = styled.td`
  cursor: pointer;
  width: ${CELL_SIZE};
  height: ${CELL_SIZE};
  border-radius: ${CELL_RADIUS};
  text-align: center;
  vertical-align: middle;
`;

const TableCellVariants = props => ({
  primary: `
        background-color: ${theme.colors.bgPrimary};
        color: ${props.$isHoliday ? theme.colors.holidayColor : theme.colors.cellPrimaryColor};

        &:hover {
            background: ${theme.colors.bgHoveredCell};
        }
    `,
  disabled: `
    background-color: ${theme.colors.bgPrimary};
    color: ${theme.colors.cellDisabledColor};
  `,
  selected: `
    background-color: ${theme.colors.bgSelectedCell};
    color: ${theme.colors.cellSecondaryColor};
  `,
  rangeBegin: `
    border-radius: ${CELL_BEGIN_RADIUS};
    background: ${theme.colors.bgRangeBeginCell};
    color: ${theme.colors.cellSecondaryColor};
  `,
  rangeEnd: `
    border-radius: ${CELL_END_RADIUS};
    background-color: ${theme.colors.bgSelectedCell};
    color: ${theme.colors.cellSecondaryColor};
  `,
  inRange: `
    color: ${theme.colors.cellInRangeColor};
    background: ${theme.colors.bgInRangeCell};
  `
});

export const Tooltip = styled.div`
  visibility: hidden;
  padding: ${TOOLTIP_PADDING};
  font-size: ${theme.fs.m};
  background-color: ${theme.colors.bgTooltip};
  color: ${theme.colors.tooltipColor};
  border-radius: ${TOOLTIP_RADIUS};
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const TableCell = styled(TableCellBase)<{
  $variant: keyof ReturnType<typeof TableCellVariants>;
  $isHoliday: boolean;
}>`
  ${props => TableCellVariants(props)[props.$variant]}
  position: relative;

  &:hover .${Tooltip.styledComponentId} {
    visibility: visible;
  }
`;

export const TableBody = styled.tbody`
  font-weight: ${theme.fw.semibold};
  font-size: ${theme.fs.m};
`;

export const TableRow = styled.tr``;
