import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import NavBar from './NavBar'

//https://ih-beers-api2.herokuapp.com/beers

const AllBeers = () => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers ').then((res) => {
      setBeer(res.data);
    });
  }, []);
  const showBeers = () => {
    return beer.map((beer, i) => {
      return (
        
          <div className="list-item" key={beer._id}>
          <div className='list-img-container'>
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className='list-item-text'>
            <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
            <p className='tagline'>{beer.tagline}</p>
            <p><b>Contributed by: </b>{beer.contributed_by}</p>
          </div>                   
        </div>
      );
    });
  };

  return (
    <div>
      <NavBar/>
      {showBeers()}
    </div>
  );
};

export default AllBeers;