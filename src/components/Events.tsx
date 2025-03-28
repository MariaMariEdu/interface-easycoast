
import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Noite de Vinhos",
      description: "Degustação de vinhos regionais harmonizados com tábuas de queijos e charcutaria selecionada.",
      date: "17 de Novembro",
      capacity: "30 pessoas",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Workshop de Culinária",
      description: "Aprenda a preparar pratos tradicionais da nossa região com o Chef Paulo Mendonça.",
      date: "25 de Novembro",
      capacity: "15 pessoas",
      image: "https://images.unsplash.com/photo-1556910103-1c02745adc8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Jantar com Música ao Vivo",
      description: "Uma noite especial com músicos locais e um menu degustação exclusivo.",
      date: "10 de Dezembro",
      capacity: "50 pessoas",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section id="events" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-restaurant-brown mb-4">
            Nossos Eventos
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-restaurant-charcoal/80">
            Experiências gastronômicas únicas e momentos memoráveis para compartilhar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={cn(
                "bg-restaurant-cream border border-restaurant-beige rounded-lg overflow-hidden",
                "flex flex-col transition-transform hover:shadow-lg hover:-translate-y-1"
              )}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-playfair font-semibold text-restaurant-brown mb-3">
                  {event.title}
                </h3>
                <p className="text-restaurant-charcoal/80 mb-4 flex-1">
                  {event.description}
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-restaurant-charcoal/70">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-restaurant-charcoal/70">
                    <Users size={16} />
                    <span>Capacidade: {event.capacity}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 border-restaurant-olive text-restaurant-olive hover:bg-restaurant-olive hover:text-white"
                >
                  Reservar
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button 
            size="lg" 
            className={cn(
              "bg-restaurant-brown text-white hover:bg-restaurant-brown/90",
              "font-medium px-8"
            )}
          >
            Ver Todos os Eventos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
