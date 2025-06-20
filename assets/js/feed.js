document.querySelectorAll('.galeriaMinimalista').forEach(galeriaContainer => {
  const galeria = galeriaContainer.querySelector('.galeria-imagens');
  const viewport = galeriaContainer.querySelector('.galeria-viewport');
  const images = galeria.querySelectorAll('img');
  const prevBtn = galeriaContainer.querySelector('.galeria-btn.prev');
  const nextBtn = galeriaContainer.querySelector('.galeria-btn.next');

  let currentIndex = 0;

  function updateGallery() {
    const containerWidth = viewport.clientWidth;
    const gap = 10; // Defina isso igual ao seu CSS real
    const translateX = currentIndex * (containerWidth + gap);

    galeria.style.transform = `translateX(-${translateX}px)`;

    // Botões: desativa no limite
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= images.length - 1;

    prevBtn.style.opacity = prevBtn.disabled ? '0.3' : '1';
    nextBtn.style.opacity = nextBtn.disabled ? '0.3' : '1';
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateGallery();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });

  window.addEventListener('resize', updateGallery);

  // Swipe mobile
  let startX = 0;
  let isSwiping = false;

  viewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  viewport.addEventListener('touchend', (e) => {
    if (!isSwiping) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0 && currentIndex < images.length - 1) {
        currentIndex++;
      } else if (deltaX > 0 && currentIndex > 0) {
        currentIndex--;
      }
      updateGallery();
    }
    isSwiping = false;
  });

  // Inicializa
  updateGallery();
});
