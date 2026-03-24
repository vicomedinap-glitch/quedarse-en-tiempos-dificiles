import { useEffect, useState } from 'react';

export default function RevelationSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden" data-animate>
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/revelacion.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${offsetY * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Caption Overlay */}
      <div className="relative z-10 text-center px-4">
        <p className="text-white text-3xl md:text-5xl font-serif italic drop-shadow-lg">
          "El verdadero héroe no siempre se ve"
        </p>
      </div>
    </section>
  );
}