import { Home, Building, Palette, Sofa, Hammer, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Complete home transformations including living rooms, bedrooms, kitchens, and bathrooms with personalized design solutions.",
    features: [
      "Space Planning & Layout",
      "Color & Material Selection", 
      "Custom Furniture Design",
      "Lighting Design"
    ]
  },
  {
    icon: Building,
    title: "Commercial Design",
    description: "Professional spaces that enhance productivity and brand identity for offices, restaurants, and retail environments.",
    features: [
      "Office Space Planning",
      "Brand Integration",
      "Retail Environment Design",
      "Hospitality Interiors"
    ]
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Expert guidance and strategic planning to help you achieve your design goals within budget and timeline.",
    features: [
      "Design Strategy",
      "Budget Planning",
      "Vendor Coordination",
      "Project Management"
    ]
  },
  {
    icon: Sofa,
    title: "Furniture & Styling",
    description: "Curated furniture selection and styling services to complete your space with perfect finishing touches.",
    features: [
      "Furniture Sourcing",
      "Art & Accessory Selection",
      "Styling & Staging",
      "Installation Services"
    ]
  },
  {
    icon: Hammer,
    title: "Renovation Design",
    description: "Complete renovation planning and design for spaces requiring structural changes and major updates.",
    features: [
      "Renovation Planning",
      "Contractor Coordination",
      "Material Specification",
      "Timeline Management"
    ]
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Specialized lighting solutions that enhance ambiance and functionality throughout your space.",
    features: [
      "Lighting Plans",
      "Fixture Selection",
      "Smart Home Integration",
      "Energy Efficiency"
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
