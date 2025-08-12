import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-luxury border-b border-border/30 shadow-luxury">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/files/69c3d9e6-cc16-4908-8c46-03067a2c1896.jpeg" alt="ПП ПРИВЕТ" className="w-10 h-10" />
            <span className="font-bold text-xl text-primary font-['Montserrat']">ПП ПРИВЕТ</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">Как работает</a>
            <a href="#rewards" className="text-muted-foreground hover:text-primary transition-colors">Вознаграждения</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Начать зарабатывать</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-secondary/20 to-white">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6 bg-accent text-accent-foreground">🥑 Реферальная программа</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-['Montserrat']">
Зарабатывайте до <span className="text-primary">50%</span> с каждого клиента
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Рекомендуйте наше приложение для подсчета калорий по фото и получайте стабильный доход от каждого приведенного пользователя
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              <Icon name="Zap" className="mr-2" />
              Стать партнером
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" />
Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-['Montserrat']">Кому подойдет</h2>
            <p className="text-muted-foreground text-lg">Идеально для профессионалов в сфере здоровья и фитнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Dumbbell" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-['Montserrat']">Фитнес-тренеры</CardTitle>
                <CardDescription>Помогайте клиентам отслеживать питание и зарабатывайте на этом</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
Пассивный доход до 200к₽/мес
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
Премиум сервис для клиентов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
Увеличение LTV клиентов
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Apple" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-premium-serif text-2xl gradient-text-luxury">Нутрициологи</CardTitle>
                <CardDescription className="font-elegant text-base">Предложите клиентам AI-технологии будущего</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    Профессиональный инструмент
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    Пассивный доход
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    Улучшение сервиса
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-['Montserrat']">Блогеры</CardTitle>
                <CardDescription>Монетизируйте свою аудиторию в сфере ЗОЖ</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    Релевантный контент
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    Высокие комиссии
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    Долгосрочный доход
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How App Works */}
      <section id="how-it-works" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 font-premium-serif gradient-text-luxury text-shadow-elegant">Технология будущего</h2>
            <p className="text-foreground/80 text-xl font-elegant leading-relaxed">Прорывная AI-система с точностью 97% для анализа питания</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/img/6f6a18eb-e07f-4808-9033-5f194d532963.jpg" alt="Приложение" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 font-premium-serif gradient-text-luxury">Одно фото</h3>
                  <p className="text-foreground/70 font-elegant">Просто сфотографировать блюдо на смартфон</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 font-['Montserrat']">ИИ анализ</h3>
                  <p className="text-muted-foreground">Искусственный интеллект определяет продукты и их количество</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 font-['Montserrat']">Точный расчет</h3>
                  <p className="text-muted-foreground">Автоматический подсчет калорий, белков, жиров и углеводов</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 font-['Montserrat']">Трекинг прогресса</h3>
                  <p className="text-muted-foreground">Ведение дневника питания и достижение целей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-['Montserrat']">Вознаграждения и условия</h2>
            <p className="text-muted-foreground text-lg">Максимальные комиссии в индустрии</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4 font-['Montserrat']">50%</div>
                  <CardTitle className="text-2xl font-['Montserrat']">Комиссия с каждого платежа</CardTitle>
                  <CardDescription className="text-lg">Получайте половину от всех платежей ваших рефералов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Подписка на месяц (500₽)</span>
                    <span className="font-bold text-primary">250₽</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Подписка на год (4000₽)</span>
                    <span className="font-bold text-primary">2000₽</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between font-bold">
                      <span>Ваш потенциальный доход:</span>
                      <span className="text-primary">неограничен</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 font-['Montserrat'] flex items-center gap-2">
                  <Icon name="Calendar" className="text-primary" />
                  Условия выплат
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Выплаты каждые 2 недели</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Минимальная сумма для выплаты: 1000₽</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Выплаты на карту, PayPal или ЮMoney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Пожизненные комиссии с рефералов</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 font-['Montserrat'] flex items-center gap-2">
                  <Icon name="Award" className="text-primary" />
                  Дополнительные бонусы
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Star" className="text-primary mt-1" size={16} />
                    <span>10+ рефералов в месяц = +10% к комиссии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" className="text-primary mt-1" size={16} />
                    <span>50+ рефералов в месяц = +20% к комиссии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" className="text-primary mt-1" size={16} />
                    <span>Персональный менеджер для топ-партнеров</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-['Montserrat']">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на самые популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left font-['Montserrat'] font-semibold">
                Как начать участвовать в реферальной программе?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Зарегистрируйтесь как партнер, получите персональную реферальную ссылку и начните делиться ей со своей аудиторией. Все рефералы автоматически привязываются к вашему аккаунту.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left font-['Montserrat'] font-semibold">
                Когда происходят выплаты комиссий?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Выплаты производятся каждые 2 недели при достижении минимальной суммы в 1000₽. Комиссия начисляется сразу после оплаты подписки вашим рефералом.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left font-['Montserrat'] font-semibold">
                Сколько я могу заработать?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Доход не ограничен. При привлечении 100 пользователей на годовую подписку вы получите 200,000₽. Плюс все будущие продления подписок ваших рефералов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left font-['Montserrat'] font-semibold">
                Нужно ли платить за участие в программе?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, участие в реферальной программе абсолютно бесплатно. Вы начинаете зарабатывать сразу после первого привлеченного пользователя.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left font-['Montserrat'] font-semibold">
                Какие материалы для продвижения вы предоставляете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы предоставляем баннеры, видео-демо, текстовые материалы, кейсы и другие маркетинговые материалы. Также доступна персональная консультация по продвижению.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <img src="/img/c04a3e9c-a4e8-43e0-b90a-f1fd3e950bce.jpg" alt="Success" className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg" />
          <h2 className="text-4xl font-bold mb-6 text-white font-['Montserrat']">
            Начните зарабатывать уже сегодня
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к успешным партнерам и получайте стабильный доход от рекомендаций качественного продукта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Icon name="Rocket" className="mr-2" />
              Стать партнером бесплатно
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 text-foreground font-['Montserrat']">Контакты</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Остались вопросы? Свяжитесь с нами любым удобным способом
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Mail" className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-['Montserrat']">Email</h3>
              <p className="text-muted-foreground">partners@pprivet.ru</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="MessageCircle" className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-['Montserrat']">Telegram</h3>
              <p className="text-muted-foreground">@pprivet_support</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Phone" className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 font-['Montserrat']">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="https://cdn.poehali.dev/files/69c3d9e6-cc16-4908-8c46-03067a2c1896.jpeg" alt="ПП ПРИВЕТ" className="w-8 h-8" />
              <span className="font-bold text-primary font-['Montserrat']">ПП ПРИВЕТ</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 ПП ПРИВЕТ. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;