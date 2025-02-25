
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Проекты", href: "#projects" },
    { title: "Навыки", href: "#skills" },
    { title: "Контакты", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass mx-4 my-4 rounded-full">
        <nav className="container px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
