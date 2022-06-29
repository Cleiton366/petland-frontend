import React from 'react';
import { Link } from 'react-router-dom';
import FotoPerfil from '../assets/FotoPerfil.png';
import Back1 from '../assets/Back1.png';

import style from './Container2.module.css';
import PageHeader from './PageHeader';

function Container({ children }) {
  return (
    <div className={style.container}>
      <PageHeader />
      <div className={style.children}>
        {children}
      </div>
    </div>
  );
}

export default Container;
