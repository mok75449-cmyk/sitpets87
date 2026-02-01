import { Wallet, Calendar, MapPin, Star } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Great Pay",
    description: "Earn competitive rates for doing what you love. Many pet sitters earn $500+ per week.",
  },
  {
    icon: Calendar,
    title: "Flexible Hours",
    description: "Work when you want, as much as you want. Perfect for students, parents, or side hustlers.",
  },
  {
    icon: MapPin,
    title: "Work Locally",
    description: "Find pet sitting jobs in your neighborhood. No long commutes, just happy pets nearby.",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Get reviews from happy pet owners and grow your client base organically.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Become a Pet Sitter?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Turn your love for animals into a rewarding side income
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 card-shadow hover:card-hover-shadow transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
