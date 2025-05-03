// Función para crear tarjetas de proyectos
export const createProjectCard = ({ title, preview, slug }) => `
    <div class="project-card" data-slug="${slug}">
        <h3>${title}</h3>
        <img src="${preview}" alt="${title} - Project preview" loading="lazy">
    </div>
`;

// Función para insertar los proyectos en el DOM
export function insertProjects(content) {
    const projectsContainer = document.querySelector('#projects');
    const projectsHTML = content.projects.map(createProjectCard).join('');
    projectsContainer.innerHTML = projectsHTML;

    // Añadir manejadores de eventos a las tarjetas de proyectos
    projectsContainer.addEventListener('click', (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            const slug = projectCard.dataset.slug;
            window.location.href = `projects/project-template.html?project=${slug}`;
        }
    });
}
