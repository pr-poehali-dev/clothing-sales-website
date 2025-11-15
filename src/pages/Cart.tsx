import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export default function Cart({ items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl mb-12 text-center animate-fade-in">Корзина</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="ShoppingBag" className="mx-auto mb-4 text-muted-foreground" size={64} />
            <p className="text-xl text-muted-foreground mb-6">Ваша корзина пуста</p>
            <Button size="lg">Перейти в каталог</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <Card key={item.id} className="animate-scale-in">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-32 h-40 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl mb-2">{item.name}</h3>
                        <p className="text-2xl mb-4">{item.price.toLocaleString()} ₽</p>
                        
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemove(item.id)}
                      >
                        <Icon name="Trash2" size={20} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-2xl mb-6">Итого</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Товары ({items.length})</span>
                      <span>{total.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доставка</span>
                      <span>Бесплатно</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between text-xl">
                      <span className="font-medium">Итого</span>
                      <span className="font-medium">{total.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Оформить заказ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
