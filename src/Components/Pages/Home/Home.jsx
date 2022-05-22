import styles from './Home.module.css'
import Container from '../Container/Container'
const Home = () => {
  return (
    <Container>
      <div className={styles.header}>Antonia saborosa</div>
      <div className={styles.content}>Lora molhadinha</div>
    </Container>
  )
}

export default Home
