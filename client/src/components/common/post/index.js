import React, { useEffect, useState } from 'react';
import {
  Stack,
  Avatar,
  Text,
  Box,
  Heading,
  HStack,
  Menu,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Post.css';

import { CommentButton } from './CommentButton';
import { LikeButton } from './LikeButton';
import { checkOwner } from '../../../util/api';

export const Post = ({
  message,
  username,
  displayName,
  date,
  avatar,
  postId,
  size,
}) => {
  const [isOwner, setIsOwner] = useState();

  useEffect(() => {
    checkOwner(postId).then((res) => {
      setIsOwner(res.owner);
    });
  }, [postId]);

  return (
    <div className="post">
      <Box maxW={'md'} w={'full'} rounded={'3xl'} p={4} overflow={'hidden'}>
        <Stack direction={'row'} spacing={4}>
          <Link to={`/user/${username}`}>
            <Avatar
              src={avatar}
              alt={'Author'}
              size={size === 'big' ? 'lg' : 'md'}
            />
          </Link>

          <Stack direction={'column'} spacing={0}>
            <Link to={`/post/${postId}`}>
              <Heading as="h3" size={size === 'big' ? 'md' : 'sm'}>
                {displayName}{' '}
                <Text as={'span'} color="gray" fontWeight="400">
                  @{username} · {date}
                </Text>
              </Heading>
              <Text fontSize="lg">{message}</Text>
            </Link>
            <HStack spacing="24px" paddingTop="4px">
              <CommentButton postId={postId} />
              <LikeButton postId={postId} />
              {isOwner ? (
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<BsThreeDots />}
                    rounded={'full'}
                    size="sm"
                    variant="ghost"
                  />
                  <MenuList>
                    <MenuItem icon={<FiTrash />}>Delete</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <div></div>
              )}
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
