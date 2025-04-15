
import { Link } from "react-router-dom";

function CountryList({ countries }) {
    if (!Array.isArray(countries)) {
        return <p>Loading...</p>;
    }
    if (countries.length === 0) {
        return <p>No countries found.</p>;
    }
    
    return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {countries.map((country) => (
        <Link
            to={`/country/${country.name.common}`}
            key={country.cca3}
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                width: "200px",
                textDecoration: "none",
                color: "black",
            }}
        >
        <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            style={{ width: "100%", height: "auto" }}
          />
          <h3>{country.name.common}</h3>
          <p>Capital: {country.capital?.[0] || "N/A"}</p>
          <p>Population: {country.population.toLocaleString()}</p>
        </Link>
      ))}
    </div>
  );
}

export default CountryList;
