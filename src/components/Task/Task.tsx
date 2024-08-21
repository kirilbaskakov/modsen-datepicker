import React, { useRef } from 'react';

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

  const onCheck = e => {
    onChange({ ...task, done: e.target.checked });
  };

  const onInputChange = e => {
    onChange({ ...task, title: e.target.value });
  };

  return (
    <Container>
      <Checkbox
        type="checkbox"
        checked={task.done}
        onClick={onCheck}
        disabled={!task.title}
      />
      <Input
        type="text"
        placeholder={'Your task...'}
        ref={inputRef}
        value={task.title}
        onChange={onInputChange}
      />
      <Icon src={EditIcon} onClick={onEdit} />
      <Icon src={DeleteIcon} onClick={onDelete} data-testid="icon-delete" />
    </Container>
  );
};

export default Task;
