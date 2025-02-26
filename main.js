document.addEventListener('DOMContentLoaded', () => {
    /* --- Carrusel --- */
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    const totalImages = images.length;
    const intervalTime = 5000;
    let sliderInterval = setInterval(nextSlide, intervalTime);
  
    function showSlide(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalImages;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showSlide(currentIndex);
    }
  
    document.getElementById('next').addEventListener('click', () => {
      clearInterval(sliderInterval);
      nextSlide();
      sliderInterval = setInterval(nextSlide, intervalTime);
    });
  
    document.getElementById('prev').addEventListener('click', () => {
      clearInterval(sliderInterval);
      prevSlide();
      sliderInterval = setInterval(nextSlide, intervalTime);
    });
  
    /* --- Menú Hamburguesa --- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const closeBtn = document.getElementById('close-btn');
  
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
    });
  
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  
    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open')) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
          navMenu.classList.remove('open');
        }
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('tarjetas-track');
    const prevBtn = document.getElementById('tarjetas-prev');
    const nextBtn = document.getElementById('tarjetas-next');
  
    const itemWidth = 160;          // Ancho de cada tarjeta
    const gap = 16;                 // Espacio entre tarjetas (1rem ≈ 16px)
    const itemsToShow = 6;          // Cantidad de tarjetas visibles
    const items = track.querySelectorAll('.tarjeta-item');
    const totalItems = items.length;
  
    // Calculamos el máximo índice (pasos) que se puede mover
    const maxIndex = Math.max(totalItems - itemsToShow, 0);
    let currentIndex = 0;
  
    // Función para actualizar la posición del track
    function updateCarousel() {
      const distance = (itemWidth + gap) * currentIndex;
      track.style.transform = `translateX(-${distance}px)`;
    }
  
    // Al pulsar la flecha derecha: si estamos en el último paso, volvemos a la primera tarjeta
    nextBtn.addEventListener('click', () => {
      if (currentIndex >= maxIndex) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateCarousel();
    });
  
    // Al pulsar la flecha izquierda: si estamos en la primera tarjeta, vamos al último paso
    prevBtn.addEventListener('click', () => {
      if (currentIndex <= 0) {
        currentIndex = maxIndex;
      } else {
        currentIndex--;
      }
      updateCarousel();
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('recargas-track');
  const prevBtn = document.getElementById('recargas-prev');
  const nextBtn = document.getElementById('recargas-next');

  const itemWidth = 160, gap = 16, itemsToShow = 6;
  const items = track.querySelectorAll('.recarga-item');
  const totalItems = items.length;
  const maxIndex = Math.max(totalItems - itemsToShow, 0);
  let currentIndex = 0;
  
  function updateCarousel() {
    track.style.transform = `translateX(-${(itemWidth + gap) * currentIndex}px)`;
  }
  
  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateCarousel();
  });
  
  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    updateCarousel();
  });
});


/* VARIABLES */
const chatToggle = document.getElementById('chatToggle');
const chatbot = document.getElementById('chatbot');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');

// Flujo de conversación con mayor contenido y tarjetas informativas en todas las ramas
const conversationFlow = {
  welcome: {
    message: '¡Hola! Bienvenido a GAME.AI, tu tienda de videojuegos, recargas y tarjetas. Aquí encontrarás las mejores ofertas para una experiencia gamer inigualable.\n\nPresiona "Comenzar" para iniciar.',
    options: ['Comenzar']
  },
  main: {
    message: '¿En qué podemos ayudarte hoy?',
    options: [
      'Comprar Videojuegos',
      'Recargas y Tarjetas',
      'Soporte y Consultas',
      'Ofertas y Promociones'
    ]
  },
  // Rama Comprar Videojuegos
  comprar: {
    message: '¿En qué plataforma deseas comprar videojuegos?',
    options: ['PC', 'Consola', 'Móvil', 'Regresar']
  },
  comprarPC: {
    message: 'Selecciona un género de videojuegos para PC:',
    options: ['Acción', 'Aventura', 'RPG', 'Estrategia', 'Regresar']
  },
  comprarConsola: {
    message: 'Selecciona un género de videojuegos para Consola:',
    options: ['Acción', 'Aventura', 'Deportes', 'RPG', 'Regresar']
  },
  comprarMovil: {
    message: 'Selecciona un género de videojuegos para Móvil:',
    options: ['Casuales', 'Acción', 'Estrategia', 'Regresar']
  },
  // Rama PC - Acción
  comprarPC_Accion: {
    message: `Estos son los 5 juegos de Acción más populares para PC:

1. **Rage Strike**  
   *Descripción:* Una experiencia intensa de disparos en un mundo distópico.  
   *Características:* Gráficos avanzados, juego en línea y modos multijugador.  
   *Precio:* $59.99

2. **Battle Fury**  
   *Descripción:* Combina acción y estrategia en combates épicos.  
   *Características:* Inteligencia artificial avanzada y personalización de personajes.  
   *Precio:* $49.99

3. **Cyber Blade**  
   *Descripción:* Aventura futurista con toques de adrenalina.  
   *Características:* Mundo abierto, misiones dinámicas y gran rejugabilidad.  
   *Precio:* $39.99

4. **Shadow Force**  
   *Descripción:* Acción táctica con elementos de sigilo y estrategia.  
   *Características:* Niveles dinámicos y juego cooperativo.  
   *Precio:* $54.99

5. **Urban Chaos**  
   *Descripción:* Combates callejeros llenos de adrenalina en escenarios urbanos.  
   *Características:* Historia inmersiva y sistema de progresión.  
   *Precio:* $44.99

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama PC - Aventura
  comprarPC_Aventura: {
    message: `Estos son los 5 juegos de Aventura más populares para PC:

1. **Mystic Quest**  
   *Descripción:* Explora mundos mágicos llenos de enigmas y desafíos.  
   *Características:* Gráficos de alta calidad, narrativa épica y puzzles envolventes.  
   *Precio:* $49.99

2. **Lost Legends**  
   *Descripción:* Embárcate en una aventura épica a través de tierras místicas.  
   *Características:* Mundo abierto, misiones secundarias y ambiente encantador.  
   *Precio:* $44.99

3. **Enchanted Journey**  
   *Descripción:* Viaja por reinos encantados y descubre secretos ancestrales.  
   *Características:* Puzzles inteligentes y exploración libre.  
   *Precio:* $39.99

4. **Island of Secrets**  
   *Descripción:* Descubre misterios en una isla enigmática.  
   *Características:* Retos de supervivencia y narrativa intrigante.  
   *Precio:* $34.99

5. **Realm of Wonders**  
   *Descripción:* Aventúrate en un reino lleno de maravillas y enigmas.  
   *Características:* Combate estratégico y gran rejugabilidad.  
   *Precio:* $59.99

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama PC - RPG
  comprarPC_RPG: {
    message: `Estos son los 5 juegos de RPG más populares para PC:

1. **Dragon's Legacy**  
   *Descripción:* Sumérgete en un mundo de fantasía medieval lleno de dragones y magia.  
   *Características:* Sistema de clases, misiones épicas y mundo abierto.  
   *Precio:* $59.99

2. **Mystic Realms**  
   *Descripción:* Explora reinos místicos y enfrenta desafíos legendarios.  
   *Características:* Narrativa envolvente y batallas estratégicas.  
   *Precio:* $49.99

3. **Chrono Quest**  
   *Descripción:* Viaja en el tiempo para cambiar el destino del mundo.  
   *Características:* Viajes temporales y múltiples finales.  
   *Precio:* $44.99

4. **Legends of Valor**  
   *Descripción:* Vive una aventura heroica en un universo de fantasía.  
   *Características:* Personalización profunda y combates intensos.  
   *Precio:* $54.99

5. **Eternal Odyssey**  
   *Descripción:* Una odisea sin fin en tierras místicas repletas de secretos.  
   *Características:* Historia interactiva y gran rejugabilidad.  
   *Precio:* $64.99

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama PC - Estrategia
  comprarPC_Estrategia: {
    message: `Estos son los 5 juegos de Estrategia más populares para PC:

1. **Empire Builder**  
   *Descripción:* Construye imperios y conquista territorios.  
   *Características:* Gestión de recursos y campañas desafiantes.  
   *Precio:* $39.99

2. **War Tactics**  
   *Descripción:* Lidera ejércitos en intensas batallas tácticas.  
   *Características:* Combate por turnos y mapas dinámicos.  
   *Precio:* $44.99

3. **Kingdom Conquest**  
   *Descripción:* Estrategia medieval con énfasis en diplomacia y guerra.  
   *Características:* Alianzas estratégicas y batallas épicas.  
   *Precio:* $49.99

4. **Galaxy Commander**  
   *Descripción:* Domina el espacio y lidera flotas en conflictos intergalácticos.  
   *Características:* Gestión espacial y estrategia por turnos.  
   *Precio:* $54.99

5. **Battle Plan**  
   *Descripción:* Desafía a tus oponentes con tácticas innovadoras.  
   *Características:* Simulación realista y partidas competitivas.  
   *Precio:* $59.99

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama Consola - Acción
  comprarConsola_Accion: {
    message: `Estos son los 5 juegos de Acción más populares para Consola:

1. **Console Clash**  
   *Descripción:* Acción intensa con gráficos espectaculares y jugabilidad fluida.  
   *Características:* Multijugador en línea y modo historia.  
   *Precio:* $59.99

2. **Shadow Strike**  
   *Descripción:* Combate sigiloso en entornos oscuros y estratégicos.  
   *Características:* Modo campaña y retos desafiantes.  
   *Precio:* $49.99

3. **Warzone Fury**  
   *Descripción:* Disparos intensos y acción desenfrenada en escenarios bélicos.  
   *Características:* Armas personalizables y modos competitivos.  
   *Precio:* $54.99

4. **Vortex Vengeance**  
   *Descripción:* Acción con efectos visuales impresionantes y ritmo trepidante.  
   *Características:* Mundo dinámico y modos multijugador.  
   *Precio:* $64.99

5. **Iron Legacy**  
   *Descripción:* Combates de alto octanaje con mecánicas innovadoras.  
   *Características:* Historia inmersiva y controles intuitivos.  
   *Precio:* $59.99

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama Consola - Aventura
  comprarConsola_Aventura: {
    message: `Estos son los 5 juegos de Aventura más populares para Consola:

1. **Epic Journey**  
   *Descripción:* Embarca en una aventura épica llena de misterios y paisajes impresionantes.  
   *Características:* Mundo abierto y narrativa profunda.  
   *Precio:* $49.99

2. **Hidden Realms**  
   *Descripción:* Descubre secretos en reinos ocultos con gráficos de alta calidad.  
   *Características:* Puzzles complejos y exploración libre.  
   *Precio:* $44.99

3. **Dreamscape**  
   *Descripción:* Viaja por mundos oníricos llenos de enigmas.  
   *Características:* Estilo artístico único y gameplay creativo.  
   *Precio:* $54.99

4. **Mystery Quest**  
   *Descripción:* Resuelve misterios y descubre leyendas antiguas.  
   *Características:* Investigación interactiva y desafíos intrigantes.  
   *Precio:* $39.99

5. **Legendary Paths**  
   *Descripción:* Una travesía épica en reinos mágicos y desafiantes.  
   *Características:* Misiones emocionantes y escenarios cautivadores.  
   *Precio:* $59.99

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama Consola - Deportes
  comprarConsola_Deportes: {
    message: `Estos son los 5 juegos de Deportes más populares para Consola:

1. **Pro League Soccer**  
   *Descripción:* Experimenta la emoción del fútbol profesional con jugabilidad realista.  
   *Características:* Modos de torneo y gráficos impresionantes.  
   *Precio:* $49.99

2. **Ultimate Basketball**  
   *Descripción:* Disfruta de partidos intensos y emocionantes en la cancha.  
   *Características:* Modo multijugador y estadísticas detalladas.  
   *Precio:* $44.99

3. **Racing Thunder**  
   *Descripción:* Carreras llenas de adrenalina con pistas desafiantes.  
   *Características:* Personalización de autos y gráficos realistas.  
   *Precio:* $59.99

4. **Champion's Arena**  
   *Descripción:* Competencias deportivas con estilo arcade y acción ininterrumpida.  
   *Características:* Diversidad de deportes y controles intuitivos.  
   *Precio:* $39.99

5. **Grand Slam**  
   *Descripción:* Vive la emoción del tenis profesional con intensidad.  
   *Características:* Torneos y jugabilidad precisa.  
   *Precio:* $54.99

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama Consola - RPG
  comprarConsola_RPG: {
    message: `Estos son los 5 juegos de RPG más populares para Consola:

1. **Console Legends**  
   *Descripción:* Sumérgete en un universo de fantasía con una historia épica.  
   *Características:* Mundo expansivo y batallas estratégicas.  
   *Precio:* $59.99

2. **Kingdom Chronicles**  
   *Descripción:* Construye y defiende reinos en tiempos medievales.  
   *Características:* Estrategia en tiempo real y gráficos impresionantes.  
   *Precio:* $49.99

3. **Fate's Destiny**  
   *Descripción:* Enfrenta un destino lleno de desafíos en un mundo fantástico.  
   *Características:* Sistema de decisiones y combates tácticos.  
   *Precio:* $54.99

4. **Mystic Warriors**  
   *Descripción:* Combina acción y RPG en un entorno mágico.  
   *Características:* Múltiples clases y misiones épicas.  
   *Precio:* $64.99

5. **Ancient Realms**  
   *Descripción:* Explora civilizaciones antiguas y descubre secretos olvidados.  
   *Características:* Historia profunda y mundo abierto.  
   *Precio:* $59.99

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama Móvil - Casuales
  comprarMovil_Casuales: {
    message: `Estos son los 5 juegos Casuales más populares para Móvil:

1. **Pocket Puzzle**  
   *Descripción:* Desafía tu mente con puzzles sencillos y adictivos.  
   *Características:* Diseño minimalista y niveles variados.  
   *Precio:* $4.99

2. **Candy Blast**  
   *Descripción:* Un rompecabezas dulce y colorido para relajarte.  
   *Características:* Combos y gráficos vibrantes.  
   *Precio:* $3.99

3. **Farm Frenzy**  
   *Descripción:* Administra tu granja y completa divertidos desafíos diarios.  
   *Características:* Gestión de recursos y eventos especiales.  
   *Precio:* $5.99

4. **Word Quest**  
   *Descripción:* Amplía tu vocabulario formando palabras de manera divertida.  
   *Características:* Retos diarios y competencias en línea.  
   *Precio:* $2.99

5. **Mini Marathon**  
   *Descripción:* Un runner casual que reta tus reflejos.  
   *Características:* Partidas cortas y desafíos infinitos.  
   *Precio:* $3.49

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama Móvil - Acción
  comprarMovil_Accion: {
    message: `Estos son los 5 juegos de Acción más populares para Móvil:

1. **Mobile Mayhem**  
   *Descripción:* Acción vertiginosa y combates intensos en la palma de tu mano.  
   *Características:* Controles táctiles y modos multijugador.  
   *Precio:* $4.99

2. **Hero Dash**  
   *Descripción:* Corre, salta y lucha en escenarios llenos de adrenalina.  
   *Características:* Niveles desafiantes y power-ups.  
   *Precio:* $3.99

3. **Strike Force Mobile**  
   *Descripción:* Disparos y estrategias rápidas en combates constantes.  
   *Características:* Armas personalizables y misiones dinámicas.  
   *Precio:* $5.99

4. **Blade Runner**  
   *Descripción:* Combate con espadas en un mundo futurista.  
   *Características:* Movimientos fluidos y combates estratégicos.  
   *Precio:* $4.49

5. **Urban Brawl**  
   *Descripción:* Acción urbana con combates realistas y estrategia.  
   *Características:* Modo multijugador y efectos visuales impactantes.  
   *Precio:* $3.49

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama Móvil - Estrategia
  comprarMovil_Estrategia: {
    message: `Estos son los 5 juegos de Estrategia más populares para Móvil:

1. **Tiny Kingdoms**  
   *Descripción:* Construye y administra tu propio reino.  
   *Características:* Gestión de recursos y batallas tácticas.  
   *Precio:* $4.99

2. **Battle Grid**  
   *Descripción:* Enfréntate a oponentes en combates por turnos.  
   *Características:* Sistema de cuadrícula y habilidades especiales.  
   *Precio:* $3.99

3. **Clash of Minds**  
   *Descripción:* Demuestra tu ingenio en desafíos estratégicos.  
   *Características:* Puzzles y niveles progresivos.  
   *Precio:* $5.49

4. **War Tactics Mobile**  
   *Descripción:* Lidera a tus tropas en batallas tácticas intensas.  
   *Características:* Estrategia por turnos y desafíos únicos.  
   *Precio:* $4.49

5. **Empire Rise**  
   *Descripción:* Expande tu imperio en este juego estratégico envolvente.  
   *Características:* Alianzas y guerras épicas.  
   *Precio:* $5.99

Para finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.`,
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama Recargas y Tarjetas
  recargas: {
    message: 'Elige tu método de recarga o tarjeta:',
    options: ['Steam', 'PlayStation Store', 'Xbox Live', 'Nintendo eShop', 'Google Play', 'Apple Store', 'Regresar']
  },
  recargas_Steam: {
    message: `Estas son nuestras ofertas para Steam:

1. **Opción Bronze**  
   *Detalle:* $20 para 2000 créditos.  
   *Ideal para:* Usuarios nuevos.

2. **Opción Silver**  
   *Detalle:* $50 para 5500 créditos.  
   *Ideal para:* Equilibrio entre precio y cantidad.

3. **Opción Gold**  
   *Detalle:* $100 para 11500 créditos.  
   *Ideal para:* Usuarios frecuentes.

4. **Opción Platinum**  
   *Detalle:* $200 para 24000 créditos.  
   *Ideal para:* Paquete premium.

5. **Opción Elite**  
   *Detalle:* $500 para 65000 créditos.  
   *Ideal para:* Máximo rendimiento.

Para proceder, haz clic en 'Recargar vía WhatsApp'.`,
    options: ["Recargar vía WhatsApp", "Regresar"]
  },
  recargas_PlayStation: {
    message: `Estas son nuestras ofertas para PlayStation Store:

1. **Opción Starter**  
   *Detalle:* $20 para 1500 créditos.  
   *Ideal para:* Usuarios nuevos.

2. **Opción Standard**  
   *Detalle:* $50 para 4000 créditos.  
   *Ideal para:* Jugadores moderados.

3. **Opción Premium**  
   *Detalle:* $100 para 8500 créditos.  
   *Ideal para:* Usuarios frecuentes.

4. **Opción Ultimate**  
   *Detalle:* $200 para 18000 créditos.  
   *Ideal para:* Paquetes completos.

5. **Opción Elite**  
   *Detalle:* $500 para 50000 créditos.  
   *Ideal para:* Entusiastas de PlayStation.

Para proceder, haz clic en 'Recargar vía WhatsApp'.`,
    options: ["Recargar vía WhatsApp", "Regresar"]
  },
  recargas_Xbox: {
    message: `Estas son nuestras ofertas para Xbox Live:

1. **Opción Bronze**  
   *Detalle:* $25 para 1800 créditos.  
   *Ideal para:* Nuevos usuarios.

2. **Opción Silver**  
   *Detalle:* $55 para 4500 créditos.  
   *Ideal para:* Mayor rendimiento.

3. **Opción Gold**  
   *Detalle:* $110 para 9000 créditos.  
   *Ideal para:* Usuarios regulares.

4. **Opción Platinum**  
   *Detalle:* $220 para 17000 créditos.  
   *Ideal para:* Gamers intensivos.

5. **Opción Diamond**  
   *Detalle:* $550 para 52000 créditos.  
   *Ideal para:* Profesionales del gaming.

Para proceder, haz clic en 'Recargar vía WhatsApp'.`,
    options: ["Recargar vía WhatsApp", "Regresar"]
  },
  recargas_Nintendo: {
    message: `Estas son nuestras ofertas para Nintendo eShop:

1. **Opción Básica**  
   *Detalle:* $15 para 1200 créditos.  
   *Ideal para:* Usuarios ocasionales.

2. **Opción Avanzada**  
   *Detalle:* $40 para 3500 créditos.  
   *Ideal para:* Jugadores frecuentes.

3. **Opción Superior**  
   *Detalle:* $90 para 8000 créditos.  
   *Ideal para:* Usuarios dedicados.

4. **Opción Pro**  
   *Detalle:* $180 para 15000 créditos.  
   *Ideal para:* Gamers intensivos.

5. **Opción Master**  
   *Detalle:* $450 para 48000 créditos.  
   *Ideal para:* Grandes volúmenes.

Para proceder, haz clic en 'Recargar vía WhatsApp'.`,
    options: ["Recargar vía WhatsApp", "Regresar"]
  },
  recargas_Google: {
    message: `Estas son nuestras ofertas para Google Play:

1. **Opción Mini**  
   *Detalle:* $10 para 1000 créditos.  
   *Ideal para:* Pruebas rápidas.

2. **Opción Media**  
   *Detalle:* $30 para 3200 créditos.  
   *Ideal para:* Uso moderado.

3. **Opción Grande**  
   *Detalle:* $70 para 7000 créditos.  
   *Ideal para:* Jugadores activos.

4. **Opción Extra**  
   *Detalle:* $140 para 14000 créditos.  
   *Ideal para:* Usuarios frecuentes.

5. **Opción Mega**  
   *Detalle:* $300 para 30000 créditos.  
   *Ideal para:* Entusiastas de Google Play.

Para proceder, haz clic en 'Recargar vía WhatsApp'.`,
    options: ["Recargar vía WhatsApp", "Regresar"]
  },
  recargas_Apple: {
    message: `Estas son nuestras ofertas para Apple Store:

1. **Opción Básica**  
   *Detalle:* $15 para 1100 créditos.  
   *Ideal para:* Usuarios casuales.

2. **Opción Estándar**  
   *Detalle:* $35 para 3000 créditos.  
   *Ideal para:* Uso regular.

3. **Opción Avanzada**  
   *Detalle:* $80 para 7500 créditos.  
   *Ideal para:* Mayor cantidad de créditos.

4. **Opción Superior**  
   *Detalle:* $160 para 14500 créditos.  
   *Ideal para:* Jugadores activos.

5. **Opción Premium**  
   *Detalle:* $350 para 29000 créditos.  
   *Ideal para:* Gamers profesionales.

Para proceder, haz clic en 'Recargar vía WhatsApp'.`,
    options: ["Recargar vía WhatsApp", "Regresar"]
  },
  // Rama Soporte y Consultas
  soporte: {
    message: '¿Qué tipo de soporte necesitas?',
    options: ['Problemas con tu compra', 'Consultas generales', 'Guías y tips', 'Regresar']
  },
  soporte_problemas: {
    message: `Lamentamos los inconvenientes. Por favor, contacta a nuestro soporte vía WhatsApp para solucionar tu problema.  
Estamos disponibles 24/7 para asistirte en cualquier situación.`,
    options: ["Contactar vía WhatsApp", "Regresar"]
  },
  soporte_consultas: {
    message: `Para consultas generales, puedes revisar nuestra sección de FAQ o contactar directamente vía WhatsApp para una atención personalizada y rápida.`,
    options: ["Contactar vía WhatsApp", "Regresar"]
  },
  soporte_guias: {
    message: `Aquí tienes algunas guías y tips para mejorar tu experiencia gamer:

- **Guía para elegir el videojuego perfecto:** Consejos para identificar el juego ideal según tus gustos.
- **Cómo aprovechar al máximo las ofertas en GAME.AI:** Estrategias para sacarle el máximo provecho a descuentos.
- **Optimización de recargas y tarjetas:** Tips para gestionar tus créditos y planificar tus compras.
- **FAQ detallado:** Respuestas a las preguntas más frecuentes de nuestros clientes.

Para más ayuda, contacta vía WhatsApp.`,
    options: ["Contactar vía WhatsApp", "Regresar"]
  },
  // Rama Ofertas y Promociones
  ofertas: {
    message: `Estas son nuestras promociones actuales:

1. **Descuento en juegos de PC:** 20% de descuento en títulos seleccionados.
2. **Oferta 2x1 en recargas de PlayStation Store:** Compra una recarga y llévate otra gratis.
3. **Promoción exclusiva en juegos de Consola:** Paquetes especiales con extras y contenido adicional.
4. **Descuento de temporada en juegos de Acción:** Precios rebajados por tiempo limitado.
5. **Ofertas flash diarias:** Promociones relámpago en títulos seleccionados, actualizadas cada 24 horas.

Para más detalles, contacta vía WhatsApp.`,
    options: ["Contactar vía WhatsApp", "Regresar"]
  }
};

let currentState = 'welcome';

/* EVENTOS PARA ABRIR/CERRAR */
chatToggle.addEventListener('click', () => {
  if (chatbot.style.display === 'none' || chatbot.style.display === '') {
    chatBody.innerHTML = ''; // Reiniciamos el chat
    chatbot.style.display = 'flex';
    displayBotMessage(conversationFlow.welcome.message, conversationFlow.welcome.options);
    currentState = 'welcome';
  } else {
    chatbot.style.display = 'none';
  }
});

chatClose.addEventListener('click', () => {
  chatbot.style.display = 'none';
});

/* FUNCIONES PARA MOSTRAR MENSAJES */
function displayBotMessage(text, options = []) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', 'bot');
  
  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  avatar.textContent = 'B';
  
  const messageText = document.createElement('div');
  messageText.classList.add('message-text');
  messageText.innerHTML = text;
  
  messageContainer.appendChild(avatar);
  messageContainer.appendChild(messageText);
  chatBody.appendChild(messageContainer);
  
  // Mostrar opciones como botones, si existen
  if (options.length > 0) {
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');
    options.forEach(option => {
      const optionBtn = document.createElement('button');
      optionBtn.classList.add('option-btn');
      optionBtn.textContent = option;
      optionBtn.addEventListener('click', () => handleOptionClick(option));
      optionsContainer.appendChild(optionBtn);
    });
    messageText.appendChild(optionsContainer);
  }
  chatBody.scrollTop = chatBody.scrollHeight;
}

function displayUserMessage(text) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', 'user');
  
  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  avatar.textContent = 'U';
  
  const messageText = document.createElement('div');
  messageText.classList.add('message-text');
  messageText.textContent = text;
  
  messageContainer.appendChild(avatar);
  messageContainer.appendChild(messageText);
  chatBody.appendChild(messageContainer);
  
  chatBody.scrollTop = chatBody.scrollHeight;
}

/* MANEJO DEL FLUJO DE CONVERSACIÓN */
function handleOptionClick(option) {
  displayUserMessage(option);
  
  // Redirecciones vía WhatsApp
  if (option === "Comprar vía WhatsApp") {
    if (currentState.startsWith("comprar")) {
      let categoria = currentState.replace("comprar", "").replace("_", " ");
      window.open(`https://wa.me/1234567890?text=Quiero%20comprar%20juegos%20de%20${encodeURIComponent(categoria)}%20para%20${currentState.includes("PC") ? "PC" : (currentState.includes("Consola") ? "Consola" : "Móvil")}`, "_blank");
    }
    return;
  }
  if (option === "Recargar vía WhatsApp") {
    if (currentState.startsWith("recargas")) {
      let plataforma = currentState.replace("recargas_", "");
      window.open(`https://wa.me/1234567890?text=Quiero%20recargar%20${encodeURIComponent(plataforma)}`, "_blank");
    }
    return;
  }
  if (option === "Contactar vía WhatsApp") {
    window.open("https://wa.me/1234567890?text=Necesito%20soporte%20en%20GAME.AI", "_blank");
    return;
  }
  
  // Flujo principal
  if (option === 'Comenzar') {
    currentState = 'main';
    setTimeout(() => displayBotMessage(conversationFlow.main.message, conversationFlow.main.options), 500);
  } 
  else if (option === 'Comprar Videojuegos') {
    currentState = 'comprar';
    setTimeout(() => displayBotMessage(conversationFlow.comprar.message, conversationFlow.comprar.options), 500);
  } 
  else if (option === 'Recargas y Tarjetas') {
    currentState = 'recargas';
    setTimeout(() => displayBotMessage(conversationFlow.recargas.message, conversationFlow.recargas.options), 500);
  } 
  else if (option === 'Soporte y Consultas') {
    currentState = 'soporte';
    setTimeout(() => displayBotMessage(conversationFlow.soporte.message, conversationFlow.soporte.options), 500);
  } 
  else if (option === 'Ofertas y Promociones') {
    currentState = 'ofertas';
    setTimeout(() => displayBotMessage(conversationFlow.ofertas.message, conversationFlow.ofertas.options), 500);
  } 
  else if (option === 'Regresar') {
    currentState = 'main';
    setTimeout(() => displayBotMessage(conversationFlow.main.message, conversationFlow.main.options), 500);
  }
  // Ramas de "Comprar Videojuegos"
  else if (currentState === 'comprar' && option === 'PC') {
    currentState = 'comprarPC';
    setTimeout(() => displayBotMessage(conversationFlow.comprarPC.message, conversationFlow.comprarPC.options), 500);
  }
  else if (currentState === 'comprar' && option === 'Consola') {
    currentState = 'comprarConsola';
    setTimeout(() => displayBotMessage(conversationFlow.comprarConsola.message, conversationFlow.comprarConsola.options), 500);
  }
  else if (currentState === 'comprar' && option === 'Móvil') {
    currentState = 'comprarMovil';
    setTimeout(() => displayBotMessage(conversationFlow.comprarMovil.message, conversationFlow.comprarMovil.options), 500);
  }
  // Ramas de PC según género
  else if (currentState === 'comprarPC' && option === 'Acción') {
    currentState = 'comprarPC_Accion';
    setTimeout(() => displayBotMessage(conversationFlow.comprarPC_Accion.message, conversationFlow.comprarPC_Accion.options), 500);
  }
  else if (currentState === 'comprarPC' && option === 'Aventura') {
    currentState = 'comprarPC_Aventura';
    setTimeout(() => displayBotMessage(conversationFlow.comprarPC_Aventura.message, conversationFlow.comprarPC_Aventura.options), 500);
  }
  else if (currentState === 'comprarPC' && option === 'RPG') {
    currentState = 'comprarPC_RPG';
    setTimeout(() => displayBotMessage(conversationFlow.comprarPC_RPG.message, conversationFlow.comprarPC_RPG.options), 500);
  }
  else if (currentState === 'comprarPC' && option === 'Estrategia') {
    currentState = 'comprarPC_Estrategia';
    setTimeout(() => displayBotMessage(conversationFlow.comprarPC_Estrategia.message, conversationFlow.comprarPC_Estrategia.options), 500);
  }
  // Ramas de Consola según género
  else if (currentState === 'comprarConsola' && option === 'Acción') {
    currentState = 'comprarConsola_Accion';
    setTimeout(() => displayBotMessage(conversationFlow.comprarConsola_Accion.message, conversationFlow.comprarConsola_Accion.options), 500);
  }
  else if (currentState === 'comprarConsola' && option === 'Aventura') {
    currentState = 'comprarConsola_Aventura';
    setTimeout(() => displayBotMessage(conversationFlow.comprarConsola_Aventura.message, conversationFlow.comprarConsola_Aventura.options), 500);
  }
  else if (currentState === 'comprarConsola' && option === 'Deportes') {
    currentState = 'comprarConsola_Deportes';
    setTimeout(() => displayBotMessage(conversationFlow.comprarConsola_Deportes.message, conversationFlow.comprarConsola_Deportes.options), 500);
  }
  else if (currentState === 'comprarConsola' && option === 'RPG') {
    currentState = 'comprarConsola_RPG';
    setTimeout(() => displayBotMessage(conversationFlow.comprarConsola_RPG.message, conversationFlow.comprarConsola_RPG.options), 500);
  }
  // Ramas de Móvil según género
  else if (currentState === 'comprarMovil' && option === 'Casuales') {
    currentState = 'comprarMovil_Casuales';
    setTimeout(() => displayBotMessage(conversationFlow.comprarMovil_Casuales.message, conversationFlow.comprarMovil_Casuales.options), 500);
  }
  else if (currentState === 'comprarMovil' && option === 'Acción') {
    currentState = 'comprarMovil_Accion';
    setTimeout(() => displayBotMessage(conversationFlow.comprarMovil_Accion.message, conversationFlow.comprarMovil_Accion.options), 500);
  }
  else if (currentState === 'comprarMovil' && option === 'Estrategia') {
    currentState = 'comprarMovil_Estrategia';
    setTimeout(() => displayBotMessage(conversationFlow.comprarMovil_Estrategia.message, conversationFlow.comprarMovil_Estrategia.options), 500);
  }
  // Ramas de Recargas según plataforma
  else if (currentState === 'recargas' && option === 'Steam') {
    currentState = 'recargas_Steam';
    setTimeout(() => displayBotMessage(conversationFlow.recargas_Steam.message, conversationFlow.recargas_Steam.options), 500);
  }
  else if (currentState === 'recargas' && option === 'PlayStation Store') {
    currentState = 'recargas_PlayStation';
    setTimeout(() => displayBotMessage(conversationFlow.recargas_PlayStation.message, conversationFlow.recargas_PlayStation.options), 500);
  }
  else if (currentState === 'recargas' && option === 'Xbox Live') {
    currentState = 'recargas_Xbox';
    setTimeout(() => displayBotMessage(conversationFlow.recargas_Xbox.message, conversationFlow.recargas_Xbox.options), 500);
  }
  else if (currentState === 'recargas' && option === 'Nintendo eShop') {
    currentState = 'recargas_Nintendo';
    setTimeout(() => displayBotMessage(conversationFlow.recargas_Nintendo.message, conversationFlow.recargas_Nintendo.options), 500);
  }
  else if (currentState === 'recargas' && option === 'Google Play') {
    currentState = 'recargas_Google';
    setTimeout(() => displayBotMessage(conversationFlow.recargas_Google.message, conversationFlow.recargas_Google.options), 500);
  }
  else if (currentState === 'recargas' && option === 'Apple Store') {
    currentState = 'recargas_Apple';
    setTimeout(() => displayBotMessage(conversationFlow.recargas_Apple.message, conversationFlow.recargas_Apple.options), 500);
  }
  // Ramas de Soporte
  else if (currentState === 'soporte' && option === 'Problemas con tu compra') {
    currentState = 'soporte_problemas';
    setTimeout(() => displayBotMessage(conversationFlow.soporte_problemas.message, conversationFlow.soporte_problemas.options), 500);
  }
  else if (currentState === 'soporte' && option === 'Consultas generales') {
    currentState = 'soporte_consultas';
    setTimeout(() => displayBotMessage(conversationFlow.soporte_consultas.message, conversationFlow.soporte_consultas.options), 500);
  }
  else if (currentState === 'soporte' && option === 'Guías y tips') {
    currentState = 'soporte_guias';
    setTimeout(() => displayBotMessage(conversationFlow.soporte_guias.message, conversationFlow.soporte_guias.options), 500);
  }
}
