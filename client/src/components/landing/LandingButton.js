import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const LandingButton = ({ text, buttonLink }) => {
  return (
    <Link to={buttonLink}>
      <Button colorScheme="green" variant="outline">
        {text}
      </Button>
    </Link>
  );
};

LandingButton.propTypes = {
  text: PropTypes.string,
  buttonLink: PropTypes.string,
};

LandingButton.defaultProps = {
  text: 'Button',
  buttonLink: '/login',
};
