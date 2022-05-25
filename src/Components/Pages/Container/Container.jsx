import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Container.module.css';
import FotoPerfil from '../../assets/FotoPerfil.png';
import Back1 from '../../assets/Back1.png';

function Container(props) {
  const { children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/Home">
          <div className={styles.titulo}>
            <p>Petland</p>
          </div>
        </Link>
        <div className={styles.bg}>
          <div className={styles.perfil}>
            <div className={styles.img}>
              <img
                src={FotoPerfil}
                alt="Foto do perfil"
                className={styles.foto}
              />
            </div>
            <p>Usuario</p>
          </div>
          <div className={styles.imgBack} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
