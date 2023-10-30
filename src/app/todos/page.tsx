import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import TodoTable from './TodoTable';

const todos = [
  { id: 1, text: 'Task number one', done: false },
  { id: 2, text: 'Make a to do list app', done: false },
];

async function fetchTodos() {
  const res = await fetch(
    'https://mocki.io/v1/3ec7374f-d068-4cfa-8030-cc2d9d42a881',
    { cache: 'no-store' }
  );
  console.log(res);
  const dataTodos = res.json();
}

const TodoList = () => {
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
