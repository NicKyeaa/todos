import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import { getAllTodos } from './api';
import TodoTable from './TodoTable';
import FormTodos from './FormTodos';

const TodoList = async () => {
  const dataTodos = await getAllTodos();
  return (
    <>
      <FormTodos />
      <TodoTable tableData={dataTodos}></TodoTable>
    </>
  );
};

export default TodoList;
