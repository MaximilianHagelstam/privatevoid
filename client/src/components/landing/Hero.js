import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { LandingButton } from './LandingButton';

export const Hero = ({ title, subtitle, ...rest }) => {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: '100%', md: '50%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="4xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="lg"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
        <LandingButton text="Get Started" buttonLink="/login" />
      </Stack>
    </Flex>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Hero.defaultProps = {
  title: 'Lorem Ipsum',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};
