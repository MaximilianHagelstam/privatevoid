import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser, FiSettings, FiLogOut, FiHome } from 'react-icons/fi';
import './Sidebar.css';

import { fetchCurrentUser } from '../../../../util/api';
import { NavButton } from './NavButton';
import { ToggleTheme } from './ToggleTheme';
import { ComposeButton } from './ComposeButton';
import { CurrentUser } from './CurrentUser';

export const Sidebar = () => {
  let history = useHistory();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchCurrentUser()
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          history.push('/login');
        }
      })
      .then((resJson) => {
        if (resJson) {
          setUser(resJson);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [history]);

  return (
    <div className="sidebar">
      <ToggleTheme />
      <NavButton text="Home" link="/home" icon={<FiHome />} />
      <NavButton
        text="Profile"
        link={`/user/${user.username}`}
        icon={<FiUser />}
      />
      <NavButton text="Settings" link="/settings" icon={<FiSettings />} />
      <NavButton text="Log out" link="/logout" icon={<FiLogOut />} />
      <ComposeButton />
      <CurrentUser
        avatar={user.image_url}
        displayName={user.display_name}
        username={user.username}
      />
    </div>
  );
};
