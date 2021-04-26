import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './NavBar';

const Randombeer = (props) => {
  const [beer, setBeer] = useState([]);
  console.log(props);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        setBeer(res.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '4rem' }}>
        <img style={{ height: '10rem' }} src={beer.image_url} alt=""/>
        <div>
          <b>Name:</b>
          {beer.name}
        </div>
        <div>{beer.tagline}</div>
        <div>
          <b>First Brewed:</b>
          {beer.first_brewed}
        </div>
        <div>
          <b>Attenuation:</b>
          {beer.attenuation_level}
        </div>
        <div style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
          <b>Description</b>
          {beer.description}
        </div>
        <div>
          <b>contributed by:</b>
          {beer.contributed_by}
        </div>
      </div>
    </div>
  );
};

export default Randombeer;