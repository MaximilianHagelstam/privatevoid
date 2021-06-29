import React, { useEffect, useState } from 'react';
import './User.css';

import { fetchUserByUsername } from '../../util/api';
import { UserCard } from './UserCard';
import { UserNotFound } from './UserNotFound';
import { UserTabs } from './UserTabs';

export const User = ({ searchedUsername }) => {
  const [userFound, setUserFound] = useState(false);

  const [avatar, setAvatar] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  // avatar, displayName, username, bio

  useEffect(() => {
    fetchUserByUsername(searchedUsername).then((res) => {
      if (res !== false) {
        setUserFound(true);

        setAvatar(res.image_url);
        setDisplayName(res.display_name);
        setUsername(res.username);
        setBio(res.bio);
      } else {
        setUserFound(false);
      }
    });
  }, [searchedUsername]);

  return (
    <div className="user">
      {!userFound ? (
        <UserNotFound />
      ) : (
        <div>
          <UserCard
            username={username}
            avatar={avatar}
            displayName={displayName}
            bio={bio}
          />
          <UserTabs username={username} />
        </div>
      )}
    </div>
  );
};
