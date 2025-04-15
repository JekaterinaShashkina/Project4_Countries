    import { useEffect, useState } from "react";

    function MyHomeCountry() {
      const [country, setCountry] = useState(null);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchEstonia = async () => {
          try {
            const response = await fetch(
              `https://restcountries.com/v3.1/name/estonia?fullText=true`
            );
            const data = await response.json();
            setCountry(data[0]);
          } catch (error) {
            console.error("Ошибка при загрузке Эстонии:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchEstonia();
      }, []);
    
      if (loading) return <p>Loading...</p>;
      if (!country) return <p>Estonia not found</p>;
    
      return (
        <div style={{ padding: "1rem" }}>
          <h2>{country.name.common} — My Home Country 🇪🇪</h2>
          <img src={country.flags.svg} alt={country.name.common} width={200} />
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Area:</strong> {country.area} km²</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
          <p><strong>Currency:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
          <p>
            <strong>Google Maps:</strong>{" "}
            <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
              Open
            </a>
          </p>
          <iframe
            src={`https://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&z=5&output=embed`}
            width="100%"
            height="300"
            style={{ border: "1px solid #ccc", borderRadius: "10px" }}
          />
        </div>
      );
    }

export default MyHomeCountry