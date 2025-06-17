
import { useState } from "react";

import retreatRoomImage from "@assets/Enscape_2025-06-15-14-45-36_1750097444134.png";
import kitchenImage from "@assets/Enscape_2025-06-15-15-05-16_1750174768867.png";
import kitchenImage2 from "@assets/Enscape_2025-06-15-15-05-16_1750174908806.png";
import kitchenImage3 from "@assets/Enscape_2025-06-15-15-05-16_1750175028134.png";
import kitchenImage4 from "@assets/Enscape_2025-06-15-15-05-16_1750175148545.png";
import kitchenImage5 from "@assets/Enscape_2025-06-15-15-05-16_1750175235404.png";
import kitchenImage6 from "@assets/Enscape_2025-06-15-15-05-16_1750175413919.png";
import kitchenImage7 from "@assets/Enscape_2025-06-15-15-05-16_1750175536724.png";
import kitchenImage8 from "@assets/Enscape_2025-06-15-15-05-16_1750175670849.png";

const portfolioItems = [
  {
    image: retreatRoomImage,
    title: "Never Too Small",
    category: "residential",
    location: "708 sq ft",
    featured: true,
    description: "Compact home for couple in 30s with natural materials and Japandi-Scandinavian fusion"
  },
  {
    image: kitchenImage,
    title: "Never Too Small Kitchen",
    category: "kitchen",
    location: "Kitchen Design",
    featured: false,
    description: "Warm wood ceiling with clean white cabinetry and integrated dining space"
  },
  {
    image: kitchenImage2,
    title: "Compact Kitchen Design",
    category: "kitchen",
    location: "Open Plan Kitchen",
    featured: false,
    description: "Natural wood elements with modern functionality and seamless flow"
  },
  {
    image: kitchenImage3,
    title: "Integrated Kitchen Space",
    category: "kitchen",
    location: "Never Too Small Project",
    featured: false,
    description: "Sophisticated small space design with warm wood and clean lines"
  },
  {
    image: kitchenImage4,
    title: "Kitchen Living Integration",
    category: "kitchen",
    location: "Open Concept",
    featured: false,
    description: "Seamless transition between kitchen and living areas with natural materials"
  },
  {
    image: kitchenImage5,
    title: "Never Too Small Kitchen Design",
    category: "kitchen",
    location: "Compact Living",
    featured: false,
    description: "Stunning wood ceiling design with white cabinetry and integrated dining area featuring warm natural lighting"
  },
  {
    image: kitchenImage6,
    title: "Compact Kitchen with Wood Ceiling",
    category: "kitchen",
    location: "Never Too Small",
    featured: false,
    description: "Beautifully crafted small space featuring rich wood ceiling, clean white kitchen, and integrated seating with natural light"
  },
  {
    image: kitchenImage7,
    title: "Modern Kitchen & Dining Space",
    category: "kitchen",
    location: "Never Too Small",
    featured: false,
    description: "Sophisticated compact design with warm wood ceiling, streamlined white cabinetry, and built-in dining solution"
  },
  {
    image: kitchenImage8,
    title: "Contemporary Kitchen Design",
    category: "kitchen",
    location: "Never Too Small",
    featured: false,
    description: "Elegant compact kitchen featuring rich wood ceiling, pristine white cabinetry, and thoughtful space optimization"
  }
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeaturedProject = () => {
    // Scroll to the next section after portfolio which contains the featured project
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection && portfolioSection.nextElementSibling) {
      portfolioSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (item: any) => {
    if (item.featured && item.title === "Never Too Small") {
      scrollToFeaturedProject();
    }
  };

  const categories = ["all", "residential", "kitchen"];
  
  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gold text-lg font-medium mb-2">Portfolio</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Explore our curated collection of cozy, natural residential spaces showcasing midcentury modern, Scandinavian, and Japandi design aesthetics.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? "bg-gold text-white"
                    : "text-charcoal hover:bg-gold hover:text-white"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleProjectClick(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-xl font-playfair font-bold mb-2">{item.title}</h3>
                  <p className="text-sm capitalize mb-2">{item.category} • {item.location}</p>
                  <p className="text-xs">{item.description}</p>
                  {item.featured && <p className="text-xs mt-2 bg-gold px-2 py-1 rounded">Click to view details</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="bg-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 inline-block"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
