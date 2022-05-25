import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Container.module.css';
import FotoPerfil from '../../assets/FotoPerfil.png';
import Back1 from '../../assets/Back1.png';

function Container(props) {
  const { children, avatar, username } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/Home">
          <div className={styles.titulo}>
            <p>Petland</p>
          </div>
        </Link>
        <Link to="/UserProfile">
          <div className={styles.bg}>
            <div className={styles.perfil}>
              <div className={styles.img}>
                <img
                  src={avatar}
                  alt="Foto do perfil"
                  className={styles.foto}
                />
              </div>
              <p>{username}</p>
            </div>
            <div className={styles.imgBack} />
          </div>
        </Link>
      </div>
      {children}
    </div>
  );
}

export default Container;
