import { Stack, Avatar, Text, Box, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

import { fetchPostById } from '../../../util/api';

export const CommentPost = ({ postId }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchPostById(postId);
      setPost(res);
    };
    fetchData();
  }, [postId]);

  return (
    // <div className="post">
    //   <Box maxW={'2xl'} w={'full'} rounded={'3xl'} p={6} overflow={'hidden'}>
    //     <Stack direction={'row'} spacing={4}>
    //       <Avatar src={post.user.image_url} alt={'Author'} size="md" />
    //       <Stack direction={'column'} spacing={0}>
    //         <Heading as="h3" size="sm">
    //           {post.user.display_name}{' '}
    //           <Text as={'span'} color="gray" fontWeight="400">
    //             @{post.user.username} · {post.createdAt}
    //           </Text>
    //         </Heading>
    //         <Text fontSize="lg">{post.message}</Text>
    //       </Stack>
    //     </Stack>
    //   </Box>
    // </div>

    <div className="post">
      <Box maxW={'2xl'} w={'full'} rounded={'3xl'} p={6} overflow={'hidden'}>
        <Stack direction={'row'} spacing={4}>
          <Avatar
            src={'https://via.placeholder.com/140x100'}
            alt={'Author'}
            size="md"
          />
          {console.log(post)}
          <Stack direction={'column'} spacing={0}>
            <Heading as="h3" size="sm">
              Test{' '}
              <Text as={'span'} color="gray" fontWeight="400">
                @Test · test
              </Text>
            </Heading>
            <Text fontSize="lg">Testing</Text>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
