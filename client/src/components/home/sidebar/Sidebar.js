import './Sidebar.css';
import { FiMail, FiUser, FiSettings, FiLogOut, FiHome } from 'react-icons/fi';

import { NavButton } from './NavButton';
import { ToggleTheme } from './ToggleTheme';
import { ComposeButton } from './ComposeButton';
import { CurrentUser } from './CurrentUser';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ToggleTheme />
      <NavButton text="Home" link="/home" icon={<FiHome />} />
      <NavButton text="Messages" link="/messages" icon={<FiMail />} />
      <NavButton text="Profile" link="/profile" icon={<FiUser />} />
      <NavButton text="Settings" link="/settings" icon={<FiSettings />} />
      <NavButton text="Log out" link="/logout" icon={<FiLogOut />} />
      <ComposeButton />
      <CurrentUser />
    </div>
  );
};
