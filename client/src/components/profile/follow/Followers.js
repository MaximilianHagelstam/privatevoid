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

export const Followers = ({ followers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Stack spacing={0} align={'center'} onClick={onOpen}>
        <Text fontWeight={600}>{followers.length}</Text>
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
            {followers.map((follower) => {
              return (
                <UserList
                  key={follower.user.id}
                  avatar={follower.user.image_url}
                  displayName={follower.user.display_name}
                  username={follower.user.username}
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
