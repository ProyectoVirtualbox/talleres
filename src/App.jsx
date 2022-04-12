import React from "react";
import {BrowserRouter, Switch, Route, Routes} from "react-router-dom";
import 'styles/styles.css';
import Login from 'pages/Login';
import Registro from "pages/Registro";
import Admin from "pages/Admin";
import Index from "pages/Index"
import PublicLayout from "layouts/PublicLayout";


function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          
            <Route path="/login" element={<Login/>} />
            <Route path="/registro" element={<Registro/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/" element={<Index/>} />
          
        </Routes>
      
    </BrowserRouter>      
  );
}

export default App;
