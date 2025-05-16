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
              <span className="relative z-10 text-[#4f082d]">Contato</span>
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

          
        </div>
      </div>
    </section>;
};
export default Contact;