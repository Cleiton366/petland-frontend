import axios from 'axios';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function AnimalPreview({ pet }) {
  const {
    age, city, sstate, medicalcondition, petname, petphoto,
  } = pet;

  return (
    <div>
      <img src={petphoto} alt="Animal preview" />
      <div>
        {`Name: ${petname}`}
        <br />
        {`Age: ${age}`}
        <br />
        {`Location: ${city}, ${sstate}`}
        <br />
        {`Medical Condition: ${medicalcondition}`}
      </div>
    </div>
  );
}

AnimalPreview.propTypes = {
  pet: PropTypes.shape({
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    sstate: PropTypes.string.isRequired,
    medicalcondition: PropTypes.string.isRequired,
    petname: PropTypes.string.isRequired,
    petphoto: PropTypes.string,
  }).isRequired,
};
