import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import TodoTable from './TodoTable';

async function fetchTodos() {
  const res = await fetch('http://localhost:3500/todos:', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

const TodoList = async () => {
  const dataTodos = await fetchTodos();
  console.log(dataTodos);
  console.log(typeof dataTodos);
  return (
    <>
      <Fieldset>
        <Group>
          <TextInput placeholder='Add your task' />
          <Button>Submit</Button>
        </Group>
      </Fieldset>
      <TodoTable tableData={dataTodos}></TodoTable>
    </>
  );
};

export default TodoList;
