import styled from 'styled-components';

export const TasksStyled = styled.div`
  font-family: sans;
  background-color: #e9e9e9;
  border-radius: 8px;
  padding: 0.75rem 0.5rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.4);
  z-index: 101;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #555;
`;

export const Subtitle = styled.h3`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 15px;
  color: #888;
  font-weight: 400;
  line-height: 1.75em;
`;

export const Close = styled.button`
  display: block;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 14px;
  padding: 0.25rem 0.5rem;
  border: 1px solid #aaa;
  border-radius: 5px;
`;
