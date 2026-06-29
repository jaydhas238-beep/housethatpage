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
  function sendCareerEmail(event){
  event.preventDefault();

  const ownerEmail = "careers@housethat.in";

  const name = document.getElementById("careerName").value;
  const email = document.getElementById("careerEmail").value;
  const phone = document.getElementById("careerPhone").value;
  const role = document.getElementById("careerRole").value;

  const subject = `Application for ${role} - HouseThat`;

  const body =
`Dear HouseThat Team,

I would like to apply for the position of ${role}.

Applicant Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Role Applying For: ${role}

Please find my resume attached.

Regards,
${name}`;

  const mailtoURL =
    `mailto:${ownerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoURL;
}
}

function openEmail(e) {
    e.preventDefault();

    const email = "jaydhas238@gmail.com"; 
    const subject = "Website Enquiry";

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href =
            `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    } else {
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`,
            "_blank"
        );
    }
}

const sangleSlides = [
  {
    image: "images/sangle1.jpg",
    label: "Elegant Family Dining",
    title: "A warm dining space shaped for family gatherings.",
    text: "Natural textures, refined detailing and warm materials create an inviting dining experience."
  },
  {
    image: "images/sangle2.jpg",
    label: "Statement Centrepiece",
    title: "A marble centrepiece that anchors the living area.",
    text: "Rich natural stone and contemporary craftsmanship create a timeless focal point within the home."
  },
  {
    image: "images/sangle3.jpg",
    label: "Crafted Dining Experience",
    title: "Premium finishes balanced with everyday comfort.",
    text: "Upholstered seating, warm tones and carefully selected materials create a refined dining environment."
  },
  {
    image: "images/sangle4.jpg",
    label: "Comfortable Living Lounge",
    title: "An inviting living space designed for daily comfort.",
    text: "Warm lighting, elegant furnishings and clean spatial planning come together with quiet sophistication."
  }
];

let sangleIndex = 0;

function flipSangle(){
  const card = document.getElementById("sangleFlipCard");

  card.classList.add("flipping");

  setTimeout(() => {
    sangleIndex = (sangleIndex + 1) % sangleSlides.length;
    const slide = sangleSlides[sangleIndex];

    document.getElementById("sangleFlipImage").src = slide.image;
    document.getElementById("sangleFlipLabel").textContent = slide.label;
    document.getElementById("sangleFlipTitle").textContent = slide.title;
    document.getElementById("sangleFlipText").textContent = slide.text;

    card.classList.remove("flipping");
  }, 400);
}

const komalSlides = [
{
image:"images/komal1.jpg",
label:"Luxury Reception",
title:"A welcoming beauty studio designed with elegance.",
text:"Soft colours, premium finishes and thoughtful lighting create a relaxing first impression."
},
{
image:"images/komal2.jpg",
label:"Premium Styling Area",
title:"Designed for comfort and professional beauty services.",
text:"A modern styling space with elegant interiors that blends functionality with luxury."
},
{
image:"images/komal3.jpg",
label:"Makeover Corner",
title:"Refined interiors for an elevated client experience.",
text:"Carefully selected finishes and lighting create the perfect atmosphere for professional makeovers."
},
{
image:"images/komal4.jpg",
label:"Studio Details",
title:"Every corner reflects sophistication and craftsmanship.",
text:"Clean lines, premium materials and thoughtful detailing bring timeless elegance to the space."
}
];

let komalIndex=0;

function flipKomal(){

komalIndex=(komalIndex+1)%komalSlides.length;

const slide=komalSlides[komalIndex];

document.getElementById("komalFlipImage").src=slide.image;
document.getElementById("komalFlipLabel").textContent=slide.label;
document.getElementById("komalFlipTitle").textContent=slide.title;
document.getElementById("komalFlipText").textContent=slide.text;

}
