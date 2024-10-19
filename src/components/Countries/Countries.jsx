import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/Country";
import './Countries.css'


export default function Countries() {
    const [countries,setCountries] =useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);

    const handleVisitedFlag = (flags) =>{
      if(!visitedFlags.includes(flags)){
        setVisitedFlags([...visitedFlags,flags]);
      }
    }
    const handleVisitedCountry = (country) =>{
      if(!visitedCountries.includes(country)){
        setVisitedCountries([...visitedCountries,country]);
      }
    }
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=>setCountries(data));
    },[])
  return (
    <div>
        <h3>Countries: {countries.length}</h3>
        <div>
          <h4>Visited countries: {visitedCountries.length}</h4>
          <ul>
          {visitedCountries.map((country)=> <li key={country.cca3}>{country.name?.common}</li>)}
          </ul>
        </div>


        <div className="visited-flags">
          {visitedFlags.map((flags,idx)=> <img key={idx} src={flags}></img>)}
        </div>
        <div className="countries-container">
        {
        countries.map(country=>
        <Country key={country.cca3} 
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}></Country>)
        }
        </div>
    </div>
  )
}
