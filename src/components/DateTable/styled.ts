import styled from 'styled-components';

import { CellVariant } from '@/types/DatePicker';

const TABLE_PADDING = '0.5rem 0';

const CELL_SIZE = '32px';
const CELL_RADIUS = '8px';
const CELL_BEGIN_RADIUS = '8px 0px 0px 8px';
const CELL_END_RADIUS = '0px 8px 8px 0px';

export const Table = styled.table`
  font-family: sans;
  margin: 0 auto;
  padding: ${TABLE_PADDING};
`;

export const TableHeader = styled.tr`
  font-weight: ${props => props.theme.fw.bold};
  font-size: ${props => props.theme.fs.m};
`;

export const TableHeaderCell = styled.th`
  width: ${CELL_SIZE};
  height: ${CELL_SIZE};
  background-color: ${props => props.theme.colors.bgPrimary};
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
    background-color: ${props.theme.colors.bgPrimary};
    color: ${props.theme.colors.cellPrimaryColor};

    &:hover {
        background: ${props.theme.colors.bgHoveredCell};
    }
  `,
  holiday: `
    background-color: ${props.theme.colors.bgPrimary};
    color: ${props.theme.colors.holidayColor};

    &:hover {
        background: ${props.theme.colors.bgHoveredCell};
    }
  `,
  disabled: `
    background-color: ${props.theme.colors.bgPrimary};
    color: ${props.theme.colors.cellDisabledColor};
  `,
  selected: `
    background-color: ${props.theme.colors.bgSelectedCell};
    color: ${props.theme.colors.cellSecondaryColor};
  `,
  rangeBegin: `
    border-radius: ${CELL_BEGIN_RADIUS};
    background: ${props.theme.colors.bgRangeBeginCell};
    color: ${props.theme.colors.cellSecondaryColor};
  `,
  rangeEnd: `
    border-radius: ${CELL_END_RADIUS};
    background-color: ${props.theme.colors.bgSelectedCell};
    color: ${props.theme.colors.cellSecondaryColor};
  `,
  inRange: `
    color: ${props.theme.colors.cellInRangeColor};
    background: ${props.theme.colors.bgInRangeCell};
  `
});

export const TableCell = styled(TableCellBase)<{
  $variant: CellVariant;
}>`
  ${props => TableCellVariants(props)[props.$variant]}
  position: relative;
`;

export const TableBody = styled.tbody`
  font-weight: ${props => props.theme.fw.semibold};
  font-size: ${props => props.theme.fs.m};
`;

export const TableRow = styled.tr``;
