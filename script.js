// Nav: transparent over the hero, glassy once you scroll past it (matches base44 source).
const siteNav = document.getElementById('siteNav');
const onScroll = () => {
  siteNav.classList.toggle('scrolled', window.scrollY > 40);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '64px';
  navLinks.style.right = '1.25rem';
  navLinks.style.background = 'rgba(10,10,14,.9)';
  navLinks.style.backdropFilter = 'blur(20px)';
  navLinks.style.padding = '1.25rem 1.75rem';
  navLinks.style.borderRadius = '1rem';
  navLinks.style.border = '1px solid hsl(240 10% 16%)';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
});

// "Enter the Soundscape" — smooth-scroll into the catalog
document.getElementById('enterSoundscape')?.addEventListener('click', () => {
  document.getElementById('new-releases')?.scrollIntoView({ behavior: 'smooth' });
});

// Vault carousel — the track only supports native trackpad/touch swipe by
// default. Add a wheel→horizontal fallback and click-drag so it's usable
// with a plain mouse too (e.g. inside VS Code's Simple Browser/Live Preview,
// which doesn't forward trackpad gestures).
const vaultTrack = document.querySelector('.vault-track');
if (vaultTrack) {
  vaultTrack.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      vaultTrack.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  let isDragging = false;
  let dragMoved = false;
  let dragStartX = 0;
  let scrollStart = 0;

  vaultTrack.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragMoved = false;
    dragStartX = e.clientX;
    scrollStart = vaultTrack.scrollLeft;
    vaultTrack.classList.add('dragging');
  });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    if (Math.abs(delta) > 4) dragMoved = true;
    vaultTrack.scrollLeft = scrollStart - delta;
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
    vaultTrack.classList.remove('dragging');
  });
  // Don't let a drag also trigger a click on the buttons/links it passed over.
  vaultTrack.addEventListener('click', (e) => {
    if (dragMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
}

// Guest list form — front-end only stub.
// Replace this with a real endpoint (e.g. a Cloudflare Pages Function / Worker) to actually receive submissions.
document.getElementById('guestForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Invitation received. We read every transmission.';
  this.reset();
});
