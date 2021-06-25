import { Stack } from '@chakra-ui/react';
import { FiMail, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

import { NavButton } from './NavButton';
import { ToggleTheme } from './ToggleTheme';
import { ComposeButton } from './ComposeButton';
import { CurrentUser } from './CurrentUser';

export const Sidebar = () => {
  return (
    <Stack spacing={0} alignItems="baseline">
      <ToggleTheme />
      <NavButton text="Messages" link="/messages" icon={<FiMail />} />
      <NavButton text="Profile" link="/profile" icon={<FiUser />} />
      <NavButton text="Settings" link="/settings" icon={<FiSettings />} />
      <NavButton text="Log out" link="/logout" icon={<FiLogOut />} />
      <ComposeButton />
      <CurrentUser />
    </Stack>
  );
};
