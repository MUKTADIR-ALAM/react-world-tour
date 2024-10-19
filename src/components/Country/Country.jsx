import { useState } from "react";
import "./Country.css";
export default function Country({ country ,handleVisitedCountry, handleVisitedFlag}) {
  const { name, flags, area, population, cca3 } = country;
//   console.log(country);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited-country"}`}>
      <h4 style={{ color: visited && "purple" }}>Name: {name?.common}</h4>
      <img src={flags.png} alt="" />
      <p>Area: {area} km²</p>
      <p>Population: {population}</p>
      <button onClick={()=>handleVisitedFlag(flags.png)}>Add flag</button>
      <br />
      <button onClick={()=>{handleVisitedCountry(country)}}>Mark as Visited</button>
      <br />
      <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
      {visited ? <p>I have visited</p> : <p>I want to visit</p>}
      <p>
        <small>code: {cca3}</small>
      </p>
    </div>
  );
}
