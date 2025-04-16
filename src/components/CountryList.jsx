
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";

function CountryList({ countries }) {
    if (!Array.isArray(countries)) {
        return <p>Loading...</p>;
    }
    if (countries.length === 0) {
        return <p>No countries found.</p>;
    }

    return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {countries.map((country) => (
        <Link
            to={`/country/${country.name.common}`}
            key={country.cca3}
            className="card-link"
        >
        <CountryCard key={country.cca3} country={country} />
        </Link>
      ))}
    </div>
  );
}

export default CountryList;
