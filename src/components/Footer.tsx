import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background/70">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            <span className="font-bold text-background">PetSitter Jobs</span>
          </div>
          <p className="text-sm text-center md:text-right">
            © 2025 PetSitter Jobs. Connecting pet lovers with opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
