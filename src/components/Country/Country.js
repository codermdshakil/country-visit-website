import React from 'react';
import './Country.css';


const Country = (props) => {
    const {flags,name, capital, population, area, region} = props.country;
    return (
        <div className=" col-lg-4  col-md-6 col-11 g-1  d-block m-md-0 m-auto">
            <div className='single-country'> 
            <img src={flags.png} className='img-fluid' alt="" />
                <h5><b>Country Name</b> : {name.common}</h5>
                <h5><b>Capital </b>: {capital}</h5>
                <h6><b>Population </b>: {population}</h6>
                <h6><b>Area</b> : {area}</h6>
                <h6><b>Region</b> : {region}</h6>
            </div>
        </div>
    );
};

export default Country;