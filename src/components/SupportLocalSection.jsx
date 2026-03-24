import { ShoppingCart, MapPin, Phone } from 'react-icons/fa';

export default function SupportLocalSection() {
  // Mock local businesses
  const businesses = [
    {
      id: 1,
      name: 'Arepas de María',
      product: 'Arepas caseras y jugos naturales',
      location: 'Malecón 2000',
      whatsapp: '+593 99 123 4567',
      image: '/images/businesses/arepa.jpg',
    },
    {
      id: 2,
      name: 'Mecánica Carlos',
      product: 'Reparación y mantenimiento vehicular',
      location: 'Centro (cerca del Malecón)',
      whatsapp: '+593 99 456 7890',
      image: '/images/businesses/mecanica.jpg',
    },
    {
      id: 3,
      name: 'Ropa Americana Rosa',
      product: 'Ropa importada de calidad',
      location: 'Zona comercial del Malecón',
      whatsapp: '+593 99 345 6789',
      image: '/images/businesses/ropa.jpg',
    },
    {
      id: 4,
      name: 'Almacén de abarrotes',
      product: 'Productos de primera necesidad',
      location: 'Barrio suburbano',
      whatsapp: '+593 99 234 5678',
      image: '/images/businesses/abarrotes.jpg',
    },
    {
      id: 5,
      name: 'Taller de confección',
      product: 'Ropa hecha a medida',
      location: 'Centro artesanal',
      whatsapp: '+593 99 567 8901',
      image: '/images/businesses/confeccion.jpg',
    },
    {
      id: 6,
      name: 'Comida rápida casera',
      product: 'Empanadas, ceviche, cazuela',
      location: 'Zona comercial céntrica',
      whatsapp: '+593 99 678 9012',
      image: '/images/businesses/comida.jpg',
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-lightGray" data-animate>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Apoya a quienes sostienen la ciudad
          </h2>
          <p className="text-lg text-darkGray mb-6">
            Cada compra es un acto de solidaridad. Conoce los negocios de nuestros héroes.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg card-hover transition-all duration-300"
            >
              {/* Business Image */}
              <div className="h-48 bg-gray-300 overflow-hidden">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Business Info */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">
                  {business.name}
                </h3>

                <p className="text-accent font-semibold text-sm mb-3 flex items-center">
                  <ShoppingCart className="mr-2" /> {business.product}
                </p>

                <p className="text-darkGray text-sm mb-4 flex items-center">
                  <MapPin className="mr-2" /> {business.location}
                </p>

                {/* Contact Button */}
                <a
                  href={`https://wa.me/${business.whatsapp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2" size={16} /> Contactar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-lg p-8 md:p-12">
          <p className="text-2xl font-serif text-primary mb-6">
            ¿Tienes un negocio local que deseas destacar?
          </p>
          <p className="text-lg text-darkGray mb-6">
            Contáctanos para ser parte de esta iniciativa transmedia
          </p>
          <a
            href="mailto:info@quedarse.ec"
            className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded hover:bg-primary hover:text-accent transition-all duration-300"
          >
            📧 Escribir a nuestro equipo
          </a>
        </div>
      </div>
    </section>
  );
}