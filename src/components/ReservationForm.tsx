
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ReservationForm = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-restaurant-charcoal mb-4">
              Faça sua Reserva
            </h2>
            <p className="text-restaurant-brown/80">
              Reserve sua mesa e prepare-se para uma experiência gastronômica única.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input type="text" id="name" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input type="tel" id="phone" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="seu@email.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Data</Label>
                  <Input type="date" id="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Horário</Label>
                  <select id="time" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option value="">Selecione o horário</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Número de Pessoas</Label>
                <select id="guests" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option value="">Selecione o número de pessoas</option>
                  <option value="1">1 pessoa</option>
                  <option value="2">2 pessoas</option>
                  <option value="3-4">3-4 pessoas</option>
                  <option value="5-6">5-6 pessoas</option>
                  <option value="7+">7 ou mais pessoas</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Observações</Label>
                <textarea 
                  id="notes" 
                  className="w-full min-h-[100px] rounded-md border border-input bg-background p-3"
                  placeholder="Ocasião especial, restrições alimentares, etc."
                />
              </div>

              <Button type="submit" className="w-full bg-restaurant-brown text-white hover:bg-restaurant-brown/90">
                Confirmar Reserva
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
