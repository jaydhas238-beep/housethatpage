// =========================
// HOUSETHAT LUXURY WEBSITE
// =========================

// ---------- PRELOADER ----------
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    if (preloader) {
      preloader.classList.add("hide");
    }
  }, 1800);
});

// ---------- REVEAL ANIMATION ----------
const revealItems = document.querySelectorAll(".reveal-section");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

// ---------- HERO PARALLAX ----------
const hero = document.getElementById("hero");
const layers = document.querySelectorAll("[data-depth]");

if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    layers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth);

      layer.style.transform = `
        translate(
          ${x * depth}px,
          ${y * depth}px
        )
      `;
    });
  });

  hero.addEventListener("mouseleave", () => {
    layers.forEach((layer) => {
      layer.style.transform = "translate(0px,0px)";
    });
  });
}

// ---------- HEADER EFFECT ----------
const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 70) {

    header.style.background = "rgba(248,245,239,.92)";
    header.style.backdropFilter = "blur(20px)";
    header.style.boxShadow = "0 8px 30px rgba(0,0,0,.05)";

  } else {

    header.style.background = "rgba(248,245,239,.64)";
    header.style.boxShadow = "none";

  }

});

// ---------- PARALLAX IMAGES ----------
const parallaxImages = document.querySelectorAll(
  ".editorial-image, .founder-photo, .dubai-bg, .project-img"
);

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  parallaxImages.forEach((img) => {

    const speed = 0.08;

    img.style.backgroundPosition = `center ${scrollY * speed}px`;

  });

});

// ---------- BUTTON RIPPLE ----------
const buttons = document.querySelectorAll(".primary-btn");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-3px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0px)";

  });

});

// ---------- PROJECT HOVER ----------
const projects = document.querySelectorAll(".project-item");

projects.forEach((project) => {

  project.addEventListener("mouseenter", () => {

    project.style.transform = "translateY(-8px)";

  });

  project.addEventListener("mouseleave", () => {

    project.style.transform = "translateY(0px)";

  });

});

// ---------- SMOOTH FADE BETWEEN PAGES ----------
document.querySelectorAll("a").forEach((link) => {

  const href = link.getAttribute("href");

  if (
    href &&
    !href.startsWith("#") &&
    !href.startsWith("http")
  ) {

    link.addEventListener("click", (e) => {

      e.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(() => {

        window.location = href;

      }, 250);

    });

  }

});

document.body.style.transition = "opacity .35s ease";

window.addEventListener("pageshow", () => {

  document.body.style.opacity = "1";

});

// ---------- HERO SLOW FLOAT ----------
const floatingPhotos = document.querySelectorAll(".hero-photo");

let float = 0;

function animateHero() {

  float += 0.01;

  floatingPhotos.forEach((photo, index) => {

    const move = Math.sin(float + index) * 8;

    photo.style.marginTop = move + "px";

  });

  requestAnimationFrame(animateHero);

}

animateHero();

function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("open");
}
