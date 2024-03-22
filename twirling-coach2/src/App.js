import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Athlete from "./pages/Athlete.js";
import Technic from "./pages/Technic.js";
import Element from "./pages/Element.js";
import Variation from "./pages/Variation.js"
import Level from "./pages/Level.js";
import NoPage from "./pages/NoPage";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";



export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  window.matchMedia("(max-width: 600px)").addListener((e) => {
    setIsSmallScreen(e.matches);
  });
  
  return (
    <div className="App">
      <BrowserRouter>
      {!isSmallScreen && <Header />} 
      
      <div className="body">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="technic" element={<Technic />} />
            <Route path="technic/:id" element={<Level />} />
            <Route path="technic/:groupElementId/level/:levelId" element={<Element />} />
            <Route path="technic/:groupElementId/level/:levelId/variation/:elementId" element={<Variation />} />
            <Route path="athlete" element={<Athlete />} />
            <Route path="music" element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </div>
        
        {isSmallScreen && <Footer />} 
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);