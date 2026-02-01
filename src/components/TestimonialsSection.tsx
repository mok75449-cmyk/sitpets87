import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Pet Sitter",
    text: "I make over $800 a week just caring for dogs in my neighborhood. Best decision I ever made!",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Dog Walker",
    text: "The flexibility is amazing. I work around my college schedule and still earn great money.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "House Sitter",
    text: "I get paid to stay in beautiful homes and play with pets. It doesn't feel like work at all!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Pet Sitters Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of happy pet sitters already earning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 card-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
