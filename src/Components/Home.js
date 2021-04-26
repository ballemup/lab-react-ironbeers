import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div>
                <img src="./assets/beers.png" alt="" />
                <Link to='/Allbeers' ><h1>All Beers</h1></Link>
                <p>lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div>
                <img src="./assets/new-beer.png" alt="" />
                <Link to='/Randombeer' ><h1>Random Beer</h1></Link>
                <p>lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div>
                <img src="./assets/random-beer.png" alt="" />
                <Link to='/Newbeer' ><h1>New Beer</h1></Link>
                <p>lorem ipsum dolor sit amet, consectetur</p>
            </div>
        </div>
    );
};

export default Home;