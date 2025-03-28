
import React, { useState } from 'react';
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

const Menu = () => {
  const menuData: Record<string, MenuCategory[]> = {
    entradas: [
      {
        category: "Entradas Frias",
        items: [
          {
            name: "Carpaccio de Beterraba",
            description: "Beterraba fatiada finamente, queijo de cabra, nozes caramelizadas e vinagrete de laranja",
            price: "R$ 42",
            image: "https://images.unsplash.com/photo-1607116667981-ff133162a2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Tartar de Filé",
            description: "Carne crua temperada, gema de ovo caipira, mostarda Dijon e chips de batata doce",
            price: "R$ 58",
            image: "https://images.unsplash.com/photo-1579366948929-444cf08051d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Ceviche de Peixe Branco",
            description: "Peixe branco marinado em limão, cebola roxa, coentro, milho e abacate",
            price: "R$ 48",
            image: "https://images.unsplash.com/photo-1604909062060-52d5686d93df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        category: "Entradas Quentes",
        items: [
          {
            name: "Pão de Fermentação Natural",
            description: "Servido com manteiga da casa aromatizada com ervas frescas",
            price: "R$ 24",
            image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Dadinho de Tapioca",
            description: "Cubos de tapioca fritos, servidos com geleia de pimenta artesanal",
            price: "R$ 36",
            image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Cogumelos Salteados",
            description: "Mix de cogumelos na manteiga de ervas e finalizado com queijo de ovelha",
            price: "R$ 44",
            image: "https://images.unsplash.com/photo-1552825927-2cad87549cae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Cordeiro com Crosta de Ervas",
            description: "Servido com risoto de queijo da serra e legumes assados",
            price: "R$ 96",
            image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Magret de Pato",
            description: "Servido ao ponto, purê de abóbora cabotiã e redução de vinho tinto",
            price: "R$ 86",
            image: "https://images.unsplash.com/photo-1562967915-d4023c47f9d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        category: "Pescados",
        items: [
          {
            name: "Peixe do Dia Grelhado",
            description: "Servido com vegetais orgânicos, molho de limão e ervas",
            price: "R$ 78",
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Polvo Confitado",
            description: "Polvo macio servido com batata ao murro, aioli de açafrão e páprica defumada",
            price: "R$ 88",
            image: "https://images.unsplash.com/photo-1611476367756-ef510b56a257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        category: "Vegetarianos",
        items: [
          {
            name: "Risoto de Abóbora e Sálvia",
            description: "Arroz arbóreo cremoso, abóbora assada e queijo parmesão",
            price: "R$ 62",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Gnocchi de Batata Doce",
            description: "Servido com molho de cogumelos selvagens e nozes trufadas",
            price: "R$ 68",
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
            image: "https://images.unsplash.com/photo-1602928302976-23daaf897b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Soufflé de Chocolate",
            description: "Soufflé quente com centro líquido e sorvete de baunilha",
            price: "R$ 36",
            image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Tarte Tatin",
            description: "Torta de maçã caramelizada servida morna com creme de confeiteiro",
            price: "R$ 34",
            image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
        ]
      }
    ]
  };

  return (
    <section id="menu" className="section-padding bg-restaurant-cream/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-restaurant-orange mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-restaurant-charcoal/80">
            Uma seleção de pratos que destacam os melhores ingredientes sazonais da nossa região
          </p>
        </div>

        <Tabs defaultValue="entradas" className="w-full max-w-4xl mx-auto animate-on-scroll">
          <TabsList className="w-full bg-restaurant-cream/50 p-1 mb-8">
            <TabsTrigger 
              value="entradas" 
              className={cn(
                "text-lg font-medium data-[state=active]:bg-restaurant-orange/10",
                "data-[state=active]:text-restaurant-orange py-3 flex-1"
              )}
            >
              Entradas
            </TabsTrigger>
            <TabsTrigger 
              value="principais" 
              className={cn(
                "text-lg font-medium data-[state=active]:bg-restaurant-orange/10",
                "data-[state=active]:text-restaurant-orange py-3 flex-1"
              )}
            >
              Pratos Principais
            </TabsTrigger>
            <TabsTrigger 
              value="sobremesas" 
              className={cn(
                "text-lg font-medium data-[state=active]:bg-restaurant-orange/10",
                "data-[state=active]:text-restaurant-orange py-3 flex-1"
              )}
            >
              Sobremesas
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(menuData).map(([key, categories]) => (
            <TabsContent key={key} value={key} className="pt-4">
              {categories.map((category, idx) => (
                <div key={idx} className="mb-12">
                  <h3 className="text-2xl font-playfair font-medium text-restaurant-orange mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="space-y-8">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="md:flex">
                          {item.image && (
                            <div className="md:w-1/3 h-48 md:h-auto">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="p-6 md:w-2/3">
                            <div className="flex justify-between items-start">
                              <h4 className="text-xl font-playfair font-medium text-restaurant-charcoal">
                                {item.name}
                              </h4>
                              <div className="text-xl font-playfair font-medium text-restaurant-orange whitespace-nowrap ml-4">
                                {item.price}
                              </div>
                            </div>
                            <p className="text-sm text-restaurant-charcoal/80 mt-2">
                              {item.description}
                            </p>
                          </div>
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
