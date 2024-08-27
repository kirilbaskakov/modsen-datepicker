import styled from 'styled-components';

const CLEAR_PADDING = '0.75rem 0';
const CLEAR_BORDER_WIDTH = '1px';
const CLEAR_RADIUS = '8px';
const CLEAR_TRANSLATE_Y = '101%';

export const Clear = styled.button`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.bgPrimary};
  font-size: ${props => props.theme.fs.s};
  font-weight: ${props => props.theme.fw.semibold};
  padding: ${CLEAR_PADDING};
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(${CLEAR_TRANSLATE_Y});
  border: ${CLEAR_BORDER_WIDTH} solid ${props => props.theme.colors.border};
  border-radius: ${CLEAR_RADIUS};
`;
