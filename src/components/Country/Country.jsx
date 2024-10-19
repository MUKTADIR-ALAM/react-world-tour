import './Country.css'
export default function Country({country}) {
    const {name,flags} = country;
    console.log(country)
    return (
    <div className="country">
        <h4>Name: {name?.common}</h4>
        <img src={flags.png} alt="" />
    </div>
  )
}
