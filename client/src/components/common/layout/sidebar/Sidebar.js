import React from 'react';
import { FiMail, FiUser, FiSettings, FiLogOut, FiHome } from 'react-icons/fi';
import './Sidebar.css';

import { NavButton } from './NavButton';
import { ToggleTheme } from './ToggleTheme';
import { ComposeButton } from './ComposeButton';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ToggleTheme />
      <NavButton text="Home" link="/home" icon={<FiHome />} />
      <NavButton text="Messages" link="/messages" icon={<FiMail />} />
      <NavButton
        text="Profile"
        link="/user/MaximilianHagelstam"
        icon={<FiUser />}
      />
      <NavButton text="Settings" link="/settings" icon={<FiSettings />} />
      <NavButton text="Log out" link="/logout" icon={<FiLogOut />} />
      <ComposeButton />
    </div>
  );
};
