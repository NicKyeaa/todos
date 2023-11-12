'use client';
import { Table } from '@mantine/core';

// const elements = [
//   { id: 1, text: 'Task number one', done: false },
//   { id: 2, text: 'Make a to do list app', done: false },
// ];

const TodoTable = ({ tableData }) => {
  console.log(tableData);
  const rows = tableData.map((el) => (
    <Table.Tr key={el.id}>
      <Table.Td>{el.id}</Table.Td>
      <Table.Td>{el.text}</Table.Td>
      <Table.Td>{el.done}</Table.Td>
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
