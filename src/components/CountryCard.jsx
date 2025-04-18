import React from "react";
import { Card, CardContent, Typography } from "@mui/material";


const CountryCard = ({ country }) => {
  return (
    <Card       
        sx={{
          width: 220,
          height: 340,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "2px solid #a5d6a7",
          borderRadius: "12px",
          backgroundColor: "rgba(255,255,255,0.85)",
          boxShadow: 2,
          transition: "transform 0.2s ease",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <CardContent         
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
          textAlign: "center",
        }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#388e3c" }}>
          {country.name.common}
        </Typography>
        <Typography variant="body2">
          Capital: {country.capital?.[0] || "N/A"}
        </Typography>
        <Typography variant="body2">
          Population: {country.population.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;