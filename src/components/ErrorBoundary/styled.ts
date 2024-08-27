import styled from 'styled-components';

export const ErrorText = styled.h3`
  font-family: sans-serif;
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fs.l};
  font-weight: ${props => props.theme.fw.semibold};
`;
