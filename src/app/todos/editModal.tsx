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

  return (
    <>
      <Modal opened={isOpen} onClose={onClose} title='Edit ToDo' centered>
        <h1>{toDo.title}</h1>
      </Modal>
    </>
  );
};

export default EditModal;
