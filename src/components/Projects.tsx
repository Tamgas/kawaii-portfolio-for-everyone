
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Проект 1",
    description: "Современное веб-приложение с анимациями",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Проект 2",
    description: "Адаптивный дизайн и отзывчивый интерфейс",
    tags: ["Next.js", "Framer Motion", "SCSS"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Проект 3",
    description: "Оптимизированная производительность",
    tags: ["Vue", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Мои проекты</h2>
          <p className="text-foreground/80">Некоторые из моих последних работ</p>
        </div>

        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 section-fade"
        >
          {projects.map((project, index) => (
            <Card key={index} className="glass overflow-hidden group">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
