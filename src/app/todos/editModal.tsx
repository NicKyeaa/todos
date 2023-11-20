'use client';
import { Modal, Button, TextInput, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';

const EditModal = ({ isOpen, onClose, toDo }) => {
  // const [editedData, setEditedData] = useState({
  //   title: toDo.title,
  //   longDescription: toDo.longDescription,
  //   done: false,
  // });

  const form = useForm({
    initialValues: {
      title: '',
      longDescription: '',
    },
  });

  useEffect(() => {
    if (toDo) {
      form.setValues({
        title: toDo.title,
        longDescription: toDo.longDescription,
      });
    }
  }, [toDo]);

  const handleEditToDo = (values) => {};

  return (
    <>
      <Modal opened={isOpen} onClose={onClose} title='Edit ToDo' centered>
        <form
          onSubmit={form.onSubmit((values) => {
            handleEditToDo(values);
          })}
        >
          <Stack>
            <TextInput
              placeholder='Edit the task title'
              {...form.getInputProps('title')}
            />
            <TextInput
              placeholder='Edit the task description'
              {...form.getInputProps('longDescription')}
            />
            <Button type='submit'>Submit</Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
