
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const Menu = () => {
  const menuData: Record<string, MenuCategory[]> = {
    entradas: [
      {
        category: "Entradas Frias",
        items: [
          {
            name: "Carpaccio de Beterraba",
            description: "Beterraba fatiada finamente, queijo de cabra, nozes caramelizadas e vinagrete de laranja",
            price: "R$ 42"
          },
          {
            name: "Tartar de Filé",
            description: "Carne crua temperada, gema de ovo caipira, mostarda Dijon e chips de batata doce",
            price: "R$ 58"
          },
          {
            name: "Ceviche de Peixe Branco",
            description: "Peixe branco marinado em limão, cebola roxa, coentro, milho e abacate",
            price: "R$ 48"
          }
        ]
      },
      {
        category: "Entradas Quentes",
        items: [
          {
            name: "Pão de Fermentação Natural",
            description: "Servido com manteiga da casa aromatizada com ervas frescas",
            price: "R$ 24"
          },
          {
            name: "Dadinho de Tapioca",
            description: "Cubos de tapioca fritos, servidos com geleia de pimenta artesanal",
            price: "R$ 36"
          },
          {
            name: "Cogumelos Salteados",
            description: "Mix de cogumelos na manteiga de ervas e finalizado com queijo de ovelha",
            price: "R$ 44"
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
            price: "R$ 92"
          },
          {
            name: "Cordeiro com Crosta de Ervas",
            description: "Servido com risoto de queijo da serra e legumes assados",
            price: "R$ 96"
          },
          {
            name: "Magret de Pato",
            description: "Servido ao ponto, purê de abóbora cabotiã e redução de vinho tinto",
            price: "R$ 86"
          }
        ]
      },
      {
        category: "Pescados",
        items: [
          {
            name: "Peixe do Dia Grelhado",
            description: "Servido com vegetais orgânicos, molho de limão e ervas",
            price: "R$ 78"
          },
          {
            name: "Polvo Confitado",
            description: "Polvo macio servido com batata ao murro, aioli de açafrão e páprica defumada",
            price: "R$ 88"
          }
        ]
      },
      {
        category: "Vegetarianos",
        items: [
          {
            name: "Risoto de Abóbora e Sálvia",
            description: "Arroz arbóreo cremoso, abóbora assada e queijo parmesão",
            price: "R$ 62"
          },
          {
            name: "Gnocchi de Batata Doce",
            description: "Servido com molho de cogumelos selvagens e nozes trufadas",
            price: "R$ 68"
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
            price: "R$ 32"
          },
          {
            name: "Soufflé de Chocolate",
            description: "Soufflé quente com centro líquido e sorvete de baunilha",
            price: "R$ 36"
          },
          {
            name: "Tarte Tatin",
            description: "Torta de maçã caramelizada servida morna com creme de confeiteiro",
            price: "R$ 34"
          }
        ]
      }
    ]
  };

  return (
    <section id="menu" className="section-padding bg-restaurant-beige/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-restaurant-brown mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-restaurant-charcoal/80">
            Uma seleção de pratos que destacam os melhores ingredientes sazonais da nossa região
          </p>
        </div>

        <Tabs defaultValue="entradas" className="w-full max-w-4xl mx-auto animate-on-scroll">
          <TabsList className="w-full bg-restaurant-beige/50 p-1 mb-8">
            <TabsTrigger 
              value="entradas" 
              className={cn(
                "text-lg font-medium data-[state=active]:bg-restaurant-cream",
                "data-[state=active]:text-restaurant-brown py-3 flex-1"
              )}
            >
              Entradas
            </TabsTrigger>
            <TabsTrigger 
              value="principais" 
              className={cn(
                "text-lg font-medium data-[state=active]:bg-restaurant-cream",
                "data-[state=active]:text-restaurant-brown py-3 flex-1"
              )}
            >
              Pratos Principais
            </TabsTrigger>
            <TabsTrigger 
              value="sobremesas" 
              className={cn(
                "text-lg font-medium data-[state=active]:bg-restaurant-cream",
                "data-[state=active]:text-restaurant-brown py-3 flex-1"
              )}
            >
              Sobremesas
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(menuData).map(([key, categories]) => (
            <TabsContent key={key} value={key} className="pt-4">
              {categories.map((category, idx) => (
                <div key={idx} className="mb-12">
                  <h3 className="text-2xl font-playfair font-medium text-restaurant-brown mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="menu-item">
                        <div>
                          <h4 className="text-xl font-playfair font-medium text-restaurant-charcoal">
                            {item.name}
                          </h4>
                          <p className="text-sm text-restaurant-charcoal/80 mt-1">
                            {item.description}
                          </p>
                        </div>
                        <div className="menu-item-price">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-sm italic text-restaurant-charcoal/70">
            Adaptamos nossos pratos para restrições alimentares. Consulte nosso atendimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
