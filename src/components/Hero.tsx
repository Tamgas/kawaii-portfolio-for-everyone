
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container px-4 py-32 relative z-10">
        <div className="text-center space-y-8 animate-float">
          <div className="inline-block">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Привет! 👋
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-shimmer">
            Креативный разработчик
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Создаю красивые и функциональные веб-приложения с современным дизайном и плавными анимациями
          </p>

          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="glass hover:bg-primary hover:text-white transition-all duration-300"
            >
              Мои проекты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-primary/20 hover:border-primary/40"
            >
              Связаться
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary opacity-50" />
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl" />
    </section>
  );
};
