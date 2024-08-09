import React, { useRef } from 'react';
import EditIcon from '@/assets/edit.svg';
import DeleteIcon from '@/assets/delete.svg';
import { Checkbox, Container, Icon, Input } from './styled';
import { TaskType } from '@/types/Tasks';

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
        placeholder={'Your task...'}
        ref={inputRef}
        value={task.title}
        onChange={onInputChange}
      />
      <Icon src={EditIcon} onClick={onEdit} />
      <Icon src={DeleteIcon} onClick={onDelete} />
    </Container>
  );
};

export default Task;
