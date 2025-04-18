import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Typography, Box, Grid } from "@mui/material";
import {CountryInfo} from "../components/CountryInfo"

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
                setCountry(data[0])
            } catch (error) {
                console.error("Error countries loading:", error);
            } finally {
                setLoading(false)
            }
        }
        fetchCountry()
    }, [name])

    if (loading) return <Typography>Loading...</Typography>;
    if (!country) return <Typography>Country not found</Typography>;

    return (
        <Box sx={{ maxWidth: "1200px"}}>
            <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ marginBottom: 3,
                    marginTop: 5,
                    borderRadius: "12px",
                    border: "1px solid #a5d6a7",
                    color: "#4caf50",
                    fontWeight: 700,
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
            <Box   sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: 2,
            }}>
                <Box sx={{ gridColumn: "span 4" }}>
                    <CountryInfo country={country} />
                    {/* <Box
                        sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        p: 3,
                        borderRadius: 3,
                        boxShadow: 2,
                        }}
                    >
                        <Typography variant="h4" fontWeight={600} mb={2}>
                        {country.name.common}
                        </Typography>
                        <img
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                        style={{ width: "100%", maxWidth: "300px", borderRadius: "8px" }}
                        />
                        <Typography mt={2}><strong>Capital:</strong> {country.capital}</Typography>
                        <Typography><strong>Population:</strong> {country.population.toLocaleString()}</Typography>
                        <Typography><strong>Area:</strong> {country.area} km²</Typography>
                        <Typography><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</Typography>
                        <Typography><strong>Currency:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</Typography>
                        <Typography mt={2}>
                        <strong>Map:</strong>{" "}
                        <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" style={{ color: "#4caf50" }}>
                            View on Google Maps
                        </a>
                        </Typography>
                    </Box> */}
                </Box>

                <Box sx={{ gridColumn: "span 8" }}>
                    <Box
                        sx={{
                        width: "100%",
                        height: "100%",
                        minHeight: "400px",
                        borderRadius: 3,
                        overflow: "hidden",
                        boxShadow: 2,
                        }}
                    >
                        <iframe
                            title={`Map of ${country.name.common}`}
                            src={`https://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&z=5&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Box>
                </Box>
            </Box>        
      </Box>
    )
}

export default CountryDetail