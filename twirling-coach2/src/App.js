import ReactDOM from "react-dom";
import React, { useState } from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home.js";
import Music from "./pages/Music.js";
import Athlete from "./pages/Athlete.js";
import Technic from "./pages/Technic.js";
import Element from "./pages/Element.js";
import Variation from "./pages/Variation.js"
import NewVariation from "./pages/NewVariation.js"
import NewElement from "./pages/NewElement.js"
import NewLevel from "./pages/NewLevel.js"
import NewTechnic from "./pages/NewGroupElement.js"
import NewAthlete from "./pages/NewAthlete.js"
import Level from "./pages/Level.js";
import NoPage from "./pages/NoPage";

import Header from "./components/Header";
import Footer from "./components/Footer";



export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  window.matchMedia("(max-width: 600px)").addListener((e) => {
    setIsSmallScreen(e.matches);
  });

  //TODO mettre le texte des nom de musique a gauche
  //TODO ajouter la fonctionnalité pour ajouté des musiques
  
  return (
    <div className="App">
      <HashRouter>
      {!isSmallScreen && <Header />} 
      
      <div className="body">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="technic" element={<Technic />} />
            <Route path="technic/:id" element={<Level />} />
            <Route path="technic/:groupElementId/level/:levelId" element={<Element />} />
            <Route path="technic/:groupElementId/level/:levelId/variation/:elementId" element={<Variation />} />
            <Route path="technic/:groupElementId/level/:levelId/variation/:elementId/variation_new" element={<NewVariation />} />
            <Route path="technic/:groupElementId/level/:levelId/element_new" element={<NewElement />} />
            <Route path="technic/:groupElementId/level_new" element={<NewLevel/>} />
            <Route path="technic_new" element={<NewTechnic />} />
            <Route path="athlete_new" element={<NewAthlete />} />
            <Route path="athlete" element={<Athlete />} />
            <Route path="music" element={<Music />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </div>
        
        {isSmallScreen && <Footer />} 
      </HashRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));