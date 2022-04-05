import React from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Home from './components/Home';
import About from './components/About';
import Astrology from './components/Astrology';
import Saama from './components/Saama';
import Accompaniment from './components/Accompaniment';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Home />
      <About />
      <Astrology />
      <Saama />
      <Accompaniment />
      <Contact />
      <Footer />
    </>
  )
}

export default App;