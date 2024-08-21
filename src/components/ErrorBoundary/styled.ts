import styled from 'styled-components';

import theme from '@/constants/theme';

export const ErrorText = styled.h3`
  font-family: sans-serif;
  color: ${theme.colors.error};
  font-size: ${theme.fs.l};
  font-weight: ${theme.fw.semibold};
`;
