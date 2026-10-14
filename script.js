const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');

menuButton.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.site-header nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.feature-list article button').forEach((button) => {
  button.addEventListener('click', () => {
    const article = button.closest('article');
    document.querySelectorAll('.feature-list article').forEach((item) => {
      item.classList.remove('active');
      item.querySelector('button b').textContent = '＋';
    });
    article.classList.add('active');
    button.querySelector('b').textContent = '−';
  });
});

document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    item.querySelector('summary span').textContent = item.open ? '−' : '＋';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('revealed');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.benefit-card, .feature-story, .quote-shell, .faq-list').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.revealed{opacity:1!important;transform:none!important}';
document.head.append(style);
