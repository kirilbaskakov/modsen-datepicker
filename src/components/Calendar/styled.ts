import styled from 'styled-components';

const BORDER_WIDTH = '1px';
const BORDER_RADIUS = '8px';
const PADDING = '0.5rem';
const MIN_WIDTH = '220px';
const Z_INDEX = 1;

export const CalendarStyled = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.bgPrimary};
  border: ${BORDER_WIDTH} solid ${props => props.theme.colors.border};
  border-radius: ${BORDER_RADIUS};
  padding: ${PADDING};
  min-width: ${MIN_WIDTH};
  z-index: ${Z_INDEX};
`;
