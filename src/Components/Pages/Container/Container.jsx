import styles from './Container.module.css'
import FotoPerfil from '../../assets/FotoPerfil.png'
import { Link } from 'react-router-dom'

const Container = props => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to={'/Home'}>
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
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default Container
