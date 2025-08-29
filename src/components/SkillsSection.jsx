import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Web & Mobile
  { name: "HTML5 / CSS3 / Bootstrap", level: 95, category: "frontend" },
  { name: "JavaScript / TypeScript", level: 90, category: "frontend" },
  { name: "React.js / Angular", level: 85, category: "frontend" },
  { name: "Java / JEE / Spring Boot", level: 90, category: "backend" },
  { name: "Node.js / Express", level: 80, category: "backend" },
  { name: "Android", level: 70, category: "mobile" },

  // Bases de données
  { name: "MySQL ", level: 90, category: "database" },
  { name: "Oracle", level: 85, category: "database" },
  { name: "MongoDB", level: 65, category: "database" },
  // Tests & Qualité
  { name: "JUnit / Jest / Selenium", level: 80, category: "quality" },
  { name: "JMeter / SonarQube", level: 75, category: "quality" },

  // DevOps & Cloud
  { name: "Git / GitHub / Jira", level: 90, category: "devops" },
  { name: "Docker", level: 85, category: "devops" },
  { name: "Jenkins", level: 75, category: "devops" },
  { name: "AWS / Azure", level: 65, category: "cloud" },

  // Autres
  { name: "Odoo ERP", level: 70, category: "tools" },
  { name: "UML / Merise", level: 80, category: "tools" },
  { name: "Power BI / ETL", level: 70, category: "tools" },
];

// Catégories en français
const categories = [
  { key: "all", label: "Toutes" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "database", label: "Bases de données" },
  { key: "quality", label: "Tests & Qualité" },
  { key: "devops", label: "DevOps" },
  { key: "cloud", label: "Cloud" },
  { key: "tools", label: "Outils" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
