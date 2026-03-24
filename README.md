# Quedarse en Tiempos Difíciles

**Proyecto transmedia sobre resiliencia urbana en Guayaquil**

## 🎯 Descripción

"Quedarse en Tiempos Difíciles" es una plataforma narrativa transmedia que documenta y celebra las historias de personas que deciden permanecer en Guayaquil a pesar de la adversidad. A través de texto, imágenes, podcast e integración con Instagram, este proyecto da visibilidad a los héroes cotidianos que sostienen la ciudad.

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── HeroSection.jsx          # Sección hero full-screen
│   ├── StorySection.jsx         # Narrativa principal
│   ├── RevelationSection.jsx    # Imagen reveladora con parallax
│   ├── HeroesSection.jsx        # Grid de héroes con modal
│   ├── TransmediaSection.jsx    # Podcast e Instagram
│   ├── SupportLocalSection.jsx  # Negocios locales
│   └── Footer.jsx               # Footer
├── App.jsx                       # Componente principal
├── main.jsx                      # Entry point
└── index.css                     # Estilos globales
```

## 📋 Características

- ✨ Diseño responsive mobile-first
- 🎨 Paleta minimalista (negro, blanco, tonos cálidos)
- 📱 Integración funcional con Instagram
- 🎙️ Embedding de podcast (Spotify)
- ⚡ Animaciones suaves y parallax
- 🎯 Storytelling emocional y editorial
- 🔗 Conexiones a WhatsApp y redes sociales
- 📸 Lazy loading y optimización de imágenes

## 🚀 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/vicomedinap-glitch/quedarse-en-tiempos-dificiles.git
cd quedarse-en-tiempos-dificiles

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de la build
npm preview
```

## 🛠️ Stack Tecnológico

- **React 18** - Framework UI
- **Vite** - Build tool (ultrarrápido)
- **Tailwind CSS** - Utilitarios CSS
- **React Icons** - Iconografía
- **Framer Motion** - Animaciones
- **PostCSS + Autoprefixer** - Procesamiento CSS

## 📐 Secciones

### 1. **Hero Section**
- Imagen full-screen del Malecón
- Título y subtítulo con animaciones
- Scroll indicator

### 2. **Historia Base**
- Narrativa completa con tipografía editorial
- Párrafos animados al scroll
- Cita destacada al final

### 3. **Revelation**
- Imagen impactante
- Efecto parallax
- Caption emotional overlay

### 4. **Heroes**
- Grid responsivo de 4 héroes
- Cards con información básica
- Modal expandible con historia completa
- Links a Instagram y WhatsApp

### 5. **Transmedia**
- **Podcast:** Episodios con duración, descripción, link a Spotify
- **Instagram:** Grid de posts, hashtags, link al perfil

### 6. **Support Local**
- Carousel/grid de negocios locales
- Contacto directo por WhatsApp
- CTA para nuevos negocios

### 7. **Footer**
- Información del proyecto
- Links de navegación
- Social media
- Créditos

## 🎨 Diseño Visual

### Paleta de Colores
- **Primario:** Negro (#000000)
- **Secundario:** Blanco (#FFFFFF)
- **Acento:** Tono cálido (#D4A574)
- **Grises:** #2C2C2C, #F5F5F5

### Tipografía
- **Serif (Historias):** Merriweather
- **Sans (UI):** Inter

## 📱 Responsividad

Diseño mobile-first con breakpoints:
- Mobile: 0-640px
- Tablet: 640-1024px
- Desktop: 1024px+

## 🔗 Integraciones

### Instagram
- Embed de perfil / grid de posts
- Link directo a hashtags (#Guayaquil, #YoMeQuedo)
- Botón "Seguir"

### Podcast (Spotify)
- Link de episodios
- Botón "Escuchar"
- Embed opcional de player

### WhatsApp
- Links dinámicos `https://wa.me/+593XXXXXXXXX`
- CTA desde heroes y negocios

## 🚀 Deployment en Vercel

```bash
# Conectar repositorio a Vercel
# Vercel detectará automáticamente Vite + React
# Configuración automática:
# - Build Command: npm run build
# - Output Directory: dist

# Pushear a main/deploy para activar CI/CD
git push origin main
```

## 📝 Notas de Desarrollo

- Las imágenes están en `/public/images/` (agregar propias)
- Los datos de heroes y negocios están mockados (reemplazar con datos reales)
- El podcast URL requiere actualización con ID real de Spotify
- Instagram profile name: `@quedarse_en_tiempos_dificiles`

## 🤝 Contribuciones

Este es un proyecto transmedia comunitario. Si deseas colaborar:
1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-historia`)
3. Commit tus cambios (`git commit -m 'Add nueva historia'`)
4. Push a la rama (`git push origin feature/nueva-historia`)
5. Abre un Pull Request

## 📄 Licencia

Proyecto de narrativa transmedia. Créditos y atribuciones requeridas.

## 👤 Autor

**@vicomedinap-glitch**

---

**Hecho con 💙 para quienes decidieron quedarse**