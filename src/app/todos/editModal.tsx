'use client';
import { Modal, Button } from '@mantine/core';

const EditModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal opened={isOpen} onClose={onClose} title='Authentication' centered>
        <h1>Test</h1>
      </Modal>
    </>
  );
};

export default EditModal;
