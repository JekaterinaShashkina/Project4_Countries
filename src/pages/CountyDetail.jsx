import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function CountryDetail() {
    const { name } = useParams()
    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/"); // вернёт на главную страницу
      };

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch(
                    `https://restcountries.com/v3.1/name/${name}?fullText=true`
                )
                const data = await response.json()
                console.log('data: ', data);
                setCountry(data[0])
            } catch (error) {
                console.error("Error countries loading:", error);
            } finally {
                setLoading(false)
            }
        }
        fetchCountry()
    }, [name])

    if (loading) return <p>Loading...</p>;
    if (!country) return <p>Country not found</p>;

    return (
        <div style={{ padding: "1rem" }}>
            <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ marginBottom: 2,
                    borderRadius: "12px",
                    border: "1px solid #a5d6a7",
                    color: "#4caf50",
                    fontWeight: 500,
                    padding: "8px 16px",
                    textTransform: "none",
                    "&:hover": {
                    backgroundColor: "#a5d6a7",
                    color: "white",
                    }
                }}
            >
            ← Back
            </Button>
            <h2>{country.name.common}</h2>
            <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            style={{ width: "200px", height: "auto" }}
            />
            <p><strong>Capital: </strong>{country.capital}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {country.area} km²</p>
            <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
            <p><strong>Currency:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
            <p>
                <strong>Map:</strong>{" "}
                <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                </a>
            </p>
            <iframe
                src={`https://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&z=5&output=embed`}
                width="800"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
        </div>
    )
}

export default CountryDetail