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
  // position: relative;

  // &::after {
  //   display: inline-block;
  //   position: absolute;
  //   top: 2px;
  //   right: 1px;
  //   content: '!';
  //   font-size: 8px;
  //   font-weight: 800;
  //   background-color: red;
  //   width: 10px;
  //   height: 10px;
  //   text-align: center;
  //   border-radius: 50%;
  //   color: white;
  // }
`;

const TableCellVariants = {
  primary: `
        background-color: #fff;
        color: #000;   

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
};
export const TableCell = styled(TableCellBase)<{
  $variant: keyof typeof TableCellVariants;
  $isHoliday: boolean;
}>`
  ${props => TableCellVariants[props.$variant]}// color: ${props =>
    props.$isHoliday ? 'red' : '#000'};
`;

export const TableBody = styled.tbody`
  font-weight: 600;
  font-size: 13px;
`;

export const TableRow = styled.tr``;
