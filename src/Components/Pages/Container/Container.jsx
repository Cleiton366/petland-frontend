import styles from './Container.module.css'
import FotoPerfil from '../../assets/FotoPerfil.png'
import { Link } from 'react-router-dom'
import Back1 from '../../assets/Back1.png'

const Container = props => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to={'/Home'}>
          <div className={styles.titulo}>
            <p>Petland</p>
          </div>
        </Link>
        <Link to={'/UserProfile'}>
          <div className={styles.bg}>
            <div className={styles.perfil}>
              <div className={styles.img}>
                <img
                  src={props.avatar}
                  alt="Foto do perfil"
                  className={styles.foto}
                />
              </div>
              <p>{props.username}</p>
            </div>
            <div className={styles.imgBack}></div>
          </div>
        </Link>
      </div>
      {props.children}
    </div>
  )
}

export default Container
