'use client';
import { Table } from '@mantine/core';
import { toDo } from '../../../types/todo';
import { ActionIcon } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import { deleteToDo } from './api';
import { useRouter } from 'next/navigation';

const TodoTable = ({ tableData }) => {
  const router = useRouter();

  const handleDeleteToDo = async (id) => {
    console.log(id);
    const result = await deleteToDo(id);
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
        <ActionIcon variant='default' onClick={handleDeleteToDo}>
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
