import React from 'react';
import { Link } from 'react-router-dom';

import style from './Container2.module.css';
import PageHeader from './PageHeader';

function Container({ children, user }) {
  return (
    <div className={style.container}>
      <PageHeader user={user} />
      <div className={style.children}>
        {children}
      </div>
    </div>
  );
}

export default Container;
