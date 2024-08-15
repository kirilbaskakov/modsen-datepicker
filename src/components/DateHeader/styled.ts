import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  align-items: center;
`;
export const Title = styled.h3<{ $isHoverable: boolean }>`
  padding: 0rem 0.75rem;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  font-family: sans;
  line-height: 2rem;
  border-radius: 8px;

  ${props =>
    props.$isHoverable &&
    `
  cursor: pointer;
  &:hover {
    background-color: #eee;
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
