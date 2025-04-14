import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Book, ChefHat, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: <Home size={18} />, url: "/" },
    { name: "Quem Somos", icon: <Book size={18} />, url: "/#about" },
    { name: "Cardápio", icon: <ChefHat size={18} />, url: "/menu" },
    { name: "Eventos", icon: <Calendar size={18} />, url: "/eventos" },
  ];

  return (
    <nav className={cn(
      "fixed w-full px-6 md:px-10 py-4 transition-all duration-300 z-50",
      scrolled ? "bg-restaurant-brown shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Links desktop à esquerda */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.slice(0, 2).map((item) => (
            <Link 
              key={item.name}
              to={item.url}
              className="flex items-center space-x-2 text-white hover:text-restaurant-cream transition-colors font-medium"
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Logo centralizado */}
        <Link to="/" className="flex items-center justify-center flex-grow md:flex-grow-0">
          <span className="text-2xl md:text-3xl font-playfair font-semibold text-restaurant-beige">
            Terra & Mesa
          </span>
        </Link>

        {/* Links desktop à direita */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.slice(2).map((item) => (
            <Link 
              key={item.name}
              to={item.url}
              className="flex items-center space-x-2 text-white hover:text-restaurant-cream transition-colors font-medium"
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Menu mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu dropdown mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-restaurant-brown shadow-lg py-4 px-6 z-50 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              className="flex items-center py-3 space-x-3 text-white hover:text-restaurant-cream"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
