import { Home, Building, Palette, Sofa, Hammer, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Cozy home transformations focusing on natural materials, midcentury modern, Scandinavian, and Japandi aesthetics for comfortable living.",
    features: [
      "Natural Material Selection",
      "Scandinavian-Japandi Fusion", 
      "Midcentury Modern Elements",
      "Cozy Space Planning"
    ]
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Expert guidance for creating warm, natural environments that blend functionality with mindful aesthetics.",
    features: [
      "Style Direction",
      "Natural Color Palettes",
      "Sustainable Material Guidance",
      "Space Wellness Planning"
    ]
  },
  {
    icon: Sofa,
    title: "Furniture & Styling",
    description: "Curated selection of natural, sustainable furniture and accessories that embody cozy, minimalist living.",
    features: [
      "Natural Wood Furniture",
      "Textile & Plant Selection",
      "Minimalist Styling",
      "Cozy Arrangement"
    ]
  },
  {
    icon: Hammer,
    title: "Small Space Design",
    description: "Specialized in maximizing small spaces with clever storage solutions and multi-functional design approaches.",
    features: [
      "Space Optimization",
      "Multi-functional Furniture",
      "Storage Solutions",
      "Flow Enhancement"
    ]
  },
  {
    icon: Lightbulb,
    title: "Natural Lighting",
    description: "Warm, natural lighting solutions that create cozy atmospheres and enhance the connection with nature.",
    features: [
      "Warm Light Planning",
      "Natural Light Optimization",
      "Pendant & Table Lamps",
      "Ambient Lighting"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gold text-lg font-medium mb-2">Our Services</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Comprehensive Design Solutions
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            From initial concept to final installation, we provide end-to-end interior design services tailored to your vision and lifestyle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-warm-white p-8 rounded-lg hover-scale">
              <div className="text-gold text-4xl mb-6">
                <service.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">{service.title}</h3>
              <p className="text-medium-gray mb-6">{service.description}</p>
              <ul className="text-medium-gray space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
