import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
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

import { createComment, fetchCommentsByPostId } from '../../../util/api';
import { CommentPost } from './CommentPost';

export const CommentButton = ({ postId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comment, setComment] = useState('');
  const [commentAmount, setCommentAmount] = useState('');

  useEffect(() => {
    fetchCommentsByPostId(postId).then((res) => {
      setCommentAmount(res.length);
    });
  }, [postId]);

  const onSubmit = (e) => {
    e.preventDefault();
    createComment({ body: comment, postId: postId });
    setComment('');
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <Button
        variant="ghost"
        rounded={'full'}
        colorScheme="blue"
        aria-label="Comment"
        onClick={onOpen}
        fontWeight="normal"
        leftIcon={<FiMessageCircle />}
      >
        {commentAmount}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <CommentPost postId={postId} />

          <form onSubmit={onSubmit}>
            <ModalHeader>Comment</ModalHeader>
            <ModalCloseButton rounded={'full'} colorScheme="blue" />
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
                colorScheme="blue"
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
