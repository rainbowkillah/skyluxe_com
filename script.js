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

// Guest list form — front-end only stub.
// Replace this with a real endpoint (e.g. a Cloudflare Pages Function / Worker) to actually receive submissions.
document.getElementById('guestForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Invitation received. We read every transmission.';
  this.reset();
});
