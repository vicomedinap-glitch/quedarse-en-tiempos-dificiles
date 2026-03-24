export default function StorySection() {
  const storyText = `El 2025 se convirtió en uno de los años más violentos del Ecuador. Las noticias repetían cifras alarmantes y en redes sociales circulaban estadísticas que parecían imposibles de ignorar. Sin embargo, más allá de los números, lo que realmente se instaló en la vida cotidiana fue el miedo. No era solo una noticia; era una sensación constante.

En Guayaquil, especialmente en los alrededores del Malecón 2000, esa tensión se percibe incluso cuando el día parece normal. Por las mañanas, el sol ilumina el río Guayas y la ciudad despierta con su rutina habitual. Los locales abren, los trabajadores caminan con prisa y los vendedores acomodan sus productos antes de que el calor sea intenso. A simple vista, todo continúa como siempre.

Pero nada es exactamente igual.

Muchos han decidido irse del país. Se despiden en silencio, venden lo que pueden y parten buscando estabilidad en otro lugar. Otros, en cambio, se quedan. Y quedarse no es tan sencillo como suena.

En las veredas cercanas al Malecón se observa a personas que dependen de lo que logren vender ese día. No todos los días son buenos, pero no todos tienen la ventaja de tener un puesto donde es legal trabajar. También hay quienes laburan de manera informal, sin contratos ni seguridad social. Cuando escuchan rumores de controles, recogen rápido sus cosas. Al día siguiente regresan. No porque no sientan miedo, sino porque en casa hay cuentas que pagar y familias que sostener.

También están quienes vigilan el lugar durante horas, atentos a cualquier movimiento extraño. En una ciudad donde la violencia ha aumentado, mantenerse alerta no es solo parte del trabajo, sino una necesidad. Cada turno implica tensión, responsabilidad y silencio. Sin embargo, continúan cumpliendo su jornada.

El verdadero conflicto no siempre se dice en voz alta, pero está presente en todos. Aparece en conversaciones breves entre compañeros, en llamadas familiares, en mensajes que llegan desde el extranjero contando cómo es la vida lejos de aquí. "Allá es más tranquilo", dicen algunos. Y entonces la pregunta inevitable surge: ¿me voy o me quedo?

Se cree que irse promete estabilidad y nuevas oportunidades. Pero también significa dejar atrás lo conocido, separarse de la familia y empezar desde cero. Quedarse implica enfrentar la inseguridad, la incertidumbre económica y la desconfianza política. Implica convivir con el miedo, pero también con la esperanza de que las cosas puedan mejorar.

Cada día, esa decisión pesa. Se siente en quienes dudan antes de hacer planes a largo plazo, en quienes piensan si vale la pena invertir, en quienes observan el entorno con preocupación. Sin embargo, pese a esa tensión constante, muchos eligen permanecer.

Y esa elección, repetida día tras día, es lo que convierte a estas personas en héroes de nuestro tiempo.

No porque realicen actos espectaculares ni porque aparezcan en titulares, sino porque resisten. Porque trabajan de manera honrada en medio de la dificultad. Porque no se dejan arrastrar por la violencia ni por la corrupción, aunque el contexto sea adverso. Porque sostienen a sus familias cuando todo parece incierto.

Guayaquil sigue latiendo gracias a ellos: a los vendedores que regresan cada mañana, a los trabajadores que cumplen su turno, a quienes, aun con dudas, no abandonan sus responsabilidades. La ciudad no se mantiene solo por sus edificios o por sus espacios públicos, sino por la gente que decide seguir adelante.

En el Ecuador actual, ser héroe no significa tener capa ni superpoderes. Significa algo más complejo y silencioso: elegir quedarse cuando sería más fácil rendirse. Significa enfrentar el miedo sin negarlo y continuar, incluso cuando el futuro no ofrece garantías.

A veces, la mayor valentía no está en huir, sino en permanecer. Y en tiempos difíciles, quedarse también es una forma de luchar.`;

  const paragraphs = storyText.split('\n\n').filter(p => p.trim());

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-white" data-animate>
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Historia Base
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Story Content */}
        <div className="space-y-6 text-primary">
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-lg md:text-xl leading-8 font-serif text-justify opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${idx * 0.1}s`,
                animationFillMode: 'forwards',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Closing Quote */}
        <div className="mt-16 pt-12 border-t-2 border-accent text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-primary">
            "En tiempos difíciles, quedarse también es una forma de luchar."
          </p>
        </div>
      </div>
    </section>
  );
}