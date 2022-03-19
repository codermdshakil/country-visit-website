import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h4 className='title'>We help you to enjoy your journey. We have <span style={{color:'crimson'}}  >{countries.length}  Countries</span>  for you guys </h4>
            <div className="container">
            <div className="row"> 
                {
                    countries.map(country => <Country country={country} key={country.cca3}></Country>)
                }
            </div>
            </div>
        </div>
    );
};

export default Countries;