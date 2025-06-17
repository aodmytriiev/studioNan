


import retreatRoomImage from "@assets/Enscape_2025-06-15-14-45-36_1750097444134.png";
import kitchenImage from "@assets/Enscape_2025-06-15-15-05-16_1750175670849.png";

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
    category: "residential",
    location: "Never Too Small",
    featured: false,
    description: "Elegant compact kitchen featuring rich wood ceiling, pristine white cabinetry, and thoughtful space optimization"
  }
];

export default function PortfolioSection() {
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

  // Show featured project first, then all projects
  const featuredProject = portfolioItems.find(item => item.featured);
  const otherProjects = portfolioItems.filter(item => !item.featured);

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
        
        {/* Featured Project */}
        {featuredProject && (
          <div className="flex justify-center mb-16">
            <div 
              className="relative group cursor-pointer max-w-lg"
              onClick={() => handleProjectClick(featuredProject)}
            >
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="w-full rounded-lg shadow-lg" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-playfair font-bold mb-2">{featuredProject.title}</h3>
                  <p className="text-sm capitalize">{featuredProject.category} • {featuredProject.location}</p>
                  <p className="text-xs mt-2 bg-gold px-2 py-1 rounded">Click to view details</p>
                </div>
              </div>
            </div>
          </div>
        )}


        
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
