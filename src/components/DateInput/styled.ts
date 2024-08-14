import styled from 'styled-components';

export const Label = styled.div`
  color: #333;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.75em;
  font-family: sans;
`;

export const InputContainer = styled.div<{ $isError?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  gap: 0.5rem;
  ${props => props.$isError && 'outline: 1px solid red'};
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  font-size: 15px;
  font-family: sans;
  font-weight: 400;
  background-color: #fff;

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
  font-size: 10px;
  font-family: sans;
  color: red;
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
