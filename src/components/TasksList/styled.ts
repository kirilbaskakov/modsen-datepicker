import styled from 'styled-components';

const CONTAINER_HEIGHT = '140px';
const CONTAINER_PADDING = '0 0.5rem';

const BUTTON_BORDER_WIDTH = '2px';
const BUTTON_RADIUS = '5px';
const BUTTON_PADDING = '0.25rem 0.5rem';

export const Container = styled.div`
  height: ${CONTAINER_HEIGHT};
  overflow-y: scroll;
  padding: ${CONTAINER_PADDING};
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: ${props => props.theme.fs.m};
  background-color: ${props => props.theme.colors.bgSecondary};
  border: ${BUTTON_BORDER_WIDTH} solid ${props => props.theme.colors.border};
  border-radius: ${BUTTON_RADIUS};
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  padding: ${BUTTON_PADDING};
`;
