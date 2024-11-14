import Bienvenue from "./composants/Routes/Bienvenue";
import Blog from "./composants/Routes/Blog";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
   
    <Router>
    <Routes>
      <Route path="/" element={<Bienvenue />} />
      <Route path="/blog" element={<Blog />} /> 
    </Routes>
  </Router>
  );
}

export default App;
