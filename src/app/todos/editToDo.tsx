import { deleteToDo } from './api';
import { ActionIcon } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';

const editToDo = () => {
  return (
    <ActionIcon onClick={handleDeleteToDo}>
      <IconEdit></IconEdit>
    </ActionIcon>
  );
};

export default editToDo;
