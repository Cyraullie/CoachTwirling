import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
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
import NewMusic from "./pages/NewMusic.js";
import NewTopic from "./pages/NewTopic.js";
import UpdateTopic from "./pages/UpdateTopic.js";
import UpdateTechnic from "./pages/UpdateTechnic.js";
import UpdateLevel from "./pages/UpdateLevel.js";
import UpdateElement from "./pages/UpdateElement.js";
import UpdateVariation from "./pages/UpdateVariation.js";

import Level from "./pages/Level.js";
import NoPage from "./pages/NoPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./components/Login.js";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  window.matchMedia("(max-width: 600px)").addListener((e) => {
    setIsSmallScreen(e.matches);
  });

  useEffect(() => {
    if(sessionStorage.getItem("user_id")){
      setIsLoggedIn(true)
    }
  }, []);

  const handleTokenUpdate = (data) => {
    setIsLoggedIn(data);
  }
  
  return (
    <div className="App">
      <HashRouter>
      {!isSmallScreen && isLoggedIn && <Header />} 
      
      <div className="body">
        
      {isLoggedIn == true ? (
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
          <Route path="music_new" element={<NewMusic />} />
          <Route path="topic_new" element={<NewTopic/>} />
          <Route path="topic_update/:topic_id" element={<UpdateTopic/>} />
          <Route path="technic_update/:technic_id" element={<UpdateTechnic/>} />
          <Route path="level_update/:level_id" element={<UpdateLevel/>} />
          <Route path="element_update/:element_id" element={<UpdateElement/>} />
          <Route path="variation_update/:variation_id" element={<UpdateVariation/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      ) : (
        <Login auth={handleTokenUpdate}/>
      )} 
        
      </div>
      
        
        {isSmallScreen && isLoggedIn && <Footer />} 
      </HashRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));