import styled from 'styled-components';

import theme from '@/constants/theme';

const CONTAINER_GAP = '0.5rem';
const CONTAINER_PADDING = '0.25rem 0';

const CHECKBOX_SIZE = '16px';

const INPUT_PADDING = '0.25rem';
const INPUT_RADIUS = '5px';
const INPUT_OUTLINE_WIDTH = '1px';

const ICON_SIZE = '20px';

export const Container = styled.div`
  display: flex;
  gap: ${CONTAINER_GAP};
  align-items: center;
  padding: ${CONTAINER_PADDING};
  width: 100%;
`;

export const Checkbox = styled.input`
  width: ${CHECKBOX_SIZE};
  height: ${CHECKBOX_SIZE};
`;

export const Input = styled.input`
  font-size: ${theme.fs.m};
  padding: ${INPUT_PADDING};
  border: none;
  border-radius: ${INPUT_RADIUS};
  flex: 1;
  &:focus {
    outline: ${INPUT_OUTLINE_WIDTH} solid ${theme.colors.border};
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
`;
