'use client';
import axios from 'axios';
import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

const postTodo = async (values) => {
  const result = await axios.post('loc');
};

const FormTodos = () => {
  const form = useForm({
    initialValues: {
      title: '',
      longDescription: '',
    },
  });
  return (
    <>
      <Fieldset>
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            postTodo(values);
          })}
        >
          <Group>
            <TextInput
              placeholder='Add your task'
              {...form.getInputProps('title')}
            />
            <TextInput
              placeholder='Add your task description'
              {...form.getInputProps('longDescription')}
            />
            <Button type='submit'>Submit</Button>
          </Group>
        </form>
      </Fieldset>
    </>
  );
};

export default FormTodos;
