import React, { useEffect, useState } from 'react';
import { Stack, Avatar, Text, Box, Heading, HStack } from '@chakra-ui/react';
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
          {isOwner ? <p>My post</p> : <div></div>}
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
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
