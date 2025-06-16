import retreatRoom1 from "@assets/Enscape_2025-06-15-14-45-36_1750097444134.png";
import retreatRoom2 from "@assets/Enscape_2025-06-15-14-51-27_1750097450448.png";
import livingRoomImage from "@assets/Enscape_2025-06-16-12-48-13_1750100135389.png";
import floorPlan from "@assets/SMALL FLOOR PLAN_1750108371634.pdf";
import floorPlan3D from "@assets/image_1750101947872.png";

export default function FeaturedProjectSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gold text-lg font-medium mb-2">Featured Projects</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Never Too Small
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            A 708 square feet home designed for a couple in their 30s. Explore different rooms of this cozy project that embodies our natural, midcentury-Japandi aesthetic.
          </p>
        </div>
        
        {/* Project Overview */}
        <div className="mb-16">
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-playfair font-bold text-charcoal text-center">Project Overview</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
              <div className="space-y-2">
                <div className="font-semibold text-charcoal">Size</div>
                <div className="text-medium-gray">708 sq ft</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-charcoal">Clients</div>
                <div className="text-medium-gray">Couple in 30s</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-charcoal">Style</div>
                <div className="text-medium-gray">Japandi-Scandinavian</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-charcoal">Focus</div>
                <div className="text-medium-gray">Natural Materials</div>
              </div>
            </div>
            <p className="text-lg text-medium-gray leading-relaxed max-w-4xl mx-auto text-center">
              This compact home demonstrates our expertise in small space design, featuring a serene retreat room that maximizes natural light and incorporates warm wood elements with minimalist furniture for comfortable, mindful living.
            </p>
          </div>
        </div>

        {/* Floor Plan */}
        <div className="mb-20">
          <h3 className="text-2xl font-playfair font-bold text-charcoal mb-8 text-center">Floor Plan</h3>
          <div className="max-w-5xl mx-auto mb-8">
            <div className="flex gap-6 justify-center">
              <div className="space-y-2">
                <img 
                  src={floorPlan} 
                  alt="Never Too Small - Complete floor plan showing layout of 708 sq ft home" 
                  className="rounded-lg shadow-lg w-80 h-96 object-cover cursor-pointer hover:shadow-xl transition-shadow duration-300" 
                  onClick={() => window.open(floorPlan, '_blank')}
                />
                <p className="text-xs text-medium-gray text-center w-80">Architectural drawings with measurements (click to enlarge)</p>
              </div>
              <div className="space-y-2">
                <img 
                  src={floorPlan3D} 
                  alt="Never Too Small - 3D floor plan visualization showing furniture layout and spatial relationships" 
                  className="rounded-lg shadow-lg w-80 h-96 object-cover cursor-pointer hover:shadow-xl transition-shadow duration-300" 
                  onClick={() => window.open(floorPlan3D, '_blank')}
                />
                <p className="text-xs text-medium-gray text-center w-80">3D visualization with furniture layout (click to enlarge)</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-playfair font-bold text-charcoal mb-4 text-center">Layout Features</h4>
            <div className="grid md:grid-cols-2 gap-8 text-medium-gray">
              <div className="space-y-2">
                <div>• Open-plan living and dining area</div>
                <div>• Multi-level design maximizing vertical space</div>
                <div>• Efficient kitchen with integrated storage</div>
              </div>
              <div className="space-y-2">
                <div>• Private retreat room with skylights</div>
                <div>• Compact bathroom with clever layout</div>
                <div>• Outdoor balcony extending living space</div>
              </div>
            </div>
          </div>
        </div>

        {/* Retreat Room Photos */}
        <div>
          <h3 className="text-2xl font-playfair font-bold text-charcoal mb-8 text-center">Retreat Room</h3>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <img 
                src={retreatRoom1} 
                alt="Never Too Small - Retreat room with natural wood and glass panels" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Natural wood framing with glass panels and skylight</p>
            </div>
            <div className="space-y-4">
              <img 
                src={retreatRoom2} 
                alt="Never Too Small - Alternative view of retreat room showing natural lighting" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Alternative view showcasing natural lighting and minimalist furniture</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-playfair font-bold text-charcoal mb-4 text-center">Design Features</h4>
            <div className="grid md:grid-cols-2 gap-8 text-medium-gray">
              <div className="space-y-2">
                <div>• Warm wood frames creating visual warmth</div>
                <div>• Strategic glass panels for openness</div>
                <div>• Skylight maximizing natural light</div>
              </div>
              <div className="space-y-2">
                <div>• Minimalist furniture with clean lines</div>
                <div>• Integration of plants for biophilic design</div>
                <div>• Multifunctional space for relaxation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Living Room Photos */}
        <div className="mt-20">
          <h3 className="text-2xl font-playfair font-bold text-charcoal mb-8 text-center">Living Room</h3>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="space-y-4">
              <img 
                src={livingRoomImage} 
                alt="Never Too Small - Living room with exposed brick fireplace and multi-level design" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Open-plan living area featuring exposed brick accent wall with built-in fireplace</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-playfair font-bold text-charcoal mb-4 text-center">Design Features</h4>
            <div className="grid md:grid-cols-2 gap-8 text-medium-gray">
              <div className="space-y-2">
                <div>• Exposed brick accent wall for texture</div>
                <div>• Built-in electric fireplace for ambiance</div>
                <div>• Multi-level design maximizing space</div>
              </div>
              <div className="space-y-2">
                <div>• Floating shelves for display and storage</div>
                <div>• Neutral sectional sofa with warm tones</div>
                <div>• Glass stair railings maintaining openness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
