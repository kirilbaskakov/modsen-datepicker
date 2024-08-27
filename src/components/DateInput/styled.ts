import styled from 'styled-components';

const LABEL_LINE_HEIGHT = '1.75rem';

const INPUT_BORDER_WIDTH = '1px';
const INPUT_RADIUS = '8px';
const INPUT_PADDING = '0.5rem 0.75rem';
const INPUT_GAP = '0.5rem';
const INPUT_OUTLINE_WIDTH = '1px';

const ICON_SIZE = '16px';

export const Label = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fs.l};
  font-weight: ${props => props.theme.fw.semibold};
  line-height: ${LABEL_LINE_HEIGHT};
  font-family: sans;
`;

export const InputContainer = styled.div<{ $isError?: boolean }>`
  display: flex;
  align-items: center;
  border: ${INPUT_BORDER_WIDTH} solid ${props => props.theme.colors.border};
  border-radius: ${INPUT_RADIUS};
  padding: ${INPUT_PADDING};
  gap: ${INPUT_GAP};
  ${props =>
    props.$isError &&
    `outline: ${INPUT_OUTLINE_WIDTH} solid ${props => props.theme.colors.error}`};
`;

export const Icon = styled.img`
  cursor: pointer;
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  font-size: ${props => props.theme.fs.l};
  font-family: sans;
  font-weight: ${props => props.theme.fw.light};
  background-color: ${props => props.theme.colors.bgPrimary};

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export const ErrorText = styled.p<{ $isVisible: boolean }>`
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.fs.xs};
  font-family: sans;
  color: ${props => props.theme.colors.error};
  visibility: ${props => (props.$isVisible ? 'visible' : 'hidden')};
`;

export const Overlay = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const DatepickerContainer = styled.div``;
