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

import { UserList } from './UserList';

export const Following = ({ following }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Stack spacing={0} align={'center'} onClick={onOpen}>
        <Text fontWeight={600}>{following.length}</Text>
        <Text fontSize={'sm'} color={'gray.500'}>
          Following
        </Text>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Following</ModalHeader>
          <ModalCloseButton rounded={'full'} />
          <ModalBody>
            {following.map((follows) => {
              return (
                <UserList
                  key={follows.user.id}
                  avatar={follows.user.image_url}
                  displayName={follows.user.display_name}
                  username={follows.user.username}
                />
              );
            })}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
