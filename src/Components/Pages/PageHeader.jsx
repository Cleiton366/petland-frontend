import React from 'react';
import LineIcon from 'react-lineicons';

import './PageHeader.css';
import ProfilePreview from './ProfilePreview';

export default function PageHeader() {
  return (
    <div className="page-header d-flex align-items-center justify-content-between px-5 py-2">
      <div className="d-flex justify-content-start">
        <button type="button" className="header-back-button px-4">
          <LineIcon name="arrow-left" />
        </button>
      </div>
      <div className="page-header-title align-self-baseline p-0 m-0">Petland</div>
      <div className="d-flex justify-content-end">
        <ProfilePreview />
      </div>
    </div>
  );
}
