import retreatRoom1 from "@assets/Enscape_2025-06-15-14-45-36_1750097444134.png";
import retreatRoom2 from "@assets/Enscape_2025-06-15-14-51-27_1750097450448.png";
import livingRoomImage from "@assets/Enscape_2025-06-16-12-48-13_1750100135389.png";
import kitchenImage from "@assets/Enscape_2025-06-15-15-05-16_1750175670849.png";
import porchImage1 from "@assets/Enscape_2025-06-17-13-59-16_1750183904327.png";
import porchImage2 from "@assets/Enscape_2025-06-17-14-05-43_1750183935173.png";
import bathroomImage1 from "@assets/Enscape_2025-06-16-12-53-42_1750184055626.png";
import bathroomImage2 from "@assets/Enscape_2025-06-16-12-56-20_1750184061063.png";
import bathroomImage3 from "@assets/Enscape_2025-06-16-12-58-19_1750184073868.png";
import bathroomImage4 from "@assets/Enscape_2025-06-17-14-43-29_1750185888553.png";
import bedroomImage1 from "@assets/Enscape_2025-06-17-15-18-55_1750197714651.png";
import bedroomImage2 from "@assets/Enscape_2025-06-17-15-21-08_1750197718208.png";
import bedroomImage3 from "@assets/Enscape_2025-06-17-18-24-39_1750199144433.png";
import workspaceImage1 from "@assets/Enscape_2025-06-17-18-16-37_1750198785849.png";
import workspaceImage2 from "@assets/Enscape_2025-06-17-18-18-21_1750198789438.png";
import floorPlan from "@assets/Screenshot 2025-06-16 171454_1750108520344.png";
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
          <h3 className="text-2xl font-playfair font-bold mb-8 text-center" style={{ color: 'hsl(36, 45%, 64.3%)' }}>Living Room & Kitchen</h3>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <img 
                src={livingRoomImage} 
                alt="Never Too Small - Living room with exposed brick fireplace and multi-level design" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Open-plan living area featuring exposed brick accent wall with built-in fireplace</p>
            </div>
            <div className="space-y-4">
              <img 
                src={kitchenImage} 
                alt="Never Too Small - Kitchen with rich wood ceiling and white cabinetry" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Elegant kitchen featuring rich wood ceiling and pristine white cabinetry</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-playfair font-bold text-charcoal mb-4 text-center">Design Features</h4>
            <div className="grid md:grid-cols-2 gap-8 text-medium-gray">
              <div className="space-y-2">
                <div>• Exposed brick accent wall for texture</div>
                <div>• Built-in electric fireplace for ambiance</div>
                <div>• Multi-level design maximizing space</div>
                <div>• Rich wood ceiling creating warmth</div>
              </div>
              <div className="space-y-2">
                <div>• Floating shelves for display and storage</div>
                <div>• Neutral sectional sofa with warm tones</div>
                <div>• Glass stair railings maintaining openness</div>
                <div>• Streamlined white cabinetry with integrated dining</div>
              </div>
            </div>
          </div>
        </div>

        {/* Porch Photos */}
        <div className="mt-20">
          <h3 className="text-2xl font-playfair font-bold mb-8 text-center" style={{ color: 'hsl(36, 45%, 64.3%)' }}>Porch Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <img 
                src={porchImage1} 
                alt="Never Too Small - Porch with skylight and natural materials" 
                className="rounded-lg shadow-lg w-full h-80 object-cover" 
              />
              <p className="text-sm text-medium-gray text-center">Covered porch featuring skylight, natural materials, and integrated seating</p>
            </div>
            <div className="space-y-4">
              <img 
                src={porchImage2} 
                alt="Never Too Small - Porch dining area with garden views" 
                className="rounded-lg shadow-lg w-full h-80 object-cover" 
              />
              <p className="text-sm text-medium-gray text-center">Porch dining area with terrazzo table and views to garden space</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-playfair font-bold text-charcoal mb-4 text-center">Design Features</h4>
            <div className="grid md:grid-cols-2 gap-8 text-medium-gray">
              <div className="space-y-2">
                <div>• Overhead skylight for natural lighting</div>
                <div>• Warm wood framing and beams</div>
                <div>• Built-in bench seating with cushions</div>
                <div>• Natural material palette</div>
              </div>
              <div className="space-y-2">
                <div>• Terrazzo dining table integration</div>
                <div>• Garden views through glass panels</div>
                <div>• Indoor-outdoor living connection</div>
                <div>• Textured wall finishes for warmth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bathroom Photos */}
        <div className="mt-20">
          <h3 className="text-2xl font-playfair font-bold mb-8 text-center" style={{ color: 'hsl(36, 45%, 64.3%)' }}>Bathroom Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <img 
                src={bathroomImage1} 
                alt="Never Too Small - Bathroom with wood accent wall and shower area" 
                className="rounded-lg shadow-lg w-full h-96 object-cover" 
              />
              <p className="text-sm text-medium-gray text-center">Wood accent wall with integrated storage and rainfall shower</p>
            </div>
            <div className="space-y-4">
              <img 
                src={bathroomImage2} 
                alt="Never Too Small - Compact bathroom vanity with vessel sink" 
                className="rounded-lg shadow-lg w-full h-96 object-cover" 
              />
              <p className="text-sm text-medium-gray text-center">Floating vanity with vessel sink and mirror storage</p>
            </div>
            <div className="space-y-4">
              <img 
                src={bathroomImage3} 
                alt="Never Too Small - Full bathroom view with glass shower partition" 
                className="rounded-lg shadow-lg w-full h-96 object-cover" 
              />
              <p className="text-sm text-medium-gray text-center">Complete layout with glass partition and efficient space planning</p>
            </div>
            <div className="space-y-4">
              <img 
                src={bathroomImage4} 
                alt="Never Too Small - Bathroom with bathtub and overhead shower system" 
                className="rounded-lg shadow-lg w-full h-96 object-cover" 
              />
              <p className="text-sm text-medium-gray text-center">Luxurious bathtub area with overhead rain shower and wood cabinetry</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-playfair font-bold text-charcoal mb-4 text-center">Design Features</h4>
            <div className="grid md:grid-cols-2 gap-8 text-medium-gray">
              <div className="space-y-2">
                <div>• Warm wood accent walls for texture</div>
                <div>• Floating vanity maximizing floor space</div>
                <div>• Vessel sink with modern aesthetics</div>
                <div>• Wall-mounted toilet for clean lines</div>
                <div>• Integrated bathtub with sleek design</div>
              </div>
              <div className="space-y-2">
                <div>• Glass shower partition maintaining openness</div>
                <div>• Overhead rain shower system</div>
                <div>• Built-in storage niches and shelving</div>
                <div>• Neutral tile palette with wood warmth</div>
                <div>• Spa-like atmosphere with natural materials</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bedroom Photos */}
        <div className="mt-20">
          <h3 className="text-2xl font-playfair font-bold mb-8 text-center" style={{ color: 'hsl(36, 45%, 64.3%)' }}>Bedroom Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <img 
                src={bedroomImage1} 
                alt="Never Too Small - Elevated bedroom with glass enclosure and multi-level design" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Elevated bedroom with glass enclosure showcasing multi-level spatial design</p>
            </div>
            <div className="space-y-4">
              <img 
                src={bedroomImage2} 
                alt="Never Too Small - Bedroom glass cube with integrated storage and lighting" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Glass cube bedroom with integrated storage, pendant lighting, and brick accent wall</p>
            </div>
            <div className="space-y-4">
              <img 
                src={bedroomImage3} 
                alt="Never Too Small - Bedroom interior with concrete walls and woven pendant light" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Bedroom interior featuring concrete walls, built-in shelving, and natural woven pendant light</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-playfair font-bold text-charcoal mb-4 text-center">Design Features</h4>
            <div className="grid md:grid-cols-2 gap-8 text-medium-gray">
              <div className="space-y-2">
                <div>• Elevated glass cube bedroom design</div>
                <div>• Raw concrete walls creating industrial warmth</div>
                <div>• Built-in shelving for books and storage</div>
                <div>• Natural woven pendant light as focal point</div>
              </div>
              <div className="space-y-2">
                <div>• Multi-level spatial arrangement</div>
                <div>• Glass panels maintaining visual openness</div>
                <div>• Integrated storage within glass walls</div>
                <div>• Minimalist furnishing with quality materials</div>
              </div>
            </div>
          </div>
        </div>

        {/* Workspace Photos */}
        <div className="mt-20">
          <h3 className="text-2xl font-playfair font-bold mb-8 text-center" style={{ color: 'hsl(36, 45%, 64.3%)' }}>Workspace Design</h3>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <img 
                src={workspaceImage1} 
                alt="Never Too Small - Workspace with wooden ceiling grid and floating shelves" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Workspace featuring wooden ceiling grid, floating shelves, and integrated L-shaped desk</p>
            </div>
            <div className="space-y-4">
              <img 
                src={workspaceImage2} 
                alt="Never Too Small - Workspace showing multi-level design and staircase integration" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <p className="text-sm text-medium-gray text-center">Multi-level workspace with staircase integration and pendant lighting</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-playfair font-bold text-charcoal mb-4 text-center">Design Features</h4>
            <div className="grid md:grid-cols-2 gap-8 text-medium-gray">
              <div className="space-y-2">
                <div>• Striking wooden ceiling grid design feature</div>
                <div>• L-shaped built-in desk maximizing corner space</div>
                <div>• Floating shelves for books and display</div>
                <div>• Warm wood tones creating cohesive design</div>
              </div>
              <div className="space-y-2">
                <div>• Modern blue chairs adding color accent</div>
                <div>• Task lighting with pendant and desk lamps</div>
                <div>• Open connection to multi-level living</div>
                <div>• Efficient workspace within compact footprint</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
