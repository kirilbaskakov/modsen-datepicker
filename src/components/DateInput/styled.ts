import styled from 'styled-components';

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 0.35rem;
  font-size: 13px;
  font-family: sans;
  background-color: #eee;
  border: none;
  border-radius: 8px;

  &:focus {
    outline: 1px solid #aaa;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
