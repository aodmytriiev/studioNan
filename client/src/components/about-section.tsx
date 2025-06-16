import newProjectImage from "@assets/Enscape_2025-06-15-15-02-02_1750100675814.png";
import logoPath from "@assets/logo_1750096917228.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-gold text-lg font-medium mb-2">About Studio</h3>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
                Cozy, Natural Interiors for Modern Living
              </h2>
            </div>
            <p className="text-lg text-medium-gray leading-relaxed">
              studio Nan. specializes in creating warm, inviting residential spaces that embrace the harmony of midcentury modern, Scandinavian simplicity, and Japandi minimalism. Our design philosophy centers on natural materials, clean lines, and functional beauty.
            </p>
            <p className="text-lg text-medium-gray leading-relaxed">
              We believe in designing spaces that nurture well-being and connection with nature. Every project focuses on creating cozy environments that feel both timeless and contemporary, using sustainable materials and thoughtful spatial planning to enhance daily living.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
