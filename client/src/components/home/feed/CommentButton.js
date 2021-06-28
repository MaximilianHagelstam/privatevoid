import {
  IconButton,
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
import { FiMessageCircle } from 'react-icons/fi';
import React, { useState } from 'react';

import { createComment } from '../../../util/api';

export const CommentButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createComment({ body: comment, postId: 1 });
    setComment('');
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <IconButton
        variant="ghost"
        rounded={'full'}
        colorScheme="purple"
        aria-label="Comment"
        onClick={onOpen}
        icon={<FiMessageCircle />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={onSubmit}>
            <ModalHeader>Comment</ModalHeader>
            <ModalCloseButton rounded={'full'} colorScheme="purple" />
            <ModalBody pb={6}>
              <FormControl>
                <Textarea
                  placeholder="Write your comment"
                  size="lg"
                  resize="none"
                  isRequired={true}
                  type="text"
                  name="comment"
                  value={comment}
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
                Comment
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};