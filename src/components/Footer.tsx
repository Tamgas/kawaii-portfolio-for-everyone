
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-background/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/80">
            © {new Date().getFullYear()} • Создано с ❤️
          </p>
          
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
