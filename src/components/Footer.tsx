import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl mb-4">ELEGANCE</h3>
            <p className="opacity-90 text-sm">
              Классическая одежда для тех, кто ценит качество и вневременной стиль.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Главная</Link></li>
              <li><Link to="/catalog" className="hover:opacity-100 transition-opacity">Каталог</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">О бренде</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Информация</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Доставка и оплата</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Обмен и возврат</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Гарантии</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Icon name="Facebook" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Icon name="Twitter" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} ELEGANCE. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
