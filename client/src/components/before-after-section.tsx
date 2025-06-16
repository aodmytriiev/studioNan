export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gold text-lg font-medium mb-2">Transformations</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Before & After
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Witness the dramatic transformations we've achieved through thoughtful design and meticulous attention to detail.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">Before</h3>
            <img 
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Before renovation - outdated living room" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">After</h3>
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="After renovation - modern living room" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">After</h3>
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="After renovation - elegant kitchen" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">Before</h3>
            <img 
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Before renovation - dated kitchen" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
