import React from 'react';
import LineIcon from 'react-lineicons';
import { Link, useNavigate } from 'react-router-dom';

import style from './PageHeader.module.css';
import ProfilePreview from './ProfilePreview';


export default function PageHeader({ user }) {

  async function headerBackBtnEvent() {
    if(window.location.href == "http://localhost:3000/home") {
      window.location.href = 'http://localhost:4000/logout';
    } else navigate(-1);
  }

  const navigate = useNavigate();

  return (
    <div className={`${style.pageHeader} d-flex align-items-center justify-content-between px-5 py-2`}>
      <div className="d-flex justify-content-start">
        <button type="button" className={`${style.headerBackButton} px-4`} onClick={headerBackBtnEvent}>
          <LineIcon name="arrow-left" />
        </button>
      </div>
      <Link to="/" className={`${style.pageHeaderTitle} unstyled-link align-self-baseline p-0 m-0`}>
        Petland
      </Link>
      <div className="d-flex justify-content-end">
        <ProfilePreview />
      </div>
    </div>
  );
}
