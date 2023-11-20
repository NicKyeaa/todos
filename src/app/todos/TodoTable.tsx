'use client';
import { Table } from '@mantine/core';
import EditModal from './EditModal';
import { toDo } from '../../../types/todo';
import { ActionIcon } from '@mantine/core';
import { IconTrash, IconEdit } from '@tabler/icons-react';
import { deleteToDo, editToDo } from './api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

const TodoTable = ({ tableData }) => {
  const router = useRouter();

  // EditModal States
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedToDo, setSelectedToDo] = useState(null);

  const handleCloseModal = () => {
    close();
    console.log('Close Modal');
  };

  const handleDeleteToDo = async (id) => {
    console.log(id);
    const result = await deleteToDo(id);
    console.log(result);
    router.refresh();
  };

  const handleOnEdit = async (updatedToDo) => {
    const result = await editToDo(updatedToDo._id);
    console.log(result);
  };

  const handleEditToDo = async (el) => {
    console.log(el);
    setSelectedToDo(el);
    open();
    // const result = await editToDo(id);
    // console.log(result);
    // router.refresh();
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
        <ActionIcon variant='default' onClick={() => handleEditToDo(el)}>
          <IconEdit></IconEdit>
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table>
        <Table.Tbody>{rows}</Table.Tbody>
        <EditModal
          isOpen={opened}
          onClose={handleCloseModal}
          onEdit={handleOnEdit}
          toDo={selectedToDo}
        ></EditModal>
      </Table>
    </>
  );
};

export default TodoTable;
