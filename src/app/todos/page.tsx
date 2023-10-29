import { Fieldset, TextInput, Button, Group } from '@mantine/core';

const TodoList = () => {
  return (
    <>
      <Fieldset>
        <Group>
          <TextInput placeholder='Add your task' />
          <Button>Submit</Button>
        </Group>
      </Fieldset>
    </>
  );
};

export default TodoList;
