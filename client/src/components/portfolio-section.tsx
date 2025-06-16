import { useState } from "react";

import retreatRoomImage from "@assets/Enscape_2025-06-15-14-45-36_1750097444134.png";

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
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Cozy Modern Home",
    category: "residential",
    location: "New York"
  },
  {
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500",
    title: "Natural Living Space",
    category: "residential",
    location: "Los Angeles"
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=450",
    title: "Minimalist Kitchen",
    category: "residential",
    location: "Miami"
  },
  {
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Serene Bedroom",
    category: "residential",
    location: "Chicago"
  },
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=450",
    title: "Small Space Renovation",
    category: "renovation",
    location: "Boston"
  },
  {
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500",
    title: "Natural Bathroom",
    category: "residential",
    location: "Seattle"
  }
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
        
        {/* Portfolio Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button 
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === "all" 
                  ? "bg-gold text-white" 
                  : "text-charcoal hover:bg-gold hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveFilter("residential")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === "residential" 
                  ? "bg-gold text-white" 
                  : "text-charcoal hover:bg-gold hover:text-white"
              }`}
            >
              Residential
            </button>
            <button 
              onClick={() => setActiveFilter("renovation")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === "renovation" 
                  ? "bg-gold text-white" 
                  : "text-charcoal hover:bg-gold hover:text-white"
              }`}
            >
              Small Spaces
            </button>
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="masonry">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="masonry-item relative group cursor-pointer"
              onClick={() => handleProjectClick(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full rounded-lg shadow-lg" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-playfair font-bold mb-2">{item.title}</h3>
                  <p className="text-sm capitalize">{item.category} • {item.location}</p>
                  {item.featured && (
                    <p className="text-xs mt-2 bg-gold px-2 py-1 rounded">Click to view details</p>
                  )}
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
