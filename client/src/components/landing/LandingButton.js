import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const LandingButton = ({ text }) => {
  return (
    <Link to="/login">
      <Button colorScheme="teal" variant="outline">
        {text}
      </Button>
    </Link>
  );
};

LandingButton.propTypes = {
  text: PropTypes.string,
};

LandingButton.defaultProps = {
  text: 'Button',
};
