import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Clock } from "lucide-react";
import petSitter1 from "@/assets/pet-sitter-1.jpg";
import petSitter2 from "@/assets/pet-sitter-2.jpg";
import petSitter3 from "@/assets/pet-sitter-3.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">Start Earning Today</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Get Paid to 
              <span className="text-primary"> Love Pets</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Join thousands of pet lovers earning extra income by caring for furry friends in their area. Flexible hours, great pay, endless cuddles.
            </p>

            {/* CTA Button */}
            <a 
              href="https://glctrk.org/aff_c?offer_id=2895&aff_id=7853" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl" className="mb-8">
                Start Pet Sitting Now
              </Button>
            </a>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-accent" />
                <span>Earn $15-30/hour</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>Flexible Schedule</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                <span>Work with Pets</span>
              </div>
            </div>
          </div>

          {/* Image Grid - Visible on all screens */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Main large image */}
              <div className="col-span-2 rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
                <img 
                  src={petSitter2} 
                  alt="Happy pet sitter with dogs" 
                  className="w-full h-40 md:h-64 object-cover"
                />
              </div>
              {/* Two smaller images */}
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
                <img 
                  src={petSitter1} 
                  alt="Pet sitter relaxing with dogs on couch" 
                  className="w-full h-28 md:h-48 object-cover"
                />
              </div>
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
                <img 
                  src={petSitter3} 
                  alt="Pet sitter caring for dog at home" 
                  className="w-full h-28 md:h-48 object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 md:w-32 h-20 md:h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
