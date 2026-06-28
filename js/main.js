const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

const hero = document.querySelector('.hero');
const floatImages = document.querySelectorAll('.float-img');

if(hero){
  hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    floatImages.forEach((img, index) => {
      const speed = (index + 1) * 16;
      img.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    floatImages.forEach(img => {
      img.style.transform = 'translate(0,0)';
    });
  });
}
