import React from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';
import { TaskType } from '@/types/Tasks';

import Task from '../Task/Task';
import { Button, Container } from './styled';

const generateTask = () => ({
  id: new Date().getTime(),
  title: '',
  done: false
});

const mapTasks = (tasks: Array<TaskType>) => {
  const filteredTasks = tasks.filter(task => task.title);
  if (!filteredTasks.length) return null;
  return tasks.filter(task => task.title);
};

const TasksList = ({ date }: { date: string }) => {
  const [tasks, setTasks] = useLocalStorage<Array<TaskType>>(
    'tasks' + date,
    [generateTask()],
    mapTasks
  );

  const onClick = () => setTasks([...tasks, generateTask()]);

  const onChange = (task: TaskType) => {
    setTasks(tasks.map(item => (item.id === task.id ? task : item)));
  };

  const onDelete = (task: TaskType) => () => {
    if (tasks.length == 1) {
      return setTasks([generateTask()]);
    }
    setTasks(tasks.filter(item => item.id != task.id));
  };

  return (
    <Container>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete(task)}
          onChange={onChange}
        />
      ))}
      <Button onClick={onClick}>Add task</Button>
    </Container>
  );
};

export default TasksList;
