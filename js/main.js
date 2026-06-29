// =========================
// HOUSETHAT LUXURY WEBSITE
// =========================

function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hide");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 900);
  }
}

window.addEventListener("load", () => {
  setTimeout(hidePreloader, 1800);
});

// backup: hide even if JS/image loading issue
setTimeout(hidePreloader, 3500);
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
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

// ---------- HEADER EFFECT ----------
const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  if (!header) return;

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
    img.style.backgroundPosition = `center ${scrollY * 0.08}px`;
  });
});

// ---------- BUTTON HOVER ----------
document.querySelectorAll(".primary-btn").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0px)";
  });
});

// ---------- PROJECT HOVER ----------
document.querySelectorAll(".project-item").forEach((project) => {
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
    !href.startsWith("http") &&
    !href.startsWith("mailto:")
  ) {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
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

if (floatingPhotos.length > 0) {
  animateHero();
}

// ---------- MOBILE MENU ----------
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("open");
  }
}

// ---------- CAREER EMAIL ----------
function sendCareerEmail(event) {
  event.preventDefault();

  const ownerEmail = "careers@housethat.in";

  const name = document.getElementById("careerName")?.value || "";
  const email = document.getElementById("careerEmail")?.value || "";
  const phone = document.getElementById("careerPhone")?.value || "";
  const role = document.getElementById("careerRole")?.value || "";

  const subject = `Application for ${role} - HouseThat`;

  const body = `Dear HouseThat Team,

I would like to apply for the position of ${role}.

Applicant Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Role Applying For: ${role}

Please find my resume attached.

Regards,
${name}`;

  const mailtoURL = `mailto:${ownerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoURL;
}

// ---------- OPEN EMAIL ----------
function openEmail(e) {
  e.preventDefault();

  const email = "jaydhas238@gmail.com";
  const subject = "Website Enquiry";

  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`,
      "_blank"
    );
  }
}

// ---------- SANGLE PROJECT SLIDES ----------
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

