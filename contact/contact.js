document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('../texts.json');
      const data = await response.json();
      const contactData = data.en.contact;
      
      // Populate content
      document.querySelector('.contact-title').textContent = contactData.title;
      
      const contactItems = contactData.items.map(item => `
        <div class="contact-card">
          <a href="${item.link}" target="_blank" rel="noopener noreferrer">
            <h3>${item.type}</h3>
            <p>${item.value}</p>
          </a>
        </div>
      `).join('');
      
      document.querySelector('.contact-items').innerHTML = contactItems;
      
    } catch (error) {
      console.error('Error loading contact data:', error);
      document.querySelector('.contact-items').innerHTML = `
        <p class="error">Error loading contact information. Please try refreshing the page.</p>
      `;
    }
  });