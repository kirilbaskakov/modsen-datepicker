import React from 'react';
import { Subtitle, TasksStyled, Title } from './styled';
import TasksList from '../TasksList/TasksList';

const Tasks = ({ date }: { date: string }) => {
  return (
    <TasksStyled>
      <Title>Tasks</Title>
      <Subtitle>{date}</Subtitle>
      <TasksList date={date} />
    </TasksStyled>
  );
};

export default Tasks;
