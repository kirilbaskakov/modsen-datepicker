import styled from 'styled-components';

const HEADER_GAP = '0.25rem';

const TITLE_PADDING = '0 0.75rem';
const TITLE_LINE_HEIGHT = '2rem';
const TITLE_RADIUIS = '8px';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${HEADER_GAP};
  align-items: center;
`;
export const Title = styled.h3<{ $isHoverable: boolean }>`
  padding: ${TITLE_PADDING};
  margin: 0;
  font-size: ${props => props.theme.fs.m};
  font-weight: ${props => props.theme.fw.bold};
  font-family: sans;
  line-height: ${TITLE_LINE_HEIGHT};
  border-radius: ${TITLE_RADIUIS};

  ${props =>
    props.$isHoverable &&
    `
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.colors.bgSecondary};
      }`}
`;

export const ArrowIcon = styled.img`
  cursor: pointer;
`;

export const InnerDatepickerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
