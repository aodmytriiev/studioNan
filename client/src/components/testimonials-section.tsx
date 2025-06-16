import { useQuery } from "@tanstack/react-query";
import { Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-gold text-lg font-medium mb-2">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg animate-pulse">
                <div className="w-8 h-8 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gold text-lg font-medium mb-2">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Read what our satisfied clients have to say about their experience working with our design team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <div className="text-gold text-2xl mb-4">
                <Quote className="w-8 h-8" />
              </div>
              <p className="text-medium-gray font-crimson italic text-lg mb-6">
                "{testimonial.message}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                  <span>{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-medium-gray text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
