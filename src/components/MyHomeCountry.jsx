    import { useEffect, useState } from "react";
    import { CountryInfo } from "./CountryInfo";
    import { Button, Typography, Box} from "@mui/material";

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
      );
    }

export default MyHomeCountry