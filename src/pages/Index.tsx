
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Implementar animação no scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // Elemento aparece quando está a 100px do fundo da tela
        if (position.top < window.innerHeight - 100) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Disparar uma vez para elementos já visíveis
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
