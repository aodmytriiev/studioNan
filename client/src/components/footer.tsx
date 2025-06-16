import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold mb-4">Studio Nan</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating cozy, natural environments that blend midcentury modern, Scandinavian, and Japandi aesthetics for comfortable, mindful living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-white transition-colors duration-300 text-xl">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gold hover:text-white transition-colors duration-300 text-xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.19 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.13-1.11-1.44-1.11-1.44-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.5-4.46-9.96-9.96-9.96z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Residential Design</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Small Space Design</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Design Consultation</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Natural Lighting</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Furniture & Styling</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="pt-2">647-621-3972</li>
              <li>nana8kawamura@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Studio Nan. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
