import React from 'react';
import {
  Text,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
} from '@chakra-ui/react';

export const Followers = ({ followers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Stack spacing={0} align={'center'} onClick={onOpen}>
        <Text fontWeight={600}>{followers}</Text>
        <Text fontSize={'sm'} color={'gray.500'}>
          Followers
        </Text>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Followers</ModalHeader>
          <ModalCloseButton rounded={'full'} />
          <ModalBody>
            <h1>Hello team</h1>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
