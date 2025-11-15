import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl mb-12 text-center animate-fade-in">Контакты</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-scale-in">
            <h2 className="text-3xl mb-6">Свяжитесь с нами</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm">Ваше имя</label>
                <Input placeholder="Иван Иванов" />
              </div>
              
              <div>
                <label className="block mb-2 text-sm">Email</label>
                <Input type="email" placeholder="ivan@example.com" />
              </div>
              
              <div>
                <label className="block mb-2 text-sm">Сообщение</label>
                <Textarea 
                  placeholder="Напишите ваше сообщение..."
                  rows={6}
                />
              </div>
              
              <Button size="lg" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>

          <div className="space-y-6 animate-scale-in">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Адрес</h3>
                    <p className="text-muted-foreground">
                      Москва, ул. Петровка, 10<br />
                      Ежедневно 10:00 — 21:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Телефон</h3>
                    <p className="text-muted-foreground">
                      +7 (495) 123-45-67
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@elegance.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Социальные сети</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
