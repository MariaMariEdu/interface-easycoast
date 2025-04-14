
import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';

const Events = () => {
  const events = [{
    id: 1,
    title: "Noite de Vinhos",
    description: "Degustação de vinhos regionais harmonizados com tábuas de queijos e charcutaria selecionada.",
    date: "17 de Novembro",
    capacity: "30 pessoas",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }, {
    id: 2,
    title: "Workshop de Culinária",
    description: "Aprenda a preparar pratos tradicionais da nossa região com o Chef Paulo Mendonça.",
    date: "25 de Novembro",
    capacity: "15 pessoas",
    image: "https://images.unsplash.com/photo-1556910103-1c02745adc8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }, {
    id: 3,
    title: "Jantar com Música ao Vivo",
    description: "Uma noite especial com músicos locais e um menu degustação exclusivo.",
    date: "10 de Dezembro",
    capacity: "50 pessoas",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }];

  return (
    <section id="events" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-restaurant-charcoal mb-4">
            Eventos Especiais
          </h2>
          <p className="text-restaurant-brown/80 max-w-2xl mx-auto">
            Junte-se a nós em nossos eventos exclusivos, onde a gastronomia se encontra com experiências memoráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-restaurant-charcoal mb-2">{event.title}</h3>
                <p className="text-restaurant-brown/80 mb-4">{event.description}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-restaurant-brown">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-restaurant-brown">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{event.capacity}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-restaurant-brown text-restaurant-brown hover:bg-restaurant-brown hover:text-white">
                  Reservar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
