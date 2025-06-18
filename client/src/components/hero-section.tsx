import backgroundVideo from "@assets/Enscape_2025-06-17-20-04-07_1750213841950.mp4";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 fade-in">
          Cozy Spaces,<br />
          <span className="text-gold">Natural Living</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light fade-in">
          studio Nan. creates warm, natural environments that blend midcentury, Scandinavian, and Japandi aesthetics for comfortable, mindful living.
        </p>
        <div className="space-x-4 fade-in">
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="bg-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 inline-block"
          >
            View Our Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-charcoal transition-all duration-300 inline-block"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
