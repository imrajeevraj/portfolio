
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.add('open');
  });

  closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });

  // Optional: close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      e.target !== menuToggle
    ) {
      navLinks.classList.remove('open');
    }
  });
});