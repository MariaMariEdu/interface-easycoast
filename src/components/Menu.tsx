import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
const Menu = () => {
  const galleryItems = [{
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Ambiente Acolhedor",
    description: "Um espaço sofisticado e aconchegante para suas refeições especiais"
  }, {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Salão Principal",
    description: "Design contemporâneo com elementos rústicos que criam uma atmosfera única"
  }, {
    image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Nossa Cozinha",
    description: "Onde a magia acontece: pratos preparados com ingredientes frescos e muito amor"
  }];
  return <section className="section-padding bg-restaurant-beige/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-[#4f082d]">
            Conheça Nosso Espaço
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-restaurant-charcoal/80">
            Um ambiente acolhedor que une tradição e modernidade para proporcionar momentos únicos
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {galleryItems.map((item, index) => <CarouselItem key={index}>
                <Card className="border-none">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img src={item.image} alt={item.title} className="w-full aspect-[16/9] object-cover rounded-lg" />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6 rounded-b-lg">
                        <h3 className="text-2xl font-playfair text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/90">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>;
};
export default Menu;