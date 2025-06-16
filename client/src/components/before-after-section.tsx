import retreatRoom1 from "@assets/Enscape_2025-06-15-14-45-36_1750097444134.png";
import retreatRoom2 from "@assets/Enscape_2025-06-15-14-51-27_1750097450448.png";

export default function FeaturedProjectSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gold text-lg font-medium mb-2">Featured Project</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Never Too Small
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            A 708 square feet home designed for a couple in their 30s, featuring a serene retreat room that embodies our natural, cozy aesthetic.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src={retreatRoom1} 
              alt="Never Too Small - Retreat room with natural wood and glass panels" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">Project Details</h3>
              <div className="space-y-3 text-medium-gray">
                <div><span className="font-semibold text-charcoal">Size:</span> 708 square feet</div>
                <div><span className="font-semibold text-charcoal">Clients:</span> Couple in their 30s</div>
                <div><span className="font-semibold text-charcoal">Style:</span> Japandi-Scandinavian fusion</div>
                <div><span className="font-semibold text-charcoal">Focus:</span> Natural materials, cozy retreat spaces</div>
              </div>
            </div>
            <p className="text-lg text-medium-gray leading-relaxed">
              This intimate retreat room showcases our philosophy of creating cozy, natural environments. The space features warm wood framing, abundant natural light through skylights, and carefully selected furniture that embodies midcentury modern simplicity.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">Design Philosophy</h3>
            <p className="text-lg text-medium-gray leading-relaxed">
              The retreat room demonstrates our approach to small space living - maximizing natural light, incorporating organic materials, and creating multifunctional spaces that promote wellbeing and mindfulness.
            </p>
            <div className="space-y-2 text-medium-gray">
              <div>• Natural wood frames and warm tones</div>
              <div>• Strategic use of glass for openness</div>
              <div>• Minimalist furniture with clean lines</div>
              <div>• Integration of plants for biophilic design</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={retreatRoom2} 
              alt="Never Too Small - Alternative view of retreat room showing natural lighting" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
