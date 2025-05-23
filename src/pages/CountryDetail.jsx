import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Typography, Box} from "@mui/material";
import { CountryInfo} from "../components/CountryInfo"

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