// import Login from "./composants/login/Login"


import Bienvenue from "./composants/Routes/Bienvenue";
import Blog from "./composants/Routes/Blog";
import React from 'react';
import Nosproduit from "./composants/Routes/Nos_produit";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './composants/login/Login.jsx'
import Inscription from "./composants/register/Register.jsx";
import Sinscrire from "./composants/register/Sinscrire.jsx";
import Image from './assets/BgBlog.56328a0729f45c28861a.png'
import Image1 from './assets/producteur.png'
import Partenaire from "./composants/register/Partenaire.jsx";



function App() {
  return (

   
    <Router>
    <Routes>
      <Route path="/" element={<Bienvenue/>} />
      <Route path="/blog" element={<Blog/>} /> 
      <Route path="/produit" element={<Nosproduit />} />
      <Route path="/compte" element={<Login />} />
      <Route path="/inscrire" element={<Inscription/>} />
      <Route path="/producteur" element={<Sinscrire img={Image1} />}  />
      <Route path="/entreprise" element={<Sinscrire  img={Image} />} />
      <Route path="/partanariat" element={<Partenaire />} />





       

    </Routes>
  </Router>

  

   

   

  )
}


export default App