export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-gold text-lg font-medium mb-2">About Studio</h3>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
                Creating Timeless Interiors with Contemporary Elegance
              </h2>
            </div>
            <p className="text-lg text-medium-gray leading-relaxed">
              With over 15 years of experience in luxury interior design, Nidan Studio has established itself as a premier design studio specializing in residential and commercial spaces. Our philosophy centers on creating environments that seamlessly blend functionality with aesthetic beauty.
            </p>
            <p className="text-lg text-medium-gray leading-relaxed">
              We believe that great design tells a story. Every project begins with understanding our clients' lifestyle, preferences, and dreams, allowing us to create spaces that are not only visually stunning but deeply personal and meaningful.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-charcoal">200+</div>
                <div className="text-medium-gray">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-charcoal">15+</div>
                <div className="text-medium-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-charcoal">50+</div>
                <div className="text-medium-gray">Design Awards</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Interior designer at work" 
              className="rounded-lg shadow-lg w-full h-auto hover-scale" 
            />
            <img 
              src="https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Design studio workspace" 
              className="rounded-lg shadow-lg w-full h-auto hover-scale" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
