import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
  return;
};
export default Events;