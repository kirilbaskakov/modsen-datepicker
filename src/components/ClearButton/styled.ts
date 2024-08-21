import styled from 'styled-components';

import theme from '@/constants/theme';

const CLEAR_PADDING = '0.75rem 0';
const CLEAR_BORDER_WIDTH = '1px';
const CLEAR_RADIUS = '8px';
const CLEAR_TRANSLATE_Y = '101%';

export const Clear = styled.button`
  cursor: pointer;
  color: ${theme.colors.primary};
  background-color: ${theme.colors.bgPrimary};
  font-size: ${theme.fs.s};
  font-weight: ${theme.fw.semibold};
  padding: ${CLEAR_PADDING};
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(${CLEAR_TRANSLATE_Y});
  border: ${CLEAR_BORDER_WIDTH} solid ${theme.colors.border};
  border-radius: ${CLEAR_RADIUS};
`;
