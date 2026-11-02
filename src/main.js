const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const currentPath = window.location.pathname;
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach((link) => {
  const href = link.getAttribute('href');
  if (!href) return;

  const normalizedHref = href.replace(/\/$/, '');
  const normalizedPath = currentPath.replace(/index\.html$/, '').replace(/\/$/, '');

  if (normalizedHref === currentPath || normalizedHref === normalizedPath || `${normalizedHref}/` === currentPath) {
    link.classList.add('active');
  }
});

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = loginForm.querySelector('button[type="submit"]');
    if (!submitButton) return;

    const originalText = submitButton.textContent;
    submitButton.textContent = 'Signing in...';
    submitButton.disabled = true;

    setTimeout(() => {
      submitButton.textContent = 'Signed in';
      setTimeout(() => {
        window.location.href = '/dashboard.html';
      }, 700);
    }, 900);
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button');
    if (!button) return;

    const original = button.textContent;
    button.textContent = 'Inquiry sent';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
      contactForm.reset();
    }, 1800);
  });
}

const yearElement = document.querySelector('[data-year]');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
