import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FotoPerfil from '../assets/FotoPerfil.png';
import Back1 from '../assets/Back1.png';

import style from './Container2.module.css';
import PageHeader from './PageHeader';

function Container(props) {
  const { children } = props;

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

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
