import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      isRound="true"
      size="lg"
      // alignSelf="flex-end"
      variant="ghost"
      onClick={toggleColorMode}
    />
  );
};
