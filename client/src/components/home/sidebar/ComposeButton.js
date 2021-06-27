import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { createPost } from '../../../util/api';

export const ComposeButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createPost({ message });
    setMessage('');
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <Button
        rounded={'full'}
        px={6}
        colorScheme="purple"
        onClick={onOpen}
        marginTop="24px"
      >
        Compose
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={onSubmit}>
            <ModalHeader>Compose a post</ModalHeader>
            <ModalCloseButton rounded={'full'} colorScheme="purple" />
            <ModalBody pb={6}>
              <FormControl>
                <Textarea
                  placeholder="What's happening?"
                  size="lg"
                  resize="none"
                  isRequired={true}
                  type="text"
                  name="message"
                  value={message}
                  onChange={onChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="purple"
                mr={3}
                type="submit"
                rounded={'full'}
                onClick={onClose}
              >
                Publish
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};