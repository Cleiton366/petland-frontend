import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { Link } from 'react-router-dom'

import style from './ProfilePreview.module.css'

export default function ProfilePreview() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      try {
        const { data, status } = await axios.get(
          'http://localhost:4000/user-info',
          {
            withCredentials: true
          }
        )

        if (status >= 200 && status < 300) {
          setUser(data)
          localStorage.setItem('userId', user.id)
          setLoading(false)
        }
      } catch (err) {
        console.log(err.message)
        setLoading(false)
      }
    })()
  }, [])

  if (loading) {
    return (
      <Link
        to="/UserProfile"
        className={`${style.profilePreview} unstyled-link d-flex p-2`}
      >
        <ReactLoading
          className="align-self-center"
          width="2em"
          height="min-content"
          type="spokes"
          color="black"
        />
      </Link>
    )
  }

  const { username, avatarurl, id } = user

  return (
    <Link
      to="/UserProfile"
      className={`${style.profilePreview} unstyled-link d-flex p-2`}
    >
      <p className={style.userId} id={id}></p>

      <img
        className="rounded-circle h-100"
        src={avatarurl || 'https://i.imgur.com/gJmbboJ.png'}
        alt="Profile preview"
      />
      {username ? (
        <div className="align-self-center px-2">{username}</div>
      ) : null}
    </Link>
  )
}
