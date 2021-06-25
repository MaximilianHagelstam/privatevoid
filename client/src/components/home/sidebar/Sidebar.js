import { Stack } from '@chakra-ui/react';
import { FiMail, FiUser, FiSettings } from 'react-icons/fi';

import { NavButton } from './NavButton';
import { ToggleTheme } from './ToggleTheme';
import { ComposeButton } from './ComposeButton';

export const Sidebar = () => {
  return (
    <Stack spacing={0} alignItems="baseline">
      <ToggleTheme />
      <NavButton text="Messages" link="/messages" icon={<FiMail />} />
      <NavButton text="Profile" link="/profile" icon={<FiUser />} />
      <NavButton text="Settings" link="/settings" icon={<FiSettings />} />
      <ComposeButton />
    </Stack>
  );
};
