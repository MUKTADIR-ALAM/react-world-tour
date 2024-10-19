import { useState } from 'react';
import './Country.css'
export default function Country({country}) {
    const {name,flags,area,population,cca3} = country;
    console.log(country)
    const[visited,setVisited]= useState(false);

    const handleVisited = ()=>{
        setVisited(!visited);
    }
    return (
    <div className="country">
        <h4>Name: {name?.common}</h4>
        <img src={flags.png} alt="" />
        <p>Area: {area} km²</p>
        <p>Population: {population}</p>
        <button onClick={handleVisited}>{visited?'visited':'Going'}</button>
        {visited?<p>I have visited</p>:<p>I want to visit</p>}
        <p><small>code: {cca3}</small></p>
    </div>
  )
}
