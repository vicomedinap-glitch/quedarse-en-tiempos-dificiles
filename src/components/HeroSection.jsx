import { useEffect, useState } from 'react';
import { ChevronDown } from 'react-icons/fa';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/images/malecon.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: scrolled ? 0.7 : 1,
          transition: 'opacity 0.5s ease',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-6 animate-slideUp drop-shadow-lg">
          Quedarse en Tiempos Difíciles
        </h1>

        {/* Subtitle */}
        <p className="text-white text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto animate-fadeIn drop-shadow-md">
          Historias de quienes decidieron quedarse
        </p>

        {/* Decorative line */}
        <div className="w-16 h-1 bg-accent mx-auto mb-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-10 flex flex-col items-center cursor-pointer scroll-indicator">
        <p className="text-white text-sm mb-3 font-light">Desplaza hacia abajo</p>
        <ChevronDown className="text-accent text-2xl" />
      </div>
    </section>
  );
}