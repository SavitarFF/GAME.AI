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

// Flujo de conversación con mayor contenido
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
  // Ejemplo de contenido para PC - Acción
  comprarPC_Accion: {
    message: "Estos son los juegos de Acción más populares para PC:\n\n1. Rage Strike - Juego de disparos y acción. Precio: $59.99\n2. Battle Fury - Combina acción y estrategia. Precio: $49.99\n3. Cyber Blade - Aventura futurista llena de adrenalina. Precio: $39.99\n\nPara finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.",
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Ejemplo de contenido para PC - Aventura
  comprarPC_Aventura: {
    message: "Estos son los juegos de Aventura más populares para PC:\n\n1. Mystic Quest - Explora mundos mágicos. Precio: $49.99\n2. Lost Legends - Una aventura épica. Precio: $44.99\n\nPara finalizar tu compra, haz clic en 'Comprar vía WhatsApp'.",
    options: ["Comprar vía WhatsApp", "Regresar"]
  },
  // Rama Recargas y Tarjetas
  recargas: {
    message: 'Elige tu método de recarga o tarjeta:',
    options: ['Steam', 'PlayStation Store', 'Xbox Live', 'Nintendo eShop', 'Google Play', 'Apple Store', 'Regresar']
  },
  recargas_Steam: {
    message: "Estas son nuestras ofertas para Steam:\n\n- Opción 1: $20 para 2000 créditos\n- Opción 2: $50 para 5500 créditos\n- Opción 3: $100 para 11500 créditos\n\nPara proceder, haz clic en 'Recargar vía WhatsApp'.",
    options: ["Recargar vía WhatsApp", "Regresar"]
  },
  // Rama Soporte y Consultas
  soporte: {
    message: '¿Qué tipo de soporte necesitas?',
    options: ['Problemas con tu compra', 'Consultas generales', 'Guías y tips', 'Regresar']
  },
  soporte_problemas: {
    message: "Lamentamos los inconvenientes. Por favor, contacta a nuestro soporte vía WhatsApp para solucionar tu problema.",
    options: ["Contactar vía WhatsApp", "Regresar"]
  },
  soporte_consultas: {
    message: "Puedes revisar nuestra sección de FAQ o contactar directamente vía WhatsApp para una atención personalizada.",
    options: ["Contactar vía WhatsApp", "Regresar"]
  },
  soporte_guias: {
    message: "Aquí tienes algunas guías y tips:\n\n- Guía para elegir el videojuego perfecto.\n- Cómo aprovechar las ofertas en GAME.AI.\n- FAQ sobre recargas.\n\nPara más ayuda, contacta vía WhatsApp.",
    options: ["Contactar vía WhatsApp", "Regresar"]
  },
  // Rama Ofertas y Promociones
  ofertas: {
    message: "Estas son nuestras promociones actuales:\n\n1. 20% de descuento en juegos de PC\n2. Oferta 2x1 en recargas de PlayStation Store\n3. Promoción exclusiva en juegos de Consola\n\nPara más detalles, contacta vía WhatsApp.",
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
  messageText.textContent = text;
  
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
    if (currentState === "comprarPC_Accion") {
      window.open("https://wa.me/1234567890?text=Quiero%20comprar%20juegos%20de%20Acción%20para%20PC", "_blank");
    } else if (currentState === "comprarPC_Aventura") {
      window.open("https://wa.me/1234567890?text=Quiero%20comprar%20juegos%20de%20Aventura%20para%20PC", "_blank");
    }
    return;
  }
  if (option === "Recargar vía WhatsApp") {
    if (currentState === "recargas_Steam") {
      window.open("https://wa.me/1234567890?text=Quiero%20recargar%20Steam", "_blank");
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
  // En la rama de PC, elegir género
  else if (currentState === 'comprarPC' && option === 'Acción') {
    currentState = 'comprarPC_Accion';
    setTimeout(() => displayBotMessage(conversationFlow.comprarPC_Accion.message, conversationFlow.comprarPC_Accion.options), 500);
  }
  else if (currentState === 'comprarPC' && option === 'Aventura') {
    currentState = 'comprarPC_Aventura';
    setTimeout(() => displayBotMessage(conversationFlow.comprarPC_Aventura.message, conversationFlow.comprarPC_Aventura.options), 500);
  }
  // Para otras opciones en la rama de PC o de Consola/Móvil, se puede mostrar mensaje por defecto
  else {
    setTimeout(() => displayBotMessage(`Has seleccionado "${option}". Pronto tendremos más información.`, ['Regresar']), 500);
  }
  
  // Rama de Recargas: ejemplo para Steam
  if (currentState === 'recargas' && option === 'Steam') {
    currentState = 'recargas_Steam';
    setTimeout(() => displayBotMessage(conversationFlow.recargas_Steam.message, conversationFlow.recargas_Steam.options), 500);
  }
  
  // Rama de Soporte
  if (currentState === 'soporte' && option === 'Problemas con tu compra') {
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