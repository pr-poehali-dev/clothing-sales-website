import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  cartItemCount: number;
}

export default function Navigation({ cartItemCount }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-medium">
            ELEGANCE
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-foreground hover:text-accent transition-colors">
              Каталог
            </Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors">
              О бренде
            </Link>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
              Контакты
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingBag" size={20} />
                {cartItemCount > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    variant="destructive"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
