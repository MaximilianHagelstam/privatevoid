import React, { useEffect, useState } from 'react';

import { fetchUserByUsername } from '../../util/api';
import { ProfileCard } from './ProfileCard';
import { UserNotFound } from './UserNotFound';
import { ProfileTabs } from './tabs/ProfileTabs';

export const Profile = ({ searchedUsername }) => {
  const [userFound, setUserFound] = useState(false);

  const [avatar, setAvatar] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [isOwner, setIsOwner] = useState();

  useEffect(() => {
    fetchUserByUsername(searchedUsername).then((res) => {
      if (res !== false) {
        setUserFound(true);

        setAvatar(res.image_url);
        setDisplayName(res.display_name);
        setUsername(res.username);
        setBio(res.bio);
        setIsOwner(res.owner);
      } else {
        setUserFound(false);
      }
    });
  }, [searchedUsername]);

  return (
    <div>
      {!userFound ? (
        <UserNotFound />
      ) : (
        <div>
          <ProfileCard
            username={username}
            avatar={avatar}
            displayName={displayName}
            bio={bio}
            isOwner={isOwner}
          />
          <ProfileTabs username={username} />
        </div>
      )}
    </div>
  );
};
