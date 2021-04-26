import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BeerDetails(props) {
  console.log(props);

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.poopy}`
      )
      .then((res) => {
        setBeer(res.data);
      });
  }, []);
  console.log(beer);

  return (
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
  );
}

export default BeerDetails;