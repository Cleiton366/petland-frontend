import styles from './Home.module.css'
import Container from '../Container/Container'
import CatImage from '../../assets/Cat2.png'
import Dog1 from '../../assets/Dog1.png'
import Dog2 from '../../assets/Dog2.png'
const Home = () => {
  return (
    <Container>
      <div className={styles.content}>
        <h1>What do you want to do?</h1>
        <div className={styles.cards}>
          <div className={styles.contentFluid}>
            <img src={CatImage} alt="gatofofin" />
            <p>Adopt a cat</p>
          </div>
          <div className={styles.contentFluid}>
            <img src={Dog1} alt="Dog 1" />
            <p>Adopt a dog</p>
          </div>

          <div className={styles.contentFluid}>
            <img src={Dog2} alt="Dog 2" />
            <p>Help a pet be adopted</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
