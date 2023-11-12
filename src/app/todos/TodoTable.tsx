'use client';
import { Table } from '@mantine/core';

const elements = [
  { id: 1, text: 'Task number one', done: false },
  { id: 2, text: 'Make a to do list app', done: false },
];

const TodoTable = ({ dataTodos }) => {
  const rows = dataTodos.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.text}</Table.Td>
      <Table.Td>{element.done}</Table.Td>
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
