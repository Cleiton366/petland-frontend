import React, { useState } from 'react';
import axios from 'axios';
import { BsBell } from 'react-icons/bs';
import styles from './Donationrequest.module.css';
import Container from '../Container2';

function Donationrequest() {

  async function getUser() {
    try {
      const { data } = await axios.get('http://localhost:4000/user-info', {
        withCredentials: true,
      });
      if (data.id) {
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [list, setList] = useState([]);

  useState(async () => {
    (async () => {
      const url = 'http://localhost:4000/donationrequest/list';
      const user = await getUser();
      try {
        const { data } = await axios.get(url, {
          headers : {
            userid: user.id,
          }
        });
        if (data.length > 0) {
          setList(data);
          return (data);
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [list]);

  const acceptDonation = async (index) => {
    const url = 'http://localhost:4000/donationrequest/accept';
    try {
      await axios.post(url, {
          interrestedDoneeId : list[index].DonationRequest.interresteddoneeid,
          petId : list[index].DonationRequest.petid,
          donationRequestId : list[index].DonationRequest.donationrequestid,
      });
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  const rejectDonation = async (index) => {
    const url = 'http://localhost:4000/donationrequest/reject';
    try {
      await axios.delete(url, {
        data: {
          donationRequestId: list[index].DonationRequest.donationrequestid,
        }
      });
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <div className={styles.sino}>
        <BsBell />
      </div>

      <div className={styles.requests}>
         <div>
          {
          list.length > 0 ? list.map((request, index) => (
            <div className={styles.pedido} key={index}>
              <div className={styles.perfil2}>
                <img src={request.User.userPhoto} alt="user picture" width="52px" height="52px" />
                <p><strong>{request.User.userName}</strong></p>
              </div>
              <p>
                <span>wants to adopt {request.Pet.petname}</span>
              </p>
              <div className="botoes">
                <button onClick={() => acceptDonation(index)}  type="submit" className={styles.Accept}>Accept</button>
                <button onClick={() => rejectDonation(index)} type="submit" className={styles.Reject}>Reject</button>
              </div>
            </div>
          )) : <h3 style={{marginTop : "40vh"}}>No requests yet</h3>
          }
        </div>
      </div>
    </Container>
  );
}

export default Donationrequest;
