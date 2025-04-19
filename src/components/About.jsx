import { Box, Typography, Link } from "@mui/material";

const About = () => {
    return (
      <Box
        sx = {{
          maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        color: "#2e7d32", // тёмно-зелёный
        "& > *:not(:last-child)": {
          marginBottom: 3, // 24px
        },
        }}
        >
          <Typography variant="h4" sx={{ mb: 3 }} gutterBottom fontWeight="bold" color="inherit">
            About this project
          </Typography>
          <Typography variant="1" paragraph mb={2}>
            This web application was built as a React project using the {" "}
            <Link
                href="https://restcountries.com/" 
                target="_blank" 
                rel="noreferrer"
                underline="hover"
                sx={{ color: "#66bb6a" }}
                >
                REST Countries API
            </Link>{" "}
            to display information about countries around the world.
          </Typography>
          <Typography variant="1" paragraph 
          >
          The app allows users to search for countries, view basic info such as
          capital, population, area, languages and currencies, and explore detailed
          data by clicking on a country.
          </Typography>
          <Typography variant="1" paragraph
          >
          It is built with <strong>React</strong> functional components, uses{" "}
          <strong>hooks</strong> for state and effect management, and{" "}
          <strong>React Router</strong> for client-side navigation.
          </Typography>
          <Typography variant="1" paragraph
          >
          For better user experience, it includes pagination and embedded Google
          Maps for each country.
          </Typography>
          <Typography variant="subtitle1" mt={4}
          >
          Created by Jekaterina Shashkina — 2025
          </Typography>
        </Box>

    )
}
export default About