import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

import './Search.css';
import AnimalPreview from './AnimalPreview';
import PageHeader from '../PageHeader';

function Search() {
  const { animalType, searchLocation } = useParams();

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // const city = 'chorozinho';
      // const state = 'ceara';

      const url = `/pet/${animalType}/list/all`;

      // if (searchLocation === 'city') {
      //   url += `?city=${city}&state=${state}`;
      // } else if (searchLocation === 'state') {
      //   url += `?state=${state}`;
      // } else if (searchLocation === 'everywhere') {
      //   url += `/all`;
      // }

      try {
        const { data, status } = await axios.get(url);

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
    <div>
      <PageHeader />
      <div className="search">
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
    </div>
  );
}

export default Search;
