'use client';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const EditModal = ({ isOpen }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={isOpen} onClose={close} title='Authentication' centered>
        <h1>Test</h1>
      </Modal>
    </>
  );
};

export default EditModal;
