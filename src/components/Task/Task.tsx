import React, { ChangeEvent, useRef } from 'react';

import DeleteIcon from '@/assets/delete.svg';
import EditIcon from '@/assets/edit.svg';
import { TaskType } from '@/types/Tasks';

import { Checkbox, Container, Icon, Input } from './styled';

interface TaskProps {
  task: TaskType;
  onChange: (value: TaskType) => void;
  onDelete: () => void;
}

const Task = ({ task, onChange, onDelete }: TaskProps) => {
  const inputRef = useRef(null);

  const onEdit = () => {
    inputRef.current.focus();
  };

  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...task, done: e.target.checked });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...task, title: e.target.value });
  };

  return (
    <Container>
      <Checkbox
        type="checkbox"
        checked={task.done}
        onChange={onCheck}
        disabled={!task.title}
      />
      <Input
        type="text"
        placeholder={'Your task...'}
        ref={inputRef}
        value={task.title}
        onChange={onInputChange}
      />
      <Icon src={EditIcon} onClick={onEdit} alt="Edit task" title="Edit task" />
      <Icon
        src={DeleteIcon}
        onClick={onDelete}
        data-testid="icon-delete"
        alt="Delete task"
        title="Delete task"
      />
    </Container>
  );
};

export default Task;
