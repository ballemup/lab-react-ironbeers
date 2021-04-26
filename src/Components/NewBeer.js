import axios from 'axios';
import React, {useState} from 'react';
import NavBar from './NavBar'



function NewBeer(props) {

let [newbeer, setnewbeer] = useState({})



    const onChange = (e) => { 
        newbeer[e.target.name] = e.target.value
        setnewbeer(newbeer)
        console.log(newbeer)
    }
    const userInput = (e) => {
        e.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',newbeer)
        .then(res => console.log(res))
    }


    return (
        <div>
            <NavBar />
            <form onSubmit = {userInput}>
            <h1>Create new beer</h1>
            <div >
                <input required type="text" name='name' placeholder="Name" onChange={onChange} />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div >
                <input required type="text" name='tagline' placeholder="Tagline" onChange={onChange} />
                <label htmlFor="floatingInput">Tagline</label>
            </div>
            <div >
                <textarea required placeholder="Description" name='description' onChange={onChange} style={{ height: "100px" }}></textarea>
                <label htmlFor="floatingTextarea2">Description</label>
            </div>
            <div >
                <input required type="text" name='First Brewed' onChange={onChange} placeholder="First Brewed" /> 
                <label htmlFor="floatingInput">First Brewed</label>                
            </div>
            <div >
                <input required type="text" name='brewer_tips' onChange={onChange} placeholder="Brewer Tips" />
                <label htmlFor="floatingInput">Brewers Tips</label>
            </div>
            <div >
                <input required type="number" name='attenuation_level' onChange={onChange} placeholder="Attenuation Level" />
                <label htmlFor="floatingInput">Attenuation Level</label>
            </div>
            <div >
                <input required type="text" name='contributed_by' onChange={onChange} placeholder="Contributor" />
                <label htmlFor="floatingInput">Contributed By</label>
            </div>
            <input type="submit" value="Submit" ></input>
        </form>
        </div>
    );
}

export default NewBeer;