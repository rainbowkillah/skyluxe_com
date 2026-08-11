// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.right = '1.25rem';
  navLinks.style.background = '#0d0d10';
  navLinks.style.padding = '1rem 1.5rem';
  navLinks.style.borderRadius = '.75rem';
  navLinks.style.border = '1px solid hsl(240 10% 16%)';
});

// "Enter the Soundscape" placeholder interaction
document.getElementById('enterSoundscape')?.addEventListener('click', () => {
  document.getElementById('new-releases')?.scrollIntoView({behavior:'smooth'});
});

// Guest list form — front-end only stub.
// Replace this with a real endpoint (e.g. a Cloudflare Pages Function / Worker) to actually receive submissions.
document.getElementById('guestForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Invitation received. We read every transmission.';
  this.reset();
});