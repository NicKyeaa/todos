'use client';
import axios from 'axios';
import { toDo } from '../../../types/todo';
import { addToDo } from './api';
import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';

const FormTodos = () => {
  const router = useRouter();

  // Intializing the Form
  const form = useForm({
    initialValues: {
      title: '',
      longDescription: '',
    },
  });

  // Function for posting the task
  const handleSubmitNewToDo = async (newToDo: toDo) => {
    await addToDo(newToDo);
    form.reset();
    router.refresh();
  };

  return (
    <>
      <Fieldset>
        <form
          onSubmit={form.onSubmit((values) => {
            handleSubmitNewToDo(values);
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
