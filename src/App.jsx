// import Login from "./composants/login/Login"


import Bienvenue from "./composants/Routes/Bienvenue";
import Blog from "./composants/Routes/Blog";
import React from 'react';
import Nosproduit from "./composants/Routes/Nos_produit";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './composants/login/Login.jsx'




function App() {
  return (

   
    <Router>
    <Routes>
      <Route path="/" element={<Bienvenue />} />
      <Route path="/blog" element={<Blog />} /> 
      <Route path="/produit" element={<Nosproduit />} />
      <Route path="/compte" element={<Login />} />

       

    </Routes>
  </Router>

  

   

   

  )
}


export default App