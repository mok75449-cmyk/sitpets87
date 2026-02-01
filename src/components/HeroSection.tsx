import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
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
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
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
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
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
      </div>
    </section>
  );
};

export default HeroSection;
