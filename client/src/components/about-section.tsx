export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-gold text-lg font-medium mb-2">About Studio</h3>
              <h2 className="text-4xl md:text-5xl font-nunito font-bold text-charcoal mb-6">
                Cozy, Natural Interiors for Modern Living
              </h2>
            </div>
            <p className="text-lg text-medium-gray leading-relaxed">
              Studio Nan specializes in creating warm, inviting residential spaces that embrace the harmony of midcentury modern, Scandinavian simplicity, and Japandi minimalism. Our design philosophy centers on natural materials, clean lines, and functional beauty.
            </p>
            <p className="text-lg text-medium-gray leading-relaxed">
              We believe in designing spaces that nurture well-being and connection with nature. Every project focuses on creating cozy environments that feel both timeless and contemporary, using sustainable materials and thoughtful spatial planning to enhance daily living.
            </p>
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
