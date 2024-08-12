import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../Components/Home";
import History from "../Components/History";
import Header from '../Components/Header';
import Leistungen from "../Components/Leistungen";
import Contact from "../Components/Contact";
import Partner from "../Components/Partner";
import Footer from '../Components/Footer';

function App() {


  return (
    <>
      
      <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<Partner />} />
          
        </Routes>
        <Footer/>
    </Router>
     
    </>
  )
}

export default App