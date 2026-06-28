const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));

const hero = document.querySelector('.hero');
const movingItems = document.querySelectorAll('[data-speed]');

if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    movingItems.forEach(item => {
      const speed = parseFloat(item.dataset.speed) * 100;
      item.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    movingItems.forEach(item => {
      item.style.transform = 'translate(0,0)';
    });
  });
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('.project-image, .editorial-img, .founder-image').forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const movement = (rect.top - window.innerHeight / 2) * -0.025;
      img.style.backgroundPosition = `center calc(50% + ${movement}px)`;
    }
  });

  const navbar = document.querySelector('.navbar');
  if (scrollY > 80) {
    navbar.style.background = 'rgba(248,245,239,.88)';
  } else {
    navbar.style.background = 'rgba(248,245,239,.62)';
  }
});
