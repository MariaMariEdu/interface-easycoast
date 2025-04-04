import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const Contact = () => {
  return <section id="contact" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-restaurant-brown mb-6 relative">
              <span className="relative z-10">Contato</span>
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-restaurant-olive"></span>
            </h2>
            <p className="mb-8 text-lg">
              Deseja fazer uma reserva ou tem alguma dúvida? Entre em contato conosco. 
              Nossa equipe terá o prazer em atendê-lo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-restaurant-cream p-3 rounded-full">
                  <Phone className="text-restaurant-brown" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-restaurant-brown">Telefone</h3>
                  <p className="text-restaurant-charcoal/80">(11) 4567-8901</p>
                  <p className="text-restaurant-charcoal/80">(11) 99876-5432</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-restaurant-cream p-3 rounded-full">
                  <Mail className="text-restaurant-brown" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-restaurant-brown">Email</h3>
                  <p className="text-restaurant-charcoal/80">reservas@terraemesa.com.br</p>
                  <p className="text-restaurant-charcoal/80">contato@terraemesa.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-restaurant-cream p-3 rounded-full">
                  <MapPin className="text-restaurant-brown" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-restaurant-brown">Endereço</h3>
                  <p className="text-restaurant-charcoal/80">Rua das Oliveiras, 123</p>
                  <p className="text-restaurant-charcoal/80">Vale Verde, São Paulo - SP</p>
                  <p className="text-restaurant-charcoal/80">CEP: 01234-567</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-restaurant-brown mb-2">Horário de Funcionamento</h3>
              <p className="text-restaurant-charcoal/80">
                <span className="font-medium">Terça a Quinta:</span> 18h às 23h
              </p>
              <p className="text-restaurant-charcoal/80">
                <span className="font-medium">Sexta e Sábado:</span> 12h às 15h e 18h às 00h
              </p>
              <p className="text-restaurant-charcoal/80">
                <span className="font-medium">Domingo:</span> 12h às 17h
              </p>
              <p className="text-restaurant-charcoal/80">
                <span className="font-medium">Segunda:</span> Fechado
              </p>
            </div>
          </div>

          <div className="md:w-1/2 animate-on-scroll">
            <div className="p-8 rounded-lg shadow-md bg-[#dbc2ab]/[0.31]">
              <h3 className="text-2xl font-playfair font-medium text-restaurant-brown mb-6">
                Faça sua Reserva
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                      Nome
                    </label>
                    <input type="text" id="name" className="w-full border border-restaurant-beige rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-restaurant-brown" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                      Telefone
                    </label>
                    <input type="tel" id="phone" className="w-full border border-restaurant-beige rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-restaurant-brown" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full border border-restaurant-beige rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-restaurant-brown" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                      Data
                    </label>
                    <input type="date" id="date" className="w-full border border-restaurant-beige rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-restaurant-brown" />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                      Horário
                    </label>
                    <select id="time" className="w-full border border-restaurant-beige rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-restaurant-brown">
                      <option value="">Selecione...</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                    Número de Pessoas
                  </label>
                  <select id="guests" className="w-full border border-restaurant-beige rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-restaurant-brown">
                    <option value="">Selecione...</option>
                    <option value="1">1 pessoa</option>
                    <option value="2">2 pessoas</option>
                    <option value="3-4">3-4 pessoas</option>
                    <option value="5-6">5-6 pessoas</option>
                    <option value="7+">7 ou mais pessoas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-restaurant-charcoal mb-1">
                    Observações
                  </label>
                  <textarea id="message" rows={3} className="w-full border border-restaurant-beige rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-restaurant-brown" placeholder="Ocasião especial, restrições alimentares, etc."></textarea>
                </div>

                <Button type="submit" className={cn("w-full bg-restaurant-brown text-white hover:bg-restaurant-brown/90", "font-medium")}>
                  Enviar Reserva
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;