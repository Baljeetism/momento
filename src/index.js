import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals'; // SEO helps to improve the slower part
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "@fontsource/alfa-slab-one";
import "@fontsource/outfit";

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif, Roboto, Alfa Slab One , Outfit',
    
  },
  palette: {
    background: {
      default: '#f8f9fa', // Set the global background color
    },
  },
});


const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  
  ::-webkit-scrollbar {
    display: none;
  }
   {
    scrollbar-width: none; 
  }
  body {
    ms-overflow-style: none;
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  }
`;
document.head.appendChild(globalStyles);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
