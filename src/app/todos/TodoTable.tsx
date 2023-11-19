'use client';
import { Table } from '@mantine/core';
import { EditModal } from './EditModal';
import { toDo } from '../../../types/todo';
import { ActionIcon } from '@mantine/core';
import { IconTrash, IconEdit } from '@tabler/icons-react';
import { deleteToDo, editToDo } from './api';
import { useRouter } from 'next/navigation';

const TodoTable = ({ tableData }) => {
  const router = useRouter();

  const handleDeleteToDo = async (id) => {
    console.log(id);
    const result = await deleteToDo(id);
    console.log(result);
    router.refresh();
  };

  const handleEditToDo = async (id) => {
    console.log(id);
    const result = await editToDo(id);
    console.log(result);
    router.refresh();
  };

  console.log(tableData);
  const rows = tableData.map((el) => (
    <Table.Tr key={el._id}>
      <Table.Td>{el.title}</Table.Td>
      <Table.Td>{el.longDescription}</Table.Td>
      <Table.Td>{el.done}</Table.Td>
      <Table.Td>
        <ActionIcon variant='default' onClick={() => handleDeleteToDo(el._id)}>
          <IconTrash></IconTrash>
        </ActionIcon>
        <ActionIcon variant='default' onClick={() => handleEditToDo(el._id)}>
          <IconEdit></IconEdit>
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};

export default TodoTable;
