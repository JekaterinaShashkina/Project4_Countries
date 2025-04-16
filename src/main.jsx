import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
  palette: {
    primary: {
      main: '#66bb6a', // например, твой зелёный
    },
    success: {
      main: '#a5d6a7',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
