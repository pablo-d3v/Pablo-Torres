export function initLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
      <span class="close-lightbox">&times;</span>
      <img src="" alt="Enlarged view" class="lightbox-image" id="lightbox-image">
    `;
    document.body.appendChild(lightbox);
  
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.close-lightbox');
  
    // Lightbox functionality
    document.querySelectorAll('[data-lightbox]').forEach(img => {
      img.addEventListener('click', (e) => {
        lightbox.style.display = 'flex';
        lightboxImage.src = e.target.src;
        document.body.style.overflow = 'hidden';
      });
    });
  
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', closeLightbox);
  
    /* Close lightbox by pressing the key 'esc' */
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') closeLightbox();
    });
  
    function closeLightbox() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }