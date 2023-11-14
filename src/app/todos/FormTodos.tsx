'use client';
import axios from 'axios';
import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

const FormTodos = () => {
  // Intializing the Form
  const form = useForm({
    initialValues: {
      title: '',
      longDescription: '',
    },
  });

  // Function for posting the task
  const postTodo = async (values) => {
    console.log('Posting');
    const result = await axios.post('http://localhost:3500/todos/post', values);
    form.reset();
  };
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
