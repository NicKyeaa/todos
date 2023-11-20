'use client';
import { Modal, Button, TextInput, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

const EditModal = ({ isOpen, onClose, toDo }) => {
  const form = useForm({
    initialValues: {
      title: toDo.title,
      longDescription: toDo.longDescription,
    },
  });

  const handleEditToDo = (values) => {};

  return (
    <>
      <Modal opened={isOpen} onClose={onClose} title='Edit ToDo' centered>
        <h1>{toDo.title}</h1>
        <form
          onSubmit={form.onSubmit((values) => {
            handleEditToDo(values);
          })}
        >
          <Group>
            <TextInput
              placeholder='Edit the task title'
              {...form.getInputProps('title')}
            />
            <TextInput
              placeholder='Edit the task description'
              {...form.getInputProps('longDescription')}
            />
            <Button type='submit'>Submit</Button>
          </Group>
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
