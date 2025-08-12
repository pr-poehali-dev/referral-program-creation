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

      {/* Premium Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-secondary/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          {/* Floating particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
          <div className="absolute top-48 right-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-5xl">
          {/* Premium badge with glow */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 border border-primary/30 mb-10 backdrop-blur-sm shadow-lg">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-bold text-primary tracking-wide">🚀 Эксклюзивная партнерская программа</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-foreground font-['Montserrat'] leading-tight">
            <span className="block">Зарабатывайте до <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">50%</span></span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mt-2">с каждого клиента</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed font-['Open_Sans']">
            Рекомендуйте наше революционное приложение для подсчета калорий по фото и 
            <span className="text-foreground font-semibold">получайте стабильный доход</span> от каждого приведенного пользователя
          </p>
          
          {/* Premium stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse shadow-lg"></div>
              <span className="font-semibold text-foreground">97% точность AI</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse shadow-lg"></div>
              <span className="font-semibold text-foreground">50,000+ продуктов</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse shadow-lg"></div>
              <span className="font-semibold text-foreground">Пожизненные комиссии</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="relative group bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground text-xl px-12 py-6 font-bold shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-500 border border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Icon name="Zap" className="mr-3 text-2xl" />
              <span className="relative z-10">Стать партнером</span>
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 border-primary/40 hover:border-primary hover:bg-primary/10 font-bold backdrop-blur-sm transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
              <Icon name="Play" className="mr-3 text-2xl" />
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
            <Card className="text-center group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/95 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transform group-hover:scale-110 transition-all duration-500">
                  <Icon name="Dumbbell" className="text-primary group-hover:scale-110 transition-transform duration-500" size={36} />
                </div>
                <CardTitle className="font-['Montserrat'] text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text mb-3">Фитнес-тренеры</CardTitle>
                <CardDescription className="text-base leading-relaxed">Предлагайте клиентам точный подсчет КБЖУ по фото и получайте 250₽ с каждой месячной подписки</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="text-left space-y-4 text-sm">
                  <li className="flex items-center gap-3 bg-gradient-to-r from-background/50 to-transparent px-4 py-3 rounded-xl border border-border/30">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span className="font-medium">50% комиссия с каждого клиента</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-background/50 to-transparent px-4 py-3 rounded-xl border border-border/30">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span className="font-medium">Точность подсчета калорий 97%</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-background/50 to-transparent px-4 py-3 rounded-xl border border-border/30">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span className="font-medium">Повышение удержания клиентов на 40%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/95 border-border/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-secondary/20 transform group-hover:scale-110 transition-all duration-500">
                  <Icon name="Apple" className="text-secondary group-hover:scale-110 transition-transform duration-500" size={36} />
                </div>
                <CardTitle className="font-['Montserrat'] text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text mb-3">Нутрициологи</CardTitle>
                <CardDescription className="text-base leading-relaxed">Дополните консультации высокотехнологичным инструментом анализа питания</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="text-left space-y-4 text-sm">
                  <li className="flex items-center gap-3 bg-gradient-to-r from-background/50 to-transparent px-4 py-3 rounded-xl border border-border/30">
                    <div className="w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span className="font-medium">2000₽ за каждую годовую подписку</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-background/50 to-transparent px-4 py-3 rounded-xl border border-border/30">
                    <div className="w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span className="font-medium">База данных 50,000+ продуктов</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-background/50 to-transparent px-4 py-3 rounded-xl border border-border/30">
                    <div className="w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span className="font-medium">Детальная аналитика для пациентов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/95 border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-accent/20 transform group-hover:scale-110 transition-all duration-500">
                  <Icon name="Users" className="text-accent group-hover:scale-110 transition-transform duration-500" size={36} />
                </div>
                <CardTitle className="font-['Montserrat'] text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text mb-3">ЗОЖ-блогеры</CardTitle>
                <CardDescription className="text-base leading-relaxed">Монетизируйте своих подписчиков через полезное приложение для правильного питания</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="text-left space-y-4 text-sm">
                  <li className="flex items-center gap-3 bg-gradient-to-r from-background/50 to-transparent px-4 py-3 rounded-xl border border-border/30">
                    <div className="w-6 h-6 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span className="font-medium">Высокая конверсия в оплату 23%</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-background/50 to-transparent px-4 py-3 rounded-xl border border-border/30">
                    <div className="w-6 h-6 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span className="font-medium">Средний чек подписчика 2847₽</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-background/50 to-transparent px-4 py-3 rounded-xl border border-border/30">
                    <div className="w-6 h-6 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span className="font-medium">Маркетинговая поддержка 24/7</span>
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
              <img src="/img/6f6a18eb-e07f-4808-9033-5f194d532963.jpg" alt="Приложение" className="w-full rounded-lg shadow-lg mx-0 my-0 px-[30px]" />
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 font-['Montserrat']">Определять КБЖУ в 1 клик</h3>
                  <p className="text-muted-foreground">Отправляйте фото еды в бота и он рассчитает кбжу блюда с точностью 95%</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 font-['Montserrat']">Ежедневный и еженедельный анализ</h3>
                  <p className="text-muted-foreground">Отслеживаете дневной и еженедельный кбжу прямо в боте</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 font-['Montserrat']">Персональные рекомендации</h3>
                  <p className="text-muted-foreground">Бот проанализирует ваш рацион и расскажет, какие продукты нужно добавить, а от чего лучше воздержаться</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 font-['Montserrat']">Максимально легко в использовании</h3>
                  <p className="text-muted-foreground">Не нужно скачивать отдельные приложения, персональный нутрициолог - уже в вашем кармане</p>
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

      {/* Premium CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Premium background with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        <div className="relative z-10 container mx-auto text-center">
          {/* Premium image with glow effect */}
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-110"></div>
            <img src="/img/c04a3e9c-a4e8-43e0-b90a-f1fd3e950bce.jpg" alt="Success" className="relative w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white/20" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">✨</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white font-['Montserrat'] leading-tight">
            <span className="block">Начните зарабатывать</span>
            <span className="bg-gradient-to-r from-white via-white to-yellow-200 bg-clip-text text-transparent">уже сегодня</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed">
            Присоединяйтесь к <span className="font-bold text-white">успешным партнерам</span> и получайте стабильный доход от рекомендаций качественного продукта
          </p>
          
          {/* Premium success metrics */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-sm">Активных партнеров</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-white mb-1">2.8M₽</div>
              <div className="text-white/80 text-sm">Средний месячный доход</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-white mb-1">97%</div>
              <div className="text-white/80 text-sm">Удовлетворенность</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="relative group bg-white text-primary hover:bg-white/95 text-xl px-12 py-6 font-bold shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-500 border-2 border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Icon name="Rocket" className="mr-3 text-2xl relative z-10" />
              <span className="relative z-10">Стать партнером бесплатно</span>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/15 text-xl px-12 py-6 font-bold backdrop-blur-sm transform hover:scale-105 transition-all duration-500 shadow-lg">
              <Icon name="MessageCircle" className="mr-3 text-2xl" />
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