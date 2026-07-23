// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { StrictMode } from "react";


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);