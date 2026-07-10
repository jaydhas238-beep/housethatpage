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


document.querySelectorAll(".project-slider").forEach(slider=>{

    const slides=slider.querySelectorAll(".slides img");

    const prev=slider.querySelector(".slider-prev");

    const next=slider.querySelector(".slider-next");

    const dotsContainer=slider.querySelector(".slider-dots");

    const counter=slider.querySelector(".slider-count");

    let current=0;

    slides.forEach((img,index)=>{

        const dot=document.createElement("div");

        dot.className="slider-dot";

        dot.onclick=()=>show(index);

        dotsContainer.appendChild(dot);

    });

    const dots=dotsContainer.querySelectorAll(".slider-dot");

    function show(index){

        slides.forEach(img=>img.classList.remove("active"));

        dots.forEach(dot=>dot.classList.remove("active"));

        current=index;

        slides[current].classList.add("active");

        dots[current].classList.add("active");

        counter.innerHTML=(current+1)+" / "+slides.length;

    }

    next.onclick=()=>{

        show((current+1)%slides.length);

    };

    prev.onclick=()=>{

        show((current-1+slides.length)%slides.length);

    };

    setInterval(()=>{

        show((current+1)%slides.length);

    },4500);

    show(0);

});
/* ==========================================================
   HOUSETHAT UNIVERSAL PROJECT SLIDER
========================================================== */

document.querySelectorAll(".project-slider").forEach((slider) => {

    const slides = slider.querySelectorAll(".slides img");
    const prev = slider.querySelector(".slider-prev");
    const next = slider.querySelector(".slider-next");
    const dotsContainer = slider.querySelector(".slider-dots");
    const counter = slider.querySelector(".slider-count");

    let current = 0;
    let autoPlay;

    // Create Dots
    slides.forEach((_, index) => {

        const dot = document.createElement("div");

        dot.classList.add("slider-dot");

        if(index === 0){
            dot.classList.add("active");
        }

        dot.onclick = () => {
            showSlide(index);
            restartAutoPlay();
        };

        dotsContainer.appendChild(dot);

    });

    const dots = dotsContainer.querySelectorAll(".slider-dot");

    function showSlide(index){

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        current = index;

        slides[current].classList.add("active");
        dots[current].classList.add("active");

        counter.innerHTML =
            (current + 1) + " / " + slides.length;

    }

    function nextSlide(){

        current++;

        if(current >= slides.length){
            current = 0;
        }

        showSlide(current);

    }

    function prevSlide(){

        current--;

        if(current < 0){
            current = slides.length - 1;
        }

        showSlide(current);

    }

    next.onclick = () => {

        nextSlide();

        restartAutoPlay();

    };

    prev.onclick = () => {

        prevSlide();

        restartAutoPlay();

    };

    function startAutoPlay(){

        autoPlay = setInterval(nextSlide, 5000);

    }

    function stopAutoPlay(){

        clearInterval(autoPlay);

    }

    function restartAutoPlay(){

        stopAutoPlay();

        startAutoPlay();

    }

    slider.addEventListener("mouseenter", stopAutoPlay);

    slider.addEventListener("mouseleave", startAutoPlay);

    // Touch Support

    let startX = 0;

    slider.addEventListener("touchstart", (e)=>{

        startX = e.touches[0].clientX;

    });

    slider.addEventListener("touchend", (e)=>{

        let endX = e.changedTouches[0].clientX;

        if(startX - endX > 60){

            nextSlide();

        }

        if(endX - startX > 60){

            prevSlide();

        }

    });

    showSlide(0);

    startAutoPlay();

});
