import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import StatsCounter from "@/components/ui/stats-counter";
import IncomeCalculator from "@/components/ui/income-calculator";

const Premium = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/img/be2490ad-cc94-4352-8bcf-139806dfd0d8.jpg" alt="CalorieTracker" className="w-8 h-8 rounded-lg shadow-sm" />
            <span className="font-bold text-xl text-primary font-['Montserrat']">CalorieTracker</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors font-medium">Статистика</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium">Как работает</a>
            <a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors font-medium">Калькулятор</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
            <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Начать зарабатывать
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 text-center bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-8 bg-gradient-to-r from-accent to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-2 text-sm font-semibold">
              🎯 Эксклюзивная реферальная программа
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground font-['Montserrat'] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in-up">
            Зарабатывайте до <span className="relative">
              <span className="text-6xl md:text-8xl">50%</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl animate-pulse"></div>
            </span> с каждого клиента
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Рекомендуйте наше приложение для подсчета калорий по фото и получайте <span className="font-semibold text-primary">стабильный доход</span> от каждого приведенного пользователя
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <Icon name="Zap" className="mr-2" />
              Стать партнером
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-7 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Icon name="Play" className="mr-2" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-20 px-4 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border border-primary/20">📊 Наши достижения</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground font-['Montserrat']">Цифры говорят сами за себя</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Присоединяйтесь к растущему сообществу успешных партнеров
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 font-['Montserrat']">
                  <StatsCounter value={15000} suffix="+" />
                </div>
                <p className="text-muted-foreground font-medium">Активных пользователей</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Icon name="HandCoins" className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-accent mb-2 font-['Montserrat']">
                  <StatsCounter value={2500000} suffix="₽" />
                </div>
                <p className="text-muted-foreground font-medium">Выплачено партнерам</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-secondary/20 to-transparent border-secondary/30">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Icon name="TrendingUp" className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 font-['Montserrat']">
                  <StatsCounter value={850} suffix="+" />
                </div>
                <p className="text-muted-foreground font-medium">Активных партнеров</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 border-primary/20">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Icon name="Star" className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-accent mb-2 font-['Montserrat']">4.9</div>
                <p className="text-muted-foreground font-medium">Рейтинг в App Store</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Income Calculator Section */}
      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20">💰 Персональный расчет</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground font-['Montserrat']">Рассчитайте свой доход</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Интерактивный калькулятор поможет понять ваш потенциальный заработок в реферальной программе
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <IncomeCalculator />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border border-accent/20">💬 Отзывы партнеров</Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground font-['Montserrat']">Что говорят наши партнеры</h2>
            <p className="text-muted-foreground text-lg">Реальные истории успеха от действующих участников программы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <CardContent className="pt-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">АК</div>
                  <div>
                    <h4 className="font-semibold text-lg font-['Montserrat']">Анна Козлова</h4>
                    <p className="text-sm text-muted-foreground">Персональный тренер, 5 лет опыта</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-current" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "За 3 месяца заработала 340,000₽! Клиенты довольны точностью приложения, а я получаю стабильный пассивный доход. Лучшее решение для тренеров."
                </p>
                <div className="text-sm text-primary font-semibold">127 рефералов • 340,000₽ заработано</div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
              <CardContent className="pt-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">МР</div>
                  <div>
                    <h4 className="font-semibold text-lg font-['Montserrat']">Михаил Романов</h4>
                    <p className="text-sm text-muted-foreground">Нутрициолог, клиника "Здоровье+"</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-current" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Приложение идеально дополняет мою практику. Пациенты ведут точный учет питания, а я получаю дополнительный доход. Конверсия в оплату очень высокая."
                </p>
                <div className="text-sm text-accent font-semibold">89 рефералов • 267,000₽ заработано</div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-secondary/20 to-transparent border-secondary/30">
              <CardContent className="pt-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">ЕС</div>
                  <div>
                    <h4 className="font-semibold text-lg font-['Montserrat']">Елена Смирнова</h4>
                    <p className="text-sm text-muted-foreground">Блогер @healthylife_elena • 45K подписчиков</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-current" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Моя аудитория обожает приложение! За первый месяц привела 156 пользователей и заработала больше, чем на рекламных интеграциях за полгода."
                </p>
                <div className="text-sm text-primary font-semibold">156 рефералов • 468,000₽ заработано</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium;