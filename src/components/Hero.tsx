
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return <section id="home" className="hero-section overlay-dark">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      backgroundPosition: "center"
    }}></div>
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4 drop-shadow-lg">
          Tradição & Sofisticação
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto">
          Uma experiência gastronômica que celebra os sabores regionais com um toque contemporâneo
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className={cn("bg-restaurant-cream text-restaurant-charcoal hover:bg-restaurant-beige", "border-2 border-restaurant-cream font-medium px-8")}>
            Reserve uma Mesa
          </Button>
          <Button variant="outline" size="lg" className="text-base font-semibold bg-slate-100">
            Ver Cardápio
          </Button>
        </div>
      </div>
    </section>;
};

export default Hero;
