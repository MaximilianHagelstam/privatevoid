import { Button, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      leftIcon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
      rounded={'full'}
      size="lg"
      variant="ghost"
      onClick={toggleColorMode}
    >
      Theme
    </Button>
  );
};
