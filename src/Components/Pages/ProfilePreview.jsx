import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import './ProfilePreview.css';

export default function ProfilePreview() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get('/user-info');

        if (status >= 200 && status < 300) {
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
      <div className="profile-preview d-flex p-2">
        <ReactLoading className="align-self-center" width="2em" height="min-content" type="spokes" color="black" />
      </div>
    );
  }

  const { username, avatarurl } = user;

  return (
    <div className="profile-preview d-flex p-2">
      <img className="rounded-circle h-100" src={avatarurl || 'https://i.imgur.com/gJmbboJ.png'} alt="Profile preview" />
      {username ? (<div className="align-self-center px-2">{username}</div>) : null}
    </div>
  );
}
