
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Связаться со мной</h2>
          <p className="text-foreground/80">Есть проект или вопрос? Напишите мне!</p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Имя</label>
              <Input
                type="text"
                placeholder="Ваше имя"
                className="glass"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="ваш@email.com"
                className="glass"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Сообщение</label>
              <Textarea
                placeholder="Ваше сообщение..."
                className="glass min-h-[150px]"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full glass hover:bg-primary hover:text-white transition-all duration-300"
            >
              Отправить <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="mt-12 space-y-4">
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
              your@email.com
            </a>
            <div className="flex items-center gap-2 text-foreground/80">
              <MessageSquare className="h-5 w-5" />
              Доступен для общения в Telegram
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
