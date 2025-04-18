// src/components/CountryInfo.js
import { Box, Card, CardContent, Typography } from "@mui/material";

function CountryInfo({ country, title }) {
  const {capital, population, area, languages, currencies, maps} = country
  return (
    <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
      {title && (
        <Typography variant="h5" align="center" sx={{ mb: 2 }}>
          {title}
        </Typography>
      )}

      <Box sx={{ textAlign: "center", mb: 2 }}>
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          style={{ width: "60%", borderRadius: 8 }}
        />
      </Box>

      <CardContent>
        <Typography><strong>Capital:</strong> {capital}</Typography>
        <Typography><strong>Population:</strong> {population.toLocaleString()}</Typography>
        <Typography><strong>Area:</strong> {area} km²</Typography>
        <Typography><strong>Languages:</strong> {Object.values(languages || {}).join(", ")}</Typography>
        <Typography><strong>Currency:</strong> {Object.values(currencies || {}).map(c => c.name).join(", ")}</Typography>
        <Typography>
          <strong>Map:</strong>{" "}
          <a
            href={maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#66bb6a" }}
          >
            Open
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryInfo;
