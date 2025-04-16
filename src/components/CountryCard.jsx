import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <Card className="country-card">
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="country-flag"
      />
      <CardContent className="card-content">
        <Typography variant="h6" className="country-name">
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