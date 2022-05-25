import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

import style from './Search.module.css';
import AnimalPreview from './AnimalPreview';
import PageHeader from '../PageHeader';
import Container from '../Container2';
import axios from 'axios';

function Search() {
  const { animalType, searchLocation } = useParams();

  const [pets, setPets] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // const city = 'chorozinho';
      // const state = 'ceara';

      const url = `http://localhost:4000/pet/${animalType}/all`;

      // if (searchLocation === 'city') {
      //   url += `?city=${city}&state=${state}`;
      // } else if (searchLocation === 'state') {
      //   url += `?state=${state}`;
      // } else if (searchLocation === 'everywhere') {
      //   url += `/all`;
      // }

      try {
        const {data, status} = await axios.get(url, {
          withCredentials: true,
        })

        if (status >= 200 && status < 300) {
          setPets(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    })();
  }, [pets]);

  useEffect(() => {
    (async () => {
      try {
        const {data, status} = await axios.get('http://localhost:4000/user-info', {
          withCredentials: true,
        })

        if (status >= 200 && status < 300) {
          setUser(data);
        }
      } catch (err) {
        console.log(err.message);
        setUser({ dummy:null });
      }
    })();
  }, []);

  let petList;
  if (pets.length === 0) {
    if (loading) {
      petList = (
        <ReactLoading className="m-5" width="3em" type="spokes" color="black" />
      );
    } else {
      petList = (
        <div className="m-5">Não há resultados.</div>
      );
    }
  } else {
    petList = pets.map((pet) => (
      <AnimalPreview key={pet.petid} pet={pet} />
    ));
  }

  return (
    <Container user={user}>
      <div className={style.search}>
        {/* <div className="d-flex p-2 align-items-center">
          <div className="p-2">Show pets in my:</div>
          <button type="button" className="btn btn-primary p-1 px-3 mx-1">City</button>
          <button type="button" className="btn btn-primary p-1 px-3 mx-1">State</button>
          <button type="button" className="btn btn-primary p-1 px-3 mx-1">Everywhere</button>
        </div> */}
        <div className="d-flex flex-column p-2 align-items-center">
          {petList}
        </div>
      </div>
    </Container>
  );
}

export default Search;
