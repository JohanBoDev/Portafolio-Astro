// Selecciona solo las secciones específicas
const sections = document.querySelectorAll('#sobre_mi, #tecnologias, #proyectos, #educacion, #contacto');

// Función que revisa si las secciones están en el viewport y les aplica la clase visible
const handleScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = window.innerHeight;

    if (sectionTop < sectionVisible) {
      section.classList.add('visible-section');
    }
  });
};

// Añade la clase 'hidden-section' a las secciones específicas inicialmente
sections.forEach(section => section.classList.add('hidden-section'));

// Llama a la función handleScroll al hacer scroll
window.addEventListener('scroll', handleScroll);

// Llama a handleScroll al cargar la página para que las secciones en la vista inicial se animen
handleScroll();



