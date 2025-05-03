// js/studies.js
document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('texts.json');
      if (!response.ok) throw new Error('Network response error');
      
      const data = await response.json();
      const studiesData = data.en.studies;
      
      // Set page title
      document.title = `Studies - ${data.en.name}`;
      document.querySelector('.timeline-title').textContent = studiesData.title;
      
      // Render timeline
      const timeline = document.getElementById('timeline');
      timeline.innerHTML = studiesData.timeline.map(item => `
        <div class="study-item" data-icon="${item.icon}">
          <div class="study-date">${item.date}</div>
          <h2 class="study-title">${item.title}</h2>
          <p class="study-institution">${item.institution}</p>
          <p class="study-description">${item.description}</p>
          ${item.tags ? `
            <div class="study-tags">
              ${item.tags.map(tag => `<span class="study-tag">${tag}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `).join('');
  
    } catch (error) {
      console.error('Error loading studies:', error);
      document.querySelector('.studies-container').innerHTML = `
        <p class="error">Error loading academic history. Please try refreshing.</p>
      `;
    }
  });