import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Join today and start making money doing what you love. It only takes 2 minutes to sign up.
          </p>
          <a
            href="https://glctrk.org/aff_c?offer_id=2895&aff_id=7853"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="xl"
              className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 hover:text-primary"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
