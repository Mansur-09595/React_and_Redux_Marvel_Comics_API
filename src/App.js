import { Routes, Route } from "react-router-dom";
import HeroesCards from "./components/HeroesCards/HeroesCards";
import AboutHero from './components/AboutHero/AboutHero';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Comics from './Comics';
import AboutComics from './components/AboutComics/AboutComics';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" 
            element={<HeroesCards />} />
          <Route path='comics'
            element={<Comics />} />
          <Route path='comics/:id'
            element={<AboutComics />} />
          <Route path="/character/:id"  
            element={<AboutHero />} />
        </Routes>
      </div>
    )
}

export default App;
