import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.25rem 0;
  width: 100%;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

export const Input = styled.input`
  font-size: 13px;
  padding: 0.25rem;
  border: none;
  border-radius: 5px;
  flex: 1;
  width: 50px;
  &:focus {
    outline: 1px solid black;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
