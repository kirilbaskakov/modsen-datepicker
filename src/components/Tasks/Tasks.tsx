import React from 'react';

import TasksList from '../TasksList/TasksList';
import { Close, Overlay, Subtitle, TasksStyled, Title } from './styled';

const Tasks = ({ date, onClose }: { date: string; onClose: () => void }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <TasksStyled>
        <Title>Tasks</Title>
        <Subtitle>{date}</Subtitle>
        <TasksList date={date} />
        <Close onClick={onClose}>Close</Close>
      </TasksStyled>
    </>
  );
};

export default Tasks;
