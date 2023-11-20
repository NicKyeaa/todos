'use client';
import { Modal, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

const EditModal = ({ isOpen, onClose, itemId }) => {
  return (
    <>
      <Modal opened={isOpen} onClose={onClose} title='Authentication' centered>
        <h1>{itemId}</h1>
      </Modal>
    </>
  );
};

export default EditModal;
