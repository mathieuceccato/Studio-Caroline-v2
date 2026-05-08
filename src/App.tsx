import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Marquee from './components/Marquee';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Processus from './components/Processus';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Journal from './components/Journal';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  },[]);

  const marqueeWords = ['Architecture','✦','Design','✦','Patrimoine','✦','Curation','✦','Mobilier','✦'];

  return (
    <>
      <NavBar open={open} setOpen={setOpen} scrolled={scrolled}/>
      <main>
        <Hero />
        {/* {tweaks.heroVariant === 'marquee' && ( */}
          <Marquee items={marqueeWords} speed={45}/>
        {/* )} */}
        <Manifesto/>
        <Services/>
        <Processus/>
        <Portfolio/>
        <Testimonials/>
        <Journal/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
};

export default App
