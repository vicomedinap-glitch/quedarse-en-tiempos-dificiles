import { Play, Instagram as InstagramIcon } from 'react-icons/fa';

export default function TransmediaSection() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-white" data-animate>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Expande la historia
          </h2>
          <p className="text-lg text-darkGray mb-6">
            Descubre más capas narrativas a través de diferentes plataformas
          </p>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Podcast Section */}
          <PodcastSection />

          {/* Instagram Section */}
          <InstagramSection />
        </div>
      </div>
    </section>
  );
}

function PodcastSection() {
  const episodes = [
    {
      id: 1,
      title: '¿Irse o quedarse?',
      duration: '32:15',
      description: 'Entrevista con vendedores ambulantes sobre su decisión de permanecer en Guayaquil.',
      spotifyUrl: 'https://open.spotify.com/show/PODCAST_ID',
    },
    {
      id: 2,
      title: 'Voces del Malecón',
      duration: '28:42',
      description: 'Sonidos ambientes y testimonios reales de trabajadores diurnos.',
      spotifyUrl: 'https://open.spotify.com/show/PODCAST_ID',
    },
    {
      id: 3,
      title: 'Resistencia urbana',
      duration: '35:18',
      description: 'Análisis de cómo la ciudad sigue latiendo a pesar de la adversidad.',
      spotifyUrl: 'https://open.spotify.com/show/PODCAST_ID',
    },
  ];

  return (
    <div className="bg-darkGray text-white rounded-lg p-8 md:p-12">
      <div className="flex items-center mb-6">
        <Play className="text-accent text-4xl mr-4" />
        <h3 className="text-3xl font-serif font-bold">Podcast</h3>
      </div>

      <h4 className="text-2xl font-serif font-bold mb-3">
        ¿Irse o quedarse? Voces de una ciudad que resiste
      </h4>

      <p className="text-lightGray mb-8 leading-8">
        Un podcast que combina sonidos ambientes del Malecón 2000 con testimoniós de quienes viven y trabajan en la zona. Escucha historias que van más allá del texto: el tono de una voz, la respiración entre frases, el ruido de la ciudad.
      </p>

      {/* Episode List */}
      <div className="space-y-4 mb-8">
        {episodes.map((episode) => (
          <div key={episode.id} className="bg-primary bg-opacity-40 p-4 rounded hover:bg-opacity-60 transition-all duration-300">
            <div className="flex items-start justify-between mb-2">
              <h5 className="text-lg font-semibold">{episode.title}</h5>
              <span className="text-accent text-sm">{episode.duration}</span>
            </div>
            <p className="text-lightGray text-sm">{episode.description}</p>
          </div>
        ))}
      </div>

      {/* Listen Button */}
      <a
        href="https://open.spotify.com/show/PODCAST_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-accent text-primary font-bold py-3 px-6 rounded hover:bg-white transition-all duration-300"
      >
        🎧 Escuchar en Spotify
      </a>
    </div>
  );
}

function InstagramSection() {
  const posts = [
    {
      id: 1,
      image: '/images/instagram/post1.jpg',
      likes: '324',
      caption: 'María contando cómo empezó su negocio de arepas #YoMeQuedo',
    },
    {
      id: 2,
      image: '/images/instagram/post2.jpg',
      likes: '287',
      caption: 'Amanecer en el Malecón: rutina de trabajo #Guayaquil',
    },
    {
      id: 3,
      image: '/images/instagram/post3.jpg',
      likes: '412',
      caption: 'Jorge en su turno: vigilancia, responsabilidad, resiliencia #Ecuador2025',
    },
    {
      id: 4,
      image: '/images/instagram/post4.jpg',
      likes: '198',
      caption: 'Rosa en su local: pequeño negocio, gran corazón #Comerciantes',
    },
    {
      id: 5,
      image: '/images/instagram/post5.jpg',
      likes: '356',
      caption: 'Vida en la calle: testimonios que inspiran #Resilencia',
    },
    {
      id: 6,
      image: '/images/instagram/post6.jpg',
      likes: '289',
      caption: 'La ciudad sigue latiendo. Historias que importan. #YoMeQuedo',
    },
  ];

  return (
    <div className="bg-lightGray rounded-lg p-8 md:p-12">
      <div className="flex items-center mb-6">
        <InstagramIcon className="text-accent text-4xl mr-4" />
        <h3 className="text-3xl font-serif font-bold text-primary">Instagram</h3>
      </div>

      <h4 className="text-2xl font-serif font-bold text-primary mb-3">
        Historias de la vida real
      </h4>

      <p className="text-darkGray mb-8 leading-8">
        Entrevistas cortas, reels con testimonios y momentos cotidianos. Cada post es una ventana a la vida de nuestros héroes. Síguenos para conocer nuevas voces cada semana.
      </p>

      {/* Instagram Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {posts.map((post) => (
          <a
            key={post.id}
            href="https://instagram.com/quedarse_en_tiempos_dificiles"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded aspect-square bg-gray-300 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                <p className="font-semibold">❤️ {post.likes}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Hashtags */}
      <div className="mb-6">
        <p className="text-darkGray font-semibold mb-3">Síguenos:</p>
        <div className="flex flex-wrap gap-2">
          {['#Guayaquil', '#Ecuador2025', '#YoMeQuedo', '#Resilencia', '#HistoriasReales'].map((tag) => (
            <a
              key={tag}
              href={`https://instagram.com/explore/tags/${tag.replace('#', '')}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary font-semibold transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>

      {/* Follow Button */}
      <a
        href="https://instagram.com/quedarse_en_tiempos_dificiles"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-accent text-primary font-bold py-3 px-6 rounded hover:bg-primary hover:text-accent transition-all duration-300"
      >
        📱 Seguir en Instagram
      </a>
    </div>
  );
}