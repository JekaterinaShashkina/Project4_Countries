import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryDetail() {
    const { name } = useParams()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/{name}?fullText=true`)
        .then((res) => res.json())
        .then((data) => setCountry(data[0]))
    }, [name])

    return (
        <div>
            <img src={country.flag.svg} width='200' />
            <h2>{country.name.common}</h2>
            <p>Capital {country.capital}</p>
        </div>
    )
}

export default CountryDetail