import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  // Fonction pour gérer le téléchargement du CV
  const handleDownloadCV = () => {
    // Créer un lien temporaire pour le téléchargement
    const link = document.createElement('a');
    link.href = '/Cv_KaoutarSabbahi.pdf';
    link.download = 'Cv_KaoutarSabbahi.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos <span className="text-primary">de moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Ingénieure en Informatique & Développeuse Full Stack
            </h3>

            <p className="text-muted-foreground">
              Je suis une ingénieure en informatique récemment diplômée de l'ENSA Khouribga, 
              passionnée par le développement logiciel et les technologies web & mobiles. 
              Je maîtrise un large éventail de technologies allant du <strong>front-end</strong> 
              (Angular, React, Bootstrap) au <strong>back-end</strong> 
              (Java, JEE, Spring Boot, Node.js), en passant par les bases de données 
              (MySQL, Oracle, MongoDB).
            </p>

            <p className="text-muted-foreground">
              J'ai réalisé plusieurs projets académiques et stages en entreprise, 
              notamment sur des architectures <strong>microservices</strong>, 
              la conception d'applications de gestion, et l'implémentation de solutions 
              avec <strong>Docker, Keycloak, Jenkins, et RabbitMQ</strong>. 
              Mon objectif est de contribuer à des projets innovants tout en 
              continuant à évoluer dans un environnement stimulant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Me Contacter
              </a>

              <button
                onClick={handleDownloadCV}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger mon CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Développement Full Stack</h4>
                  <p className="text-muted-foreground">
                    Expérience avec <strong>Spring Boot, JEE, Node.js, Angular, React</strong> et bases de données relationnelles et NoSQL.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps</h4>
                  <p className="text-muted-foreground">
                    Expérience avec <strong>Jenkins, Docker</strong> pour l'intégration et le déploiement 
                    continus, ainsi que la gestion de projets avec{" "}
                    <strong>Jira Software, Git et GitHub</strong>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestion de Projet</h4>
                  <p className="text-muted-foreground">
                    Expérience en gestion agile, avec des stages et projets académiques menés de la conception à la livraison.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};