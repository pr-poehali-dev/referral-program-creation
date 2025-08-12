import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const IncomeCalculator = () => {
  const [referrals, setReferrals] = useState(10);

  const monthlyIncome = referrals * 250; // 50% from 500₽
  const yearlyIncome = referrals * 2000; // 50% from 4000₽
  const totalIncome = monthlyIncome * 12 + yearlyIncome;

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
          <Icon name="Calculator" className="text-white" size={32} />
        </div>
        <CardTitle className="text-3xl font-['Montserrat'] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Калькулятор дохода
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          Рассчитайте свой потенциальный доход
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="text-center">
          <label className="text-sm font-medium text-muted-foreground mb-4 block">
            Количество рефералов в месяц
          </label>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setReferrals(Math.max(1, referrals - 5))}
              className="w-10 h-10 rounded-full hover:bg-primary/10"
            >
              -
            </Button>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-xl border-2 border-primary/20">
              <span className="text-3xl font-bold text-primary font-['Montserrat']">{referrals}</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setReferrals(referrals + 5)}
              className="w-10 h-10 rounded-full hover:bg-primary/10"
            >
              +
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {[5, 10, 25, 50, 100].map(num => (
              <Badge 
                key={num}
                variant={referrals === num ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 ${
                  referrals === num 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                    : 'hover:bg-primary/5'
                }`}
                onClick={() => setReferrals(num)}
              >
                {num}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="text-sm text-muted-foreground mb-2">Месячные подписки</div>
              <div className="text-2xl font-bold text-primary font-['Montserrat']">
                {monthlyIncome.toLocaleString()}₽
              </div>
              <div className="text-xs text-muted-foreground mt-1">за месяц</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 hover:shadow-lg transition-all duration-300">
              <div className="text-sm text-muted-foreground mb-2">Годовые подписки</div>
              <div className="text-2xl font-bold text-accent font-['Montserrat']">
                {yearlyIncome.toLocaleString()}₽
              </div>
              <div className="text-xs text-muted-foreground mt-1">единоразово</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/10 border border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-sm text-muted-foreground mb-2">Общий доход за год</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-['Montserrat']">
                {totalIncome.toLocaleString()}₽
              </div>
              <div className="text-xs text-accent font-semibold mt-1">+ продления</div>
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-dashed border-primary/30">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Icon name="TrendingUp" className="text-primary" size={20} />
              <span className="font-semibold text-primary">Пожизненный доход</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Это только первый год! Каждое продление подписки приносит дополнительный доход
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncomeCalculator;