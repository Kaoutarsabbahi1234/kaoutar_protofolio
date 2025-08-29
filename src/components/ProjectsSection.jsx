import { ArrowRight, ExternalLink, Github } from "lucide-react";

const professionalProjects = [
  {
    id: 1,
    title: "Architecture Microservices avec API Gateway",
    description: "Mise en place d'une API Gateway sécurisée (Spring Cloud Gateway) avec authentification centralisée Keycloak et configuration dynamique.",
    image: "/projects/microservices-gateway.png",
    tags: ["Spring Boot", "Spring Cloud", "Keycloak", "Docker", "RabbitMQ"],
    company: "JESA Casablanca",
    period: "Février 2025 - Juin 2025",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Application Workflow Landing Pages",
    description: "Conception et développement d'une application de gestion du workflow de production des landing pages avec interfaces multi-rôles et notifications automatisées.",
    image: "/projects/workflow-app.png",
    tags: ["PHP", "MySQL", "HTML5/CSS3", "Bootstrap"],
    company: "Xnumerik DIGITAL Agency",
    period: "Juillet 2024 - Août 2024",
    demoUrl: "#",
    githubUrl: "#",
  },
];

const academicProjects = [
  {
    id: 3,
    title: "Système de Gestion des Laboratoires",
    description: "Développement complet d'un système de gestion des laboratoires avec architecture microservices.",
    image: "/projects/laboratory-system.png",
    tags: ["Angular", "Spring Boot", "Microservices", "Docker", "MySQL", "Selenium"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kaoutarsabbahi123/ProjetLibre",
  },
  {
    id: 4,
    title: "MedConnect",
    description: "Application web complète pour la gestion des rendez-vous médicaux avec intégration CI/CD et conteneurisation.",
    image: "/projects/medconnect.png",
    tags: ["Spring Boot", "HTML5/CSS3", "MySQL", "Docker", "Jenkins"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kaoutarsabbahi123/MedConnect",
  },
  {
    id: 5,
    title: "Système de Gestion des Stagiaires",
    description: "Plateforme web complète pour la gestion et le suivi des stagiaires avec interface responsive et base de données relationnelle.",
    image: "/projects/internship-system.png",
    tags: ["Java JEE", "MySQL", "HTML5/CSS3", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kaoutarsabbahi123/JEE",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mes <span className="text-primary">Projets</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Découvrez mes projets réalisés en entreprise et dans le cadre de ma formation d'ingénieure en informatique.
        </p>

        {/* Projets professionnels (Stages) */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-primary">Projets Professionnels</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <div className="text-primary text-sm font-medium mb-1">{project.company}</div>
                  <div className="text-muted-foreground text-xs mb-3">{project.period}</div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                  
                    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projets académiques */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-primary">Projets Académiques</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                     
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="Voir le code"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Kaoutarsabbahi123"
            rel="noopener noreferrer"
          >
            Voir mon GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};