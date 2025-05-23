const LANG = 'en';
const SELECTORS = {
    name: '#name',
    role: '#role',
    projectsContainer: '#projects',
    sectionButtons: {
        1: '#section1',
        2: '#section2',
        3: '#section3',
    },
    slider: '.slider',
    navButtons: 'nav button'
};
const buttons = document.querySelectorAll('nav button');
const slider = document.querySelector('.slider');

const sectionIndex = {
  home: 0,
  studies: 1,
  contact: 2
};
// Cache de elementos DOM
const elements = {
  name: document.querySelector(SELECTORS.name),
  role: document.querySelector(SELECTORS.role),
  projectsContainer: document.querySelector(SELECTORS.projectsContainer),
  sectionButtons: {
      1: document.querySelector(SELECTORS.sectionButtons[1]),
      2: document.querySelector(SELECTORS.sectionButtons[2]),
      3: document.querySelector(SELECTORS.sectionButtons[3])
  },
  slider: document.querySelector(SELECTORS.slider),
  navButtons: document.querySelectorAll(SELECTORS.navButtons)
};

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const index = sectionIndex[target];
    slider.style.transform = `translateX(-${index * 100}vw)`;
  });
});

// Función para crear tarjetas de proyectos
const createProjectCard = ({ title, preview, slug }) => `
    <div class="project-card" data-slug="${slug}">
        <h3>${title}</h3>
        <img src="${preview}" alt="${title} - Project preview" loading="lazy">
    </div>
`;

// Función principal
async function loadContent() {
  try {
      const response = await fetch('texts.json');
      if (!response.ok) throw new Error('Network response was not OK');
      const data = await response.json();
      const content = data[LANG];

      // Actualizar contenido básico
      elements.name.textContent = content.name;
      elements.role.textContent = content.role;

      // Actualizar textos de los botones
      Object.keys(elements.sectionButtons).forEach((key) => {
          const index = parseInt(key);
          if (content.sections[index - 1]) {
              elements.sectionButtons[index].textContent = content.sections[index - 1];
          }
      });

      // Insertar proyectos
      const projectsHTML = content.projects.map(createProjectCard).join('');
      elements.projectsContainer.innerHTML = projectsHTML;

      // Eventos en tarjetas
      elements.projectsContainer.addEventListener('click', (e) => {
          const projectCard = e.target.closest('.project-card');
          if (projectCard) {
              const slug = projectCard.dataset.slug;
              window.location.href = `./pages/projects/project-template.html?project=${slug}`;
          }
      });

  } catch (error) {
      console.error('Error loading content:', error);
      elements.projectsContainer.innerHTML = `
          <p class="error-message">⚠️ Error loading portfolio. Please try refreshing the page or contact me at pablotorres11001@gmail.com</p>
      `;
  }
}

// Iniciar carga de contenido
loadContent();