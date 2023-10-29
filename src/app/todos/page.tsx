import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import TodoTable from './TodoTable';

const TodoList = () => {
  return (
    <>
      <Fieldset>
        <Group>
          <TextInput placeholder='Add your task' />
          <Button>Submit</Button>
        </Group>
      </Fieldset>
      <TodoTable></TodoTable>
    </>
  );
};

export default TodoList;