function flipSangle() {
  const card = document.getElementById("sangleFlipCard");
  if (!card) return;

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

// ---------- KOMAL PROJECT SLIDES ----------
const komalSlides = [
  {
    image: "images/komal1.jpg",
    label: "Luxury Reception",
    title: "A welcoming beauty studio designed with elegance.",
    text: "Soft colours, premium finishes and thoughtful lighting create a relaxing first impression."
  },
  {
    image: "images/komal2.jpg",
    label: "Premium Styling Area",
    title: "Designed for comfort and professional beauty services.",
    text: "A modern styling space with elegant interiors that blends functionality with luxury."
  },
  {
    image: "images/komal3.jpg",
    label: "Makeover Corner",
    title: "Refined interiors for an elevated client experience.",
    text: "Carefully selected finishes and lighting create the perfect atmosphere for professional makeovers."
  },
  {
    image: "images/komal4.jpg",
    label: "Studio Details",
    title: "Every corner reflects sophistication and craftsmanship.",
    text: "Clean lines, premium materials and thoughtful detailing bring timeless elegance to the space."
  }
];

let komalIndex = 0;

function flipKomal() {
  const card = document.getElementById("komalFlipCard");
  if (!card) return;

  card.classList.add("flipping");

  setTimeout(() => {
    komalIndex = (komalIndex + 1) % komalSlides.length;
    const slide = komalSlides[komalIndex];

    document.getElementById("komalFlipImage").src = slide.image;
    document.getElementById("komalFlipLabel").textContent = slide.label;
    document.getElementById("komalFlipTitle").textContent = slide.title;
    document.getElementById("komalFlipText").textContent = slide.text;

    card.classList.remove("flipping");
  }, 400);
}

// ---------- OSWAL PROJECT SLIDES ----------
const oswalSlides = [
  {
    image: "images/oswal1.jpg",
    label: "Elegant Living Space",
    title: "Contemporary interiors designed for everyday luxury.",
    text: "Warm materials, refined finishes and thoughtful planning create a calm and sophisticated living environment."
  },
  {
    image: "images/oswal2.jpg",
    label: "Refined Bedroom",
    title: "A peaceful bedroom shaped with soft tones and comfort.",
    text: "Balanced lighting, premium textures and clean detailing create a restful private space."
  },
  {
    image: "images/oswal3.jpg",
    label: "Modern Detailing",
    title: "Every detail designed with purpose.",
    text: "Minimal lines, subtle material contrast and timeless finishes bring elegance to the home."
  }
];

let oswalIndex = 0;

function flipOswal() {
  const card = document.getElementById("oswalFlipCard");
  if (!card) return;

  card.classList.add("flipping");

  setTimeout(() => {
    oswalIndex = (oswalIndex + 1) % oswalSlides.length;
    const slide = oswalSlides[oswalIndex];

    document.getElementById("oswalFlipImage").src = slide.image;
    document.getElementById("oswalFlipLabel").textContent = slide.label;
    document.getElementById("oswalFlipTitle").textContent = slide.title;
    document.getElementById("oswalFlipText").textContent = slide.text;

    card.classList.remove("flipping");
  }, 400);
}


// ---------- Bijolu SLIDES ----------

var bijouSlides = [
  {
    image: "images/gehna1.jpg",
    label: "Luxury Boutique Entrance",
    title: "A refined retail space designed to welcome with elegance.",
    text: "Warm blush tones, brushed gold finishes and bespoke display elements create a luxurious first impression."
  },
  {
    image: "images/gehna2.jpg",
    label: "Curated Jewellery Display",
    title: "Lighting that celebrates every collection.",
    text: "Custom illuminated showcases enhance every jewellery piece while creating a sophisticated luxury shopping experience."
  },
  {
    image: "images/gehna3.jpg",
    label: "Fashion & Jewellery Studio",
    title: "A boutique where fashion and jewellery come together beautifully.",
    text: "Elegant interiors, premium finishes and thoughtful lighting create an intimate retail environment designed for timeless luxury."
  }
];

var bijouIndex = 0;

function flipBijou() {
  var card = document.getElementById("bijouFlipCard");
  if (!card) return;

  card.classList.add("flipping");

  setTimeout(function () {
    bijouIndex = (bijouIndex + 1) % bijouSlides.length;
    var slide = bijouSlides[bijouIndex];

    document.getElementById("bijouFlipImage").src = slide.image;
    document.getElementById("bijouFlipLabel").textContent = slide.label;
    document.getElementById("bijouFlipTitle").textContent = slide.title;
    document.getElementById("bijouFlipText").textContent = slide.text;

    card.classList.remove("flipping");
  }, 400);
}




 rooftopSlides = [
  {
    image:"images/Rooftop1.jpg",
    label:"Bar & Dining Experience",
    title:"Warm materials, crafted ambience and rooftop energy.",
    text:"A refined rooftop environment designed for hospitality, comfort and memorable evening experiences."
  },
  {
    image:"images/Rooftop2.jpg",
    label:"Framed Rooftop Seating",
    title:"A comfortable setting framed with geometric partitions.",
    text:"Warm wood tones, open city views and relaxed seating create a calm hospitality experience."
  },
  {
    image:"images/Rooftop3.jpg",
    label:"Green Dining Corner",
    title:"A relaxed corner designed for calm conversations.",
    text:"Planters, leather seating and soft daylight bring freshness and balance to the rooftop space."
  },
  {
    image:"images/Rooftop4.jpg",
    label:"Feature Wall",
    title:"A bold visual identity shaped for a memorable rooftop experience.",
    text:"Layered textures, lighting and branding create a strong focal point within the bar."
  },
  {
    image:"images/Rooftop5.jpg",
    label:"Signature Bar Counter",
    title:"A refined counter that anchors the rooftop bar.",
    text:"Layered lighting, brick textures and elegant detailing create a strong hospitality focal point."
  }
];

var rooftopIndex = 0;

function flipRooftop(){
  var card = document.getElementById("rooftopFlipCard");
  if (!card) return;

  card.classList.add("flipping");

  setTimeout(function(){
    rooftopIndex = (rooftopIndex + 1) % rooftopSlides.length;
    var slide = rooftopSlides[rooftopIndex];

    document.getElementById("rooftopFlipImage").src = slide.image;
    document.getElementById("rooftopFlipLabel").textContent = slide.label;
    document.getElementById("rooftopFlipTitle").textContent = slide.title;
    document.getElementById("rooftopFlipText").textContent = slide.text;

    card.classList.remove("flipping");
  }, 400);
}
