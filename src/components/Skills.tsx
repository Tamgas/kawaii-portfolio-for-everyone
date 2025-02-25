
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { Code2, Paintbrush, Rocket } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Разработка",
    items: ["React", "TypeScript", "Node.js", "Next.js"],
  },
  {
    icon: Paintbrush,
    title: "Дизайн",
    items: ["UI/UX", "Tailwind CSS", "Figma", "Анимации"],
  },
  {
    icon: Rocket,
    title: "Инструменты",
    items: ["Git", "VS Code", "Docker", "CI/CD"],
  },
];

export const Skills = () => {
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
    <section id="skills" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Навыки</h2>
          <p className="text-foreground/80">Технологии и инструменты, с которыми я работаю</p>
        </div>

        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 section-fade"
        >
          {skills.map((skill, index) => (
            <Card key={index} className="glass p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4">
                <skill.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
