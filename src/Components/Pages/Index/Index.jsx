import styles from './Index.module.css'
import FacebookLogin from '../../assets/FacebookLogin.png'
import GoogleLogin from '../../assets/GoogleLogin.png'
import AnimalImg from '../../assets/Animal.png'
import { Link } from 'react-router-dom'
//import axios from 'axios'
//import { api } from '../../Services/Api'
//import { serverToken, serverURL } from '../../../Keys/Server'

const Index = () => {
  const getAuthGoogle = async () => {
    window.open('http://localhost:4000/auth/google', '_self')
  }
  const getAuthFacebook = async () => {
    window.open('http://localhost:4000/auth/facebook', '_self')
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerlogin}>
        <h1 className={styles.titulo}>Welcome to PetLand</h1>
        <div className={styles.facebookIcon}>
          <img
            src={FacebookLogin}
            alt="Icone de conexão com facebook"
            onClick={getAuthFacebook}
          />
        </div>
        <div className={styles.googleIcon}>
          <img
            src={GoogleLogin}
            alt="Icone de conexão com google"
            onClick={getAuthGoogle}
          />
        </div>
        <div className={styles.about}>
          <Link to={'/'}>About us</Link>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.titulo}>Don’t buy. Adopt it.</h1>
        <p className={styles.textoSecundario}>
          {' '}
          PetLand is a plataform where you can adopt pets or help them get a new
          family.{' '}
        </p>
        <div className={styles.imgResponsive}>
          <img src={AnimalImg} width="100%" alt="Dog and cat" />
        </div>
      </div>
    </div>
  )
}

export default Index
