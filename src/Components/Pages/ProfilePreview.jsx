import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

import style from './ProfilePreview.module.css';

export default function ProfilePreview() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:4000/user-info', {
          method: 'GET',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Credentials': true,
          },
        });

        const data = await res.json();

        if (res.status >= 200 && res.status < 300) {
          setUser(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    })();
  }, [user]);

  if (loading) {
    return (
      <Link to="/profile" className={`${style.profilePreview} unstyled-link d-flex p-2`}>
        <ReactLoading className="align-self-center" width="2em" height="min-content" type="spokes" color="black" />
      </Link>
    );
  }

  const { username, avatarurl } = user;

  return (
    <Link to="/profile" className={`${style.profilePreview} unstyled-link d-flex p-2`}>
      <img className="rounded-circle h-100" src={avatarurl || 'https://i.imgur.com/gJmbboJ.png'} alt="Profile preview" />
      {username ? (<div className="align-self-center px-2">{username}</div>) : null}
    </Link>
  );
}
