import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
        fontSize: '3.2rem',
        fontWeight: 700,
        color: '#568758',
        lineHeight: 1.1,
        textAlign: 'center', 
      },
  },
  palette: {
    primary: { main: "#66bb6a" },
    success: { main: "#a5d6a7" },
  },

});

export default theme;