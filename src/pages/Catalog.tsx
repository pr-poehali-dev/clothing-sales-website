import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string[];
  color: string[];
  style: string;
}

const products: Product[] = [
  { id: 1, name: 'Классическое пальто', price: 24990, image: '/placeholder.svg', size: ['S', 'M', 'L'], color: ['Бежевый', 'Черный'], style: 'Классика' },
  { id: 2, name: 'Шерстяной свитер', price: 8990, image: '/placeholder.svg', size: ['M', 'L', 'XL'], color: ['Серый', 'Черный'], style: 'Повседневный' },
  { id: 3, name: 'Льняная рубашка', price: 6490, image: '/placeholder.svg', size: ['S', 'M', 'L'], color: ['Белый', 'Бежевый'], style: 'Повседневный' },
  { id: 4, name: 'Костюм из шерсти', price: 45990, image: '/placeholder.svg', size: ['M', 'L'], color: ['Черный', 'Синий'], style: 'Деловой' },
  { id: 5, name: 'Кашемировый кардиган', price: 16990, image: '/placeholder.svg', size: ['S', 'M', 'L', 'XL'], color: ['Серый', 'Бежевый'], style: 'Классика' },
  { id: 6, name: 'Хлопковая футболка', price: 2990, image: '/placeholder.svg', size: ['S', 'M', 'L', 'XL'], color: ['Белый', 'Черный'], style: 'Повседневный' },
];

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['Белый', 'Черный', 'Серый', 'Бежевый', 'Синий'];
  const styles = ['Классика', 'Повседневный', 'Деловой'];

  const toggleFilter = (value: string, current: string[], setter: (val: string[]) => void) => {
    if (current.includes(value)) {
      setter(current.filter(v => v !== value));
    } else {
      setter([...current, value]);
    }
  };

  const filteredProducts = products.filter(product => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const sizeMatch = selectedSizes.length === 0 || product.size.some(s => selectedSizes.includes(s));
    const colorMatch = selectedColors.length === 0 || product.color.some(c => selectedColors.includes(c));
    const styleMatch = selectedStyles.length === 0 || selectedStyles.includes(product.style);
    return priceMatch && sizeMatch && colorMatch && styleMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl mb-12 text-center animate-fade-in">Каталог</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="space-y-8">
            <div className="bg-card p-6 rounded-sm border border-border">
              <h3 className="text-xl mb-4">Фильтры</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Цена</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50000}
                    step={1000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0]} ₽</span>
                    <span>{priceRange[1]} ₽</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Размер</h4>
                  <div className="space-y-2">
                    {sizes.map(size => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox
                          id={`size-${size}`}
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
                        />
                        <label htmlFor={`size-${size}`} className="text-sm cursor-pointer">{size}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Цвет</h4>
                  <div className="space-y-2">
                    {colors.map(color => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox
                          id={`color-${color}`}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={() => toggleFilter(color, selectedColors, setSelectedColors)}
                        />
                        <label htmlFor={`color-${color}`} className="text-sm cursor-pointer">{color}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Стиль</h4>
                  <div className="space-y-2">
                    {styles.map(style => (
                      <div key={style} className="flex items-center space-x-2">
                        <Checkbox
                          id={`style-${style}`}
                          checked={selectedStyles.includes(style)}
                          onCheckedChange={() => toggleFilter(style, selectedStyles, setSelectedStyles)}
                        />
                        <label htmlFor={`style-${style}`} className="text-sm cursor-pointer">{style}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSelectedSizes([]);
                    setSelectedColors([]);
                    setSelectedStyles([]);
                    setPriceRange([0, 50000]);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="group overflow-hidden border-border hover-scale animate-scale-in">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg mb-2">{product.name}</h3>
                    <p className="text-2xl mb-4">{product.price.toLocaleString()} ₽</p>
                    <Button 
                      className="w-full"
                      onClick={() => onAddToCart(product)}
                    >
                      <Icon name="ShoppingCart" className="mr-2" size={18} />
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Icon name="Package" className="mx-auto mb-4 text-muted-foreground" size={48} />
                <p className="text-xl text-muted-foreground">Товары не найдены</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
