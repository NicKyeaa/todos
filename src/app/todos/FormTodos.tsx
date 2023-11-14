'use client';
import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

const FormTodos = () => {
  const form = useForm({
    initialValues: {
      task: '',
      taskDescription: '',
    },
  });
  return (
    <>
      <Fieldset>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Group>
            <TextInput
              placeholder='Add your task'
              {...form.getInputProps('task')}
            />
            <TextInput
              placeholder='Add your task description'
              {...form.getInputProps('taskDescription')}
            />
            <Button type='submit'>Submit</Button>
          </Group>
        </form>
      </Fieldset>
    </>
  );
};

export default FormTodos;
