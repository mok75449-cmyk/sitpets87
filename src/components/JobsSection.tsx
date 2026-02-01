import { Button } from "@/components/ui/button";
import { Dog, Home, Car, Users, Heart } from "lucide-react";

const jobs = [
  {
    icon: Heart,
    title: "Pet Sitter",
    description: "Care for pets in their home while owners are away",
    earnings: "$20-35/visit",
    link: "https://glctrk.org/aff_c?offer_id=2895&aff_id=7853",
    featured: true,
  },
  {
    icon: Dog,
    title: "Dog Walker",
    description: "Take dogs for daily walks and exercise",
    earnings: "$15-25/walk",
    link: "https://glctrk.org/aff_c?offer_id=2814&aff_id=7853",
  },
  {
    icon: Home,
    title: "House Sitter",
    description: "Stay at homes while owners travel",
    earnings: "$50-100/night",
    link: "https://gloffers.org/aff_c?offer_id=2896&aff_id=7853",
  },
  {
    icon: Users,
    title: "At Home Assistant",
    description: "Help with household tasks and errands",
    earnings: "$18-30/hour",
    link: "https://glctrk.org/aff_c?offer_id=2899&aff_id=7853",
  },
  {
    icon: Car,
    title: "Personal Driver",
    description: "Provide transportation services",
    earnings: "$20-40/hour",
    link: "https://gloffers.org/aff_c?offer_id=2900&aff_id=7853",
  },
];

const JobsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Job Opportunities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect job that fits your lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {jobs.map((job, index) => (
            <a
              key={index}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block group ${job.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div
                className={`h-full bg-card rounded-xl p-6 card-shadow hover:card-hover-shadow transition-all duration-300 border-2 ${
                  job.featured
                    ? 'border-primary bg-primary/5'
                    : 'border-transparent hover:border-primary/50'
                }`}
              >
                {job.featured && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                      job.featured
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <job.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {job.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold text-sm">
                        {job.earnings}
                      </span>
                      <span className="text-primary text-sm font-semibold group-hover:underline">
                        Apply Now →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
