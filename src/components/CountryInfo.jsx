import { Box, Card, CardContent, Typography } from "@mui/material";

export function CountryInfo({ country }) {
  const {flags, name,  capital, population, area, languages, currencies, maps} = country
  return (
    <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
      {name.common && (
        <Typography variant="h5" align="center" sx={{ mb: 2, color: "#568758" }}><strong>
          {name.common}
          </strong></Typography>
      )}

      <Box sx={{ textAlign: "center", mb: 2 }}>
        <img
          src={flags.svg}
          alt={`Flag of ${name.common}`}
          style={{ width: "60%", borderRadius: 8 }}
        />
      </Box>

      <CardContent sx={{ color: "primary.main" }}>
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

