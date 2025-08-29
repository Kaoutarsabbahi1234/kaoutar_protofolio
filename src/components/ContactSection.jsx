import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message, je vous répondrai bientôt.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Me <span className="text-primary">Contacter</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          N'hésitez pas à me contacter, je suis toujours ouverte à de nouvelles opportunités.
        </p>

        {/* Infos de contact */}
        <div className="space-y-12">
          {/* Informations principales */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:kawtarsb123@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  kawtarsb123@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Téléphone</h4>
                <a
                  href="tel:+212776404481"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +212 776 404 481
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Localisation</h4>
                <span className="text-muted-foreground">
                  Mohammédia, Maroc
                </span>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="text-center">
            <h4 className="font-medium mb-6">Réseaux sociaux</h4>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.linkedin.com/in/kaoutar-sabbahi-43b512292/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};