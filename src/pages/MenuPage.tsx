
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const MenuPage = () => {
  const menuData: Record<string, MenuCategory[]> = {
    entradas: [
      {
        category: "Entradas Frias",
        items: [
          {
            name: "Carpaccio de Beterraba",
            description: "Beterraba fatiada finamente, queijo de cabra, nozes caramelizadas e vinagrete de laranja",
            price: "R$ 42",
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          },
          {
            name: "Tartar de Filé",
            description: "Carne crua temperada, gema de ovo caipira, mostarda Dijon e chips de batata doce",
            price: "R$ 58",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
          },
          {
            name: "Ceviche de Peixe Branco",
            description: "Peixe branco marinado em limão, cebola roxa, coentro, milho e abacate",
            price: "R$ 48",
            image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      }
    ],
    principais: [
      {
        category: "Carnes",
        items: [
          {
            name: "Costela de Boi Braseada",
            description: "Cozida lentamente por 12 horas, purê de mandioca e molho de agrião",
            price: "R$ 92",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
          }
        ]
      }
    ],
    sobremesas: [
      {
        category: "Doces",
        items: [
          {
            name: "Pudim de Leite",
            description: "Tradicional pudim com calda de caramelo e cumaru",
            price: "R$ 32",
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-restaurant-beige/30 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-restaurant-brown text-center mb-12">
          Nosso Cardápio
        </h1>
        
        <Tabs defaultValue="entradas" className="w-full max-w-6xl mx-auto">
          <TabsList className="w-full bg-restaurant-cream/50 p-1 mb-8">
            <TabsTrigger 
              value="entradas" 
              className={cn(
                "text-lg font-medium data-[state=active]:bg-restaurant-brown",
                "data-[state=active]:text-white py-3 flex-1"
              )}
            >
              Entradas
            </TabsTrigger>
            <TabsTrigger 
              value="principais" 
              className={cn(
                "text-lg font-medium data-[state=active]:bg-restaurant-brown",
                "data-[state=active]:text-white py-3 flex-1"
              )}
            >
              Pratos Principais
            </TabsTrigger>
            <TabsTrigger 
              value="sobremesas" 
              className={cn(
                "text-lg font-medium data-[state=active]:bg-restaurant-brown",
                "data-[state=active]:text-white py-3 flex-1"
              )}
            >
              Sobremesas
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(menuData).map(([key, categories]) => (
            <TabsContent key={key} value={key} className="pt-4">
              {categories.map((category, idx) => (
                <div key={idx} className="mb-12">
                  <h2 className="text-3xl font-playfair font-medium text-restaurant-brown mb-8 text-center">
                    {category.category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIdx) => (
                      <Card key={itemIdx} className="overflow-hidden">
                        {item.image && (
                          <div className="relative h-48 w-full">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <h3 className="text-xl font-playfair font-medium text-restaurant-brown mb-2">
                            {item.name}
                          </h3>
                          <p className="text-sm text-restaurant-charcoal/80 mb-3">
                            {item.description}
                          </p>
                          <p className="text-lg font-semibold text-restaurant-brown">
                            {item.price}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default MenuPage;
