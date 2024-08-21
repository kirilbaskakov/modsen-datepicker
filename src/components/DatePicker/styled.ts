import styled from 'styled-components';

import theme from '@/constants/theme';

const BORDER_WIDTH = '1px';
const BORDER_RADIUS = '8px';
const PADDING = '0.5rem';
const MIN_WIDTH = '220px';
const Z_INDEX = 1;

export const DatePickerStyled = styled.div`
  position: absolute;
  background-color: ${theme.colors.bgPrimary};
  border: ${BORDER_WIDTH} solid ${theme.colors.border};
  border-radius: ${BORDER_RADIUS};
  padding: ${PADDING};
  min-width: ${MIN_WIDTH};
  z-index: ${Z_INDEX};
`;
