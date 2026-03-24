import { Github, Instagram, Mail } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Project Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Quedarse</h3>
            <p className="text-lightGray leading-8">
              Proyecto transmedia sobre resiliencia urbana en Guayaquil. Historias de quienes decidieron quedarse en tiempos difíciles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explora</h4>
            <ul className="space-y-2 text-lightGray">
              <li>
                <a href="#historia" className="hover:text-accent transition-colors">
                  Historia Base
                </a>
              </li>
              <li>
                <a href="#heroes" className="hover:text-accent transition-colors">
                  Los Héroes
                </a>
              </li>
              <li>
                <a href="#transmedia" className="hover:text-accent transition-colors">
                  Podcast e Instagram
                </a>
              </li>
              <li>
                <a href="#apoyo" className="hover:text-accent transition-colors">
                  Apoya locales
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/quedarse_en_tiempos_dificiles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors text-2xl"
              >
                <Instagram />
              </a>
              <a
                href="mailto:info@quedarse.ec"
                className="text-accent hover:text-white transition-colors text-2xl"
              >
                <Mail />
              </a>
              <a
                href="https://github.com/vicomedinap-glitch/quedarse-en-tiempos-dificiles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors text-2xl"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Credits and Copyright */}
        <div className="text-center text-lightGray text-sm">
          <p className="mb-2">
            © 2026 Quedarse en Tiempos Difíciles. Proyecto de narrativa transmedia.
          </p>
          <p>
            Creado con dedicación por{' '}
            <a
              href="https://github.com/vicomedinap-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              @vicomedinap-glitch
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}