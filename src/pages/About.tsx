export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-12 text-center animate-fade-in">О бренде</h1>
          
          <div className="space-y-8 text-lg leading-relaxed animate-scale-in">
            <p>
              Наш бренд создан для тех, кто ценит утончённость, качество и вневременной стиль. 
              Мы верим, что элегантность не подвластна моде — она живёт в деталях, в крое, в безупречности линий.
            </p>
            
            <p>
              Каждая вещь в нашей коллекции — результат тщательного отбора материалов и мастерства портных. 
              Мы работаем с натуральными тканями: шерстью, льном, кашемиром, хлопком — теми, что дышат и 
              создают комфорт в любую погоду.
            </p>
            
            <div className="bg-muted p-8 rounded-sm my-12">
              <h2 className="text-3xl mb-4">Наши принципы</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Качество превыше количества</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Классика, не подверженная времени</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Внимание к деталям и крою</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Ответственное производство</span>
                </li>
              </ul>
            </div>
            
            <p>
              Мы создаём одежду для людей, которые понимают ценность вещей, способных прослужить годы. 
              Наши модели не кричат — они говорят о вкусе владельца.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
