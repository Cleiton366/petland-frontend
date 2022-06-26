import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

import style from './ProfilePreview.module.css';

export default function ProfilePreview({ user }) {
  if (!user) {
    return (
      <Link to="/UserProfile" className={`${style.profilePreview} unstyled-link d-flex p-2`}>
        <ReactLoading className="align-self-center" width="1.5em" height="min-content" type="spokes" color="black" />
      </Link>
    );
  }

  const { username, avatarurl, id } = user;

  return (
    <Link to="/UserProfile" className={`${style.profilePreview} unstyled-link d-flex p-2`}>
      <p className={style.userId} id={id} />
      <img className="rounded-circle h-100" src={avatarurl || 'https://i.imgur.com/gJmbboJ.png'} alt="Profile preview" />
      {username ? (<div className="align-self-center px-2">{username}</div>) : null}
    </Link>
  );
}
