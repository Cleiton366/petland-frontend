import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './Search.css';
import AnimalPreview from './AnimalPreview';
import PageHeader from '../PageHeader';

function Search() {
  const { animalType } = useParams();

  const city = 'chorozinho';
  const state = 'ceara';

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(`/pet/${animalType}/list?city=${city}&state=${state}`);

        if (status >= 200 && status < 300) {
          setPets(data);
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [pets]);

  const petList = pets.map((pet) => (
    <AnimalPreview key={pet.petid} pet={pet} />
  ));

  return (
    <div>
      <PageHeader />
      <div className="search">
        <div className="d-flex p-2 align-items-center">
          <div className="p-2">Show pets in my:</div>
          <button type="button" className="btn btn-primary p-1 px-3 mx-1">City</button>
          <button type="button" className="btn btn-primary p-1 px-3 mx-1">State</button>
          <button type="button" className="btn btn-primary p-1 px-3 mx-1">Everywhere</button>
        </div>
        <div className="d-flex flex-column p-2 align-items-center">
          {petList}
        </div>
      </div>
    </div>
  );
}

export default Search;
