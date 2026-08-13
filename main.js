document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Drawer Navigation Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });
  }

  // 2. Carousel Scroll Handlers
  const cookingCarousel = document.getElementById('cooking-carousel');
  const cookingNext = document.getElementById('cooking-next');

  if (cookingCarousel && cookingNext) {
    cookingNext.addEventListener('click', () => {
      cookingCarousel.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }

  const newsroomCarousel = document.getElementById('newsroom-carousel');
  const newsroomNext = document.getElementById('newsroom-next');

  if (newsroomCarousel && newsroomNext) {
    newsroomNext.addEventListener('click', () => {
      newsroomCarousel.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }

  // 3. Interactive Category Search Input Filter
  const finderInput = document.querySelector('.finder-input');
  const lineupItems = document.querySelectorAll('.lineup-item');

  if (finderInput && lineupItems.length > 0) {
    finderInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      lineupItems.forEach(item => {
        const label = item.querySelector('.lineup-label')?.textContent.toLowerCase() || '';
        if (term === '' || label.includes(term)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 4. GSAP Entrance Animations
  if (typeof gsap !== 'undefined') {
    gsap.from('#main-header', { y: -65, opacity: 0, duration: 0.7, ease: 'power2.out' });
    gsap.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6, delay: 0.3, ease: 'power2.out' });
    gsap.from('.hero-title', { y: 25, opacity: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
    gsap.from('.hero-cta-wrapper', { y: 20, opacity: 0, duration: 0.6, delay: 0.6, ease: 'power2.out' });
    gsap.from('.hero-tabletop-bg', { scale: 1.05, duration: 2, ease: 'power2.out' });
  }

});
