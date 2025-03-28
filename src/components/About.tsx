
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-restaurant-brown mb-6 relative">
              <span className="relative z-10">Quem Somos</span>
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-restaurant-olive"></span>
            </h2>
            <p className="mb-6 text-lg">
              Fundado em 2010, o <span className="italic font-medium">Terra & Mesa</span> nasceu da paixão por celebrar os 
              sabores e tradições da nossa região, apresentados com uma visão contemporânea e refinada.
            </p>
            <p className="mb-6 text-lg">
              Nossa cozinha valoriza a proximidade com produtores locais, a sazonalidade dos ingredientes e as 
              técnicas tradicionais que contam histórias através dos sabores.
            </p>
            <p className="mb-6 text-lg">
              Sob a liderança do Chef Paulo Mendonça, nossa equipe trabalha diariamente para criar uma experiência 
              gastronômica memorável, em um ambiente que harmoniza o rústico e o elegante.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80" 
                alt="Assinatura do Chef" 
                className="w-24 h-auto"
              />
              <div>
                <p className="font-playfair text-lg font-medium">Chef Paulo Mendonça</p>
                <p className="text-sm text-muted-foreground">Chef-proprietário</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4 animate-on-scroll">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Prato do restaurante" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Interior do restaurante" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Ambiente do restaurante" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
