//import { initLightbox } from '../lightbox/lightbox.js';

// Fetch and render project data
function loadProjectDetails() {
    // 1. Get Project Slug from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectSlug = urlParams.get('project');
  
    // 2. Fetch Project Data
    fetch('../../texts.json')
      .then(response => response.json())
      .then(data => {
        const project = data.en.projects.find(p => p.slug === projectSlug);
        if (project) renderProject(project);
        else showError();
      })
      .catch(error => console.error('Error loading project:', error));
  }
  
// Render project content
function renderProject(project) {
  const container = document.getElementById('project-content');
  
  container.innerHTML = `
    <h1>${project.title}</h1>


    <img src="../../${project.preview}" 
    alt="${project.title} Preview" 
    data-lightbox
    class="main-preview">

    <section class="project-description">
      <h2>Project Overview</h2>
      <p>${project.description}</p>
    </section>

    <div class="project-meta">
      <div class="meta-item">
        <p><span class="meta-label">My Role:</span> ${project.my_role}</p>
      </div>
      <div class="meta-item">
        <p><span class="meta-label">Team Size:</span> ${project.team_size} people</p>
      </div>
      <div class="meta-item">
        <p><span class="meta-label">Period:</span> ${project.period}</p>
      </div>
    </div>

    <section class="project-tools">
      <h2>Technical Stack</h2>
      ${Object.entries(project.tools).map(([category, items]) => `
        <div class="tool-category">
          <h3>${category}</h3>
          <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </section>

    <section class="project-gallery">
      <h2>Screenshots</h2>
      <div class="gallery-grid">
        ${project.images.map(img => `
          <img src="../../${img}" 
          data-lightbox 
          alt="Project screenshot" 
          class="gallery-item">
        `).join('')}
      </div>
    </section>
  `;
}

// Show error message
function showError() {
  const container = document.getElementById('project-details');
  container.innerHTML = `
    <p class="error">Project not found. <a href="index.html">Return to portfolio</a></p>
  `;
}
  
  // Initialize when DOM loads
  document.addEventListener('DOMContentLoaded', async () => {
    await loadProjectDetails(); // Wait for content to render
    initLightbox(); // initialize lightbox after images exist
  });