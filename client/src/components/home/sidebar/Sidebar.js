import { Stack } from '@chakra-ui/react';

import { MessageButton } from './MessageButton';
import { ToggleTheme } from './ToggleTheme';

export const Sidebar = () => {
  return (
    <Stack spacing={0} alignItems="baseline">
      <ToggleTheme />
      <MessageButton />
    </Stack>
  );
};
