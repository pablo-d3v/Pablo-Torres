export async function loadHero(content) {
    console.log('Loading hero with:', content); // Debug
    const nameElement = document.querySelector('#name');
    const roleElement = document.querySelector('#role');
  
    if (nameElement) nameElement.textContent = content.name;
    if (roleElement) roleElement.textContent = content.role;
  }

export async function prueba() {
    try {
      const response = await fetch('layout/header/hero/hero.html');
      if (!response.ok) throw new Error('Error fetching hero.html');
  
      const html = await response.text();
      const container = document.querySelector('.hero');
  
      if (container) {
        container.innerHTML = html;
      } else {
        console.error('No se encontró el contenedor .hero en el DOM');
      }
    } catch (err) {
      console.error('Error cargando hero:', err);
    }
  }
  