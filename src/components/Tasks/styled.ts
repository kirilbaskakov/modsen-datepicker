import styled from 'styled-components';

import theme from '@/constants/theme';

const TASKS_RADIUS = '8px';
const TASKS_PADDING = '0.75rem 0.5rem';
const TASKS_SHADOW = '1px 2px 6px rgba(0, 0, 0, 0.4)';
const TASKS_Z = 101;

const OVERLAY_Z = 100;

const SUBTITLE_LINE_HEIGHT = '1.75em';

const CLOSE_MARGIN_TOP = '0.5rem';
const CLOSE_PADDING = '0.25rem 0.5rem';
const CLOSE_BORDER_WIDTH = '2px';
const CLOSE_RADIUS = '5px';

export const TasksStyled = styled.div`
  font-family: sans;
  background-color: ${theme.colors.bgSecondary};
  border-radius: ${TASKS_RADIUS};
  padding: ${TASKS_PADDING};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${TASKS_SHADOW};
  z-index: ${TASKS_Z};
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: ${theme.colors.overlay};
  z-index: ${OVERLAY_Z};
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: ${theme.fs.xl};
  font-weight: ${theme.fw.bold};
  color: ${theme.colors.primary};
`;

export const Subtitle = styled.h3`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: ${theme.fs.l};
  color: ${theme.colors.secondary};
  font-weight: ${theme.fw.light};
  line-height: ${SUBTITLE_LINE_HEIGHT};
`;

export const Close = styled.button`
  display: block;
  cursor: pointer;
  margin: 0 auto;
  margin-top: ${CLOSE_MARGIN_TOP};
  font-size: ${theme.fs.m};
  padding: ${CLOSE_PADDING};
  border: ${CLOSE_BORDER_WIDTH} solid ${theme.colors.border};
  border-radius: ${CLOSE_RADIUS};
`;
