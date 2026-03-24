import { useState } from 'react';
import { Heart, MapPin, Package } from 'react-icons/fa';

export default function HeroesSection() {
  const [selectedHero, setSelectedHero] = useState(null);

  // Mock hero data
  const heroes = [
    {
      id: 1,
      name: 'María José',
      role: 'Vendedora ambulante',
      image: '/images/heroes/hero1.jpg',
      description: 'Vende arepas en las mañanas cerca del Malecón. Ha trabajado en la misma esquina durante 8 años.',
      product: 'Arepas caseras, jugos naturales',
      story: 'Cada madrugada, María se despierte a las 4am para preparar las arepas. No es un negocio lucrativo, pero sostiene a sus dos hijos. Decidió quedarse en Guayaquil cuando su hermana se fue a España. "Mi mamá está aquí", dice. "Además, ¿a dónde más iría con lo poco que tengo?"',
      instagram: '@arepas_malecon',
      whatsapp: '+593 99 123 4567',
    },
    {
      id: 2,
      name: 'Jorge',
      role: 'Guardia de seguridad',
      image: '/images/heroes/hero2.jpg',
      description: 'Vigila un almacén en la zona del Malecón. Trabaja en turnos de 12 horas.',
      product: 'Servicio de seguridad',
      story: 'Jorge ha estado en el mismo trabajo durante 5 años. La violencia ha aumentado, pero dice que quedarse es su responsabilidad. Tiene una hija en la universidad. "Si me voy, ¿quién paga sus estudios?"',
      instagram: '@seguridad_guayaquil',
      whatsapp: '+593 99 234 5678',
    },
    {
      id: 3,
      name: 'Rosa',
      role: 'Comerciante de ropa',
      image: '/images/heroes/hero3.jpg',
      description: 'Tiene un pequeño local vendiendo ropa americana. Abrió su negocio hace 3 años.',
      product: 'Ropa importada de calidad',
      story: 'Rosa invirtió todo lo que tenía en su negocio. No ha sido fácil, especialmente con la inseguridad. Pero ha decidido crecer, no huir. "La ciudad necesita personas que crean en ella", dice.',
      instagram: '@ropaamericana_gye',
      whatsapp: '+593 99 345 6789',
    },
    {
      id: 4,
      name: 'Carlos',
      role: 'Mecánico',
      image: '/images/heroes/hero4.jpg',
      description: 'Opera un taller mecánico pequeño desde hace 12 años.',
      product: 'Reparación y mantenimiento de vehículos',
      story: 'Carlos tuvo la oportunidad de emigrar hace dos años. Pero su familia está aquí, sus clientes confían en él. "Un hombre es su palabra", dice mientras arregla un motor.',
      instagram: '@mecanica_carlos_gye',
      whatsapp: '+593 99 456 7890',
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-lightGray" data-animate>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Los Héroes
          </h2>
          <p className="text-lg text-darkGray mb-6">
            Conoce las historias de quienes sostienen Guayaquil día a día
          </p>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Heroes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg card-hover cursor-pointer transition-all duration-300"
              onClick={() => setSelectedHero(hero)}
            >
              {/* Hero Image */}
              <div className="h-64 bg-gray-300 overflow-hidden relative group">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>

              {/* Hero Info */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">
                  {hero.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-3 flex items-center">
                  <MapPin className="mr-2" /> {hero.role}
                </p>
                <p className="text-darkGray text-sm mb-4 line-clamp-3">
                  {hero.description}
                </p>
                <p className="text-sm text-primary font-semibold mb-4 flex items-center">
                  <Package className="mr-2" /> {hero.product}
                </p>

                {/* CTA Button */}
                <button className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center">
                  <Heart className="mr-2" size={16} /> Apoyar su negocio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedHero && (
        <HeroModal hero={selectedHero} onClose={() => setSelectedHero(null)} />
      )}
    </section>
  );
}

function HeroModal({ hero, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-primary hover:text-accent transition-colors z-10"
        >
          ×
        </button>

        {/* Modal Content */}
        <div>
          {/* Hero Image */}
          <div className="h-64 bg-gray-300 overflow-hidden">
            <img
              src={hero.image}
              alt={hero.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hero Details */}
          <div className="p-8">
            <h2 className="text-4xl font-serif font-bold text-primary mb-2">
              {hero.name}
            </h2>
            <p className="text-accent text-lg font-semibold mb-6 flex items-center">
              <MapPin className="mr-2" /> {hero.role}
            </p>

            {/* Expanded Story */}
            <p className="text-lg leading-8 text-darkGray mb-6 font-serif">
              {hero.story}
            </p>

            {/* Product/Service */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="font-semibold text-primary mb-2 flex items-center">
                <Package className="mr-2" /> Producto/Servicio:
              </p>
              <p className="text-darkGray">{hero.product}</p>
            </div>

            {/* Contact Links */}
            <div className="space-y-3">
              <a
                href={`https://instagram.com/${hero.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-accent hover:text-primary font-semibold transition-colors"
              >
                📱 Instagram: {hero.instagram}
              </a>
              <a
                href={`https://wa.me/${hero.whatsapp.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-accent hover:text-primary font-semibold transition-colors"
              >
                💬 WhatsApp: {hero.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}