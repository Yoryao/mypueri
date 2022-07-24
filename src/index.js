import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";
import Formacion from "./routes/Formacion";
import Inicio from "./routes/Inicio";
import NoEncontrada from "./routes/NoEncontrada"
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
          
          <Route index element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
