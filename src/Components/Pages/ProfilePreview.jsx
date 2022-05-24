import React from 'react';

import './ProfilePreview.css';

export default function ProfilePreview() {
  const profilepic = '';
  const name = 'Bettany Martin';

  return (
    <div className="profile-preview d-flex p-2">
      <img className="rounded-circle h-100" src={profilepic || 'https://i.imgur.com/gJmbboJ.png'} alt="Profile preview" />
      <div className="align-self-center px-2">{name}</div>
    </div>
  );
}
