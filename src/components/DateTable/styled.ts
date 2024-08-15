import styled from 'styled-components';

export const Table = styled.table`
  font-family: sans;
  margin: 0 auto;
  padding: 0.5rem 0;
`;

export const TableHeader = styled.tr`
  font-weight: 700;
  font-size: 14px;
`;

export const TableHeaderCell = styled.th`
  width: 32px;
  height: 32px;
  background-color: #fff;
  text-align: center;
  vertical-align: middle;
`;

const TableCellBase = styled.td`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  text-align: center;
  vertical-align: middle;
`;

const TableCellVariants = props => ({
  primary: `
        background-color: #fff;
        color: #000;   

        color: ${props.$isHoliday ? 'red' : '#000'};

        &:hover {
            background: #F1F1F1;
        }
    `,
  disabled: `
    background-color: #fff;
    color: #aaa;
  `,
  selected: `
    background-color: #2F80ED;
    color: #fff;
  `,
  rangeBegin: `
    border-radius: 8px 0px 0px 8px;
    background: #2F80ED99;
    color: #fff;
  `,
  rangeEnd: `
    border-radius: 0px 8px 8px 0px;
    background-color: #2F80ED;
    color: #fff;
  `,
  inRange: `
    color: #2F80ED;
    background: #2F80ED1A;
  `
});

export const Tooltip = styled.div`
  visibility: hidden;
  padding: 0.25rem 0.5rem;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 5px;
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
  font-weight: 600;
  font-size: 13px;
`;

export const TableRow = styled.tr``;
