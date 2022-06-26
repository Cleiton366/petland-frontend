import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsBell } from 'react-icons/bs';
import styles from './Donationrequest.module.css';
import Container from '../Container2';

function Donationrequest() {
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const { data, status } = await axios.get('http://localhost:4000/user-info', {
        withCredentials: true,
      });

      if (status >= 200 && status < 300) {
        setUser(data);
        return data;
      }
    } catch (err) {
      console.log(err);
      setUser({ dummy: null });
    }
    return { dummy: null };
  };

  const [list, setList] = useState([]);

  useEffect(() => {

    (async () => {
      
      const url = 'http://localhost:4000/donationrequest/list'

      try {
        const { data, status } = await axios.get(url, {
          withCredentials: true
        })
        if (status >= 200 && status < 300) {
          setList(data)
          return(data)
        }
      } catch (err) {
        console.log(err.message)
      }
    })()
  }, [list])

  const [accept, setAccept] = useState([]);

  useEffect(() => {

    (async () => {
      
      const url = 'http://localhost:4000/donationrequest/accept'

      try {
        const { data, status } = await axios.post(url, {
          withCredentials: true
        })
        if (status >= 200 && status < 300) {
          setAccept(data)
        }
      } catch (err) {
        console.log(err.message)
      }
    })()
  }, [accept])

  const [reject, setReject] = useState([]);

  useEffect(() => {

    (async () => {
      
      const url = `http://localhost:4000/donationrequest/reject/${id}`

      try {
        const { data, status } = await axios.delete(url, {
          withCredentials: true
        })
        if (status >= 200 && status < 300) {
          setReject(data)
        }
      } catch (err) {
        console.log(err.message)
      }
    })()
  }, [reject])

  return (
    <Container user={user}>
      <div className={styles.sino}>
        <BsBell></BsBell>
      </div>

      <div className={styles.requests}>

        <ul>
          {accept.map(accept => (
            <li key={accept.id}>
              <div className={styles.pedido} id={accept.donationRequestId}>
                <div className={styles.perfil2} id={accept.interrestedDoneeId}>
                  <img src="https://img.freepik.com/fotos-gratis/retrato-de-jovem-mulher-asiatica-no-perfil_641386-436.jpg" width="52px" height="52px"></img>
                  <p><strong>Lily Audrin</strong></p>
                </div>
                <p>wants to adopt <span id={accept.petId}>PetName</span></p>
                <div>
                  <button type="submit" className={styles.Accept}>Accept</button>
                  <button type="submit" className={styles.Reject}>Reject</button>
                </div>
              </div>
                {user.name} 
            </li>
          ))}
        </ul>

        <div className={styles.pedido} id="62b21948afe9a">
          <div className={styles.perfil2} id="62b21d606d889">
            <img src="https://img.freepik.com/fotos-gratis/retrato-de-jovem-mulher-asiatica-no-perfil_641386-436.jpg" width="52px" height="52px"></img>
            <p><strong>Lily Audrin</strong></p>
          </div>
          <p>wants to adopt <span id="62b21ad8b34ac">PetName</span></p>
          <div>
            <button type="submit" className={styles.Accept}>Accept</button>
            <button type="submit" className={styles.Reject}>Reject</button>
          </div>
        </div>

        <div className={styles.pedido} id="62b2197182eff">
          <div className={styles.perfil2} id="62b21d98a8907">
          <img src="https://img.freepik.com/fotos-gratis/retrato-de-sorrindo-homem-jovem-olhando-camera_23-2148193854.jpg" width="52px" height="52px"></img>
          <p><strong>Robert Silver</strong></p>
          </div>
          <p>wants to adopt <span id="62b21af762a06">PetName</span></p>
          <div>
            <button type="submit" className={styles.Accept}>Accept</button>
            <button type="submit" className={styles.Reject}>Reject</button>
          </div>
        </div>
        
        <div className={styles.pedido} id="62b219846b6d3">
          <div className={styles.perfil2} id="62b21da4bc3c0">
          <img src="https://img.freepik.com/fotos-gratis/homem-jovem-confiante-em-pe-com-a-postura-fechada-em-vista-de-perfil-olhando-para-a-frente-isolado-na-parede-laranja_141793-73616.jpg" width="52px" height="52px"></img>
          <p><strong>Josiah Mathewus</strong></p>
          </div>
          <p>wants to adopt <span id="62b21be08decf">PetName</span></p>
          <div>
            <button type="submit" className={styles.Accept}>Accept</button>
            <button type="submit" className={styles.Reject}>Reject</button>
          </div>
        </div>
        
        <div className={styles.pedido} id="62b2199c81c97">
          <div className={styles.perfil2} id="62b21db348152">
          <img src="https://img.freepik.com/fotos-gratis/foto-de-perfil-entretido-jovem-encantadora-jogando-telefone-celular-segurando-um-smartphone-girando-a-camera_1258-81394.jpg" className="css-9pa8cd rounded-circle" width="52px" height="52px"></img>
          <p><strong>Seraphine Delh</strong></p>
          </div>
          <p>wants to adopt <span id="62b21c328142f">PetName</span></p>
          <div>
            <button type="submit" className={styles.Accept}>Accept</button>
            <button type="submit" className={styles.Reject}>Reject</button>
          </div>
        </div>

        <div className={styles.pedido} id="62b219b66fce0">
          <div className={styles.perfil2} id="62b21df9b17ce">
          <img src="https://img.freepik.com/fotos-gratis/jovem-em-uma-camisa-trabalhando-no-laptop-roxo_155003-14131.jpg" width="52px" height="52px"></img>
          <p><strong>Juan Martines</strong></p>
          </div>
          <p>wants to adopt <span id="62b21c3f864f6">PetName</span></p>
          <div>
            <button type="submit" className={styles.Accept}>Accept</button>
            <button type="submit" className={styles.Reject}>Reject</button>
          </div>
        </div>

        <div className={styles.pedido} id="62b21e095a238">
          <div className={styles.perfil2} id="62b21e112072a">
          <img src="https://img.freepik.com/fotos-gratis/retrato-de-um-jovem-casual-feliz-em-pe_171337-29744.jpg" width="52px" height="52px"></img>
          <p><strong>Bob Krust</strong></p>
          </div>
          <p>wants to adopt <span id="62b21c6c1ef21">PetName</span></p>
          <div>
            <button type="submit" className={styles.Accept}>Accept</button>
            <button type="submit" className={styles.Reject}>Reject</button>
          </div>
        </div>

        <div className={styles.pedido} id="62b219d681c22">
          <div className={styles.perfil2} id="62b21e1ec1012">
          <img src="https://img.freepik.com/fotos-gratis/retrato-de-um-feliz-mulher-jovem-olhando-camera_23-2147892777.jpg" width="52px" height="52px"></img>
          <p><strong>Ashley Santiago</strong></p>
          </div>
          <p>wants to adopt <span id="62b21c8824691">PetName</span></p>
          <div>
            <button type="submit" className={styles.Accept}>Accept</button>
            <button type="submit" className={styles.Reject}>Reject</button>
          </div>
        </div>

        <div className={styles.pedido} id="62b21a06d18a8">
          <div className={styles.perfil2} id="62b21e2e4a4bc">
          <img src="https://img.freepik.com/fotos-gratis/afro-americano-gostoso-e-brincalhao-com-penteado-afro-puxando-as-maos-para-fazer-selfie-piscando-alegremente-e-sorrindo-amplamente-fazendo-nova-foto-de-perfil-para-rede-social_176420-23120.jpg" width="52px" height="52px"></img>
          <p><strong>Beth Courtney</strong></p>
          </div>
          <p>wants to adopt <span id="62b21ca2b7af9">PetName</span></p>
          <div>
            <button type="submit" className={styles.Accept}>Accept</button>
            <button type="submit" className={styles.Reject}>Reject</button>
          </div>
        </div>

        <div className={styles.pedido} id="62b21a1c5fe5d">
          <div className={styles.perfil2} id="62b21e46c3beb">
          <img src="https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg" width="52px" height="52px"></img>
          <p><strong>Scott Lang</strong></p>
          </div>
          <p>wants to adopt <span id="62b21cba4e89b">PetName</span></p>
          <div>
            <button type="submit" className={styles.Accept}>Accept</button>
            <button type="submit" className={styles.Reject}>Reject</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
  
export default Donationrequest;