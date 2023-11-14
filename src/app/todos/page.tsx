import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import TodoTable from './TodoTable';
import FormTodos from './FormTodos';

async function fetchTodos() {
  const res = await fetch('http://localhost:3500/todos', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

const TodoList = async () => {
  const dataTodos = await fetchTodos();
  return (
    <>
      <FormTodos />
      <TodoTable tableData={dataTodos}></TodoTable>
    </>
  );
};

export default TodoList;
