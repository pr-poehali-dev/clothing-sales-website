import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Home() {
  const collections = [
    {
      title: 'Новая коллекция',
      image: 'https://cdn.poehali.dev/projects/6f9e5b55-dd2d-4b4c-acd0-6740bca63527/files/a361924b-fd0f-48e9-99a4-ec2ed7b42950.jpg',
      description: 'Осень-Зима 2024'
    },
    {
      title: 'Классика',
      image: 'https://cdn.poehali.dev/projects/6f9e5b55-dd2d-4b4c-acd0-6740bca63527/files/64205ddf-0fdf-4cd5-b3df-48157749664b.jpg',
      description: 'Вневременной стиль'
    },
    {
      title: 'Повседневная элегантность',
      image: 'https://cdn.poehali.dev/projects/6f9e5b55-dd2d-4b4c-acd0-6740bca63527/files/0194bf75-8bca-4f81-989c-d0dd0aa44602.jpg',
      description: 'Комфорт и стиль'
    }
  ];

  const features = [
    { icon: 'Sparkles', title: 'Премиум качество', text: 'Натуральные ткани и безупречный крой' },
    { icon: 'Truck', title: 'Бесплатная доставка', text: 'По России при заказе от 10 000 ₽' },
    { icon: 'RefreshCw', title: 'Обмен и возврат', text: '30 дней на возврат товара' },
    { icon: 'Award', title: 'Гарантия качества', text: 'Проверка каждого изделия перед отправкой' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background z-0" />
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
            Элегантность<br />вне времени
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Коллекция классической одежды для тех, кто ценит качество и стиль
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Смотреть каталог
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-16 animate-fade-in">Коллекции</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-border hover-scale animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl mb-2">{collection.title}</h3>
                  <p className="text-muted-foreground">{collection.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Icon name={feature.icon as any} size={28} className="text-accent" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 animate-fade-in">
            Подпишитесь на рассылку
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Получайте информацию о новых коллекциях и эксклюзивных предложениях
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-sm bg-primary-foreground text-primary"
            />
            <Button size="lg" variant="secondary">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
