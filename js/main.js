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

/* ==========================================
   OBEROI SLIDER
========================================== */

const oberoiSlider = document.querySelector("#oberoi-slider");

if (oberoiSlider) {

    const slides = oberoiSlider.querySelectorAll(".slides img");
    const prev = oberoiSlider.querySelector(".prev");
    const next = oberoiSlider.querySelector(".next");
    const current = oberoiSlider.querySelector(".current");
    const dotsContainer = oberoiSlider.querySelector(".slider-dots");

    let index = 0;

    // Create dots
    slides.forEach((_, i) => {

        const dot = document.createElement("span");

        if(i === 0) dot.classList.add("active");

        dot.onclick = () => {

            showSlide(i);

        };

        dotsContainer.appendChild(dot);

    });

    const dots = dotsContainer.querySelectorAll("span");

    function showSlide(i){

        slides.forEach(img => img.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        index = i;

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current.textContent = String(index+1).padStart(2,"0");

    }

    next.onclick = ()=>{

        showSlide((index+1)%slides.length);

    };

    prev.onclick = ()=>{

        showSlide((index-1+slides.length)%slides.length);

    };

    setInterval(()=>{

        showSlide((index+1)%slides.length);

    },5000);

}


/* ==========================================
   BIHAR SLIDER
========================================== */

const biharSlider = document.querySelector("#bihar-slider");

if (biharSlider) {

    const slides = biharSlider.querySelectorAll(".slides img");
    const prev = biharSlider.querySelector(".prev");
    const next = biharSlider.querySelector(".next");
    const current = biharSlider.querySelector(".current");
    const dotsContainer = biharSlider.querySelector(".slider-dots");

    let index = 0;

    // Create dots
    slides.forEach((_, i) => {

        const dot = document.createElement("span");

        if(i === 0){
            dot.classList.add("active");
        }

        dot.onclick = () => {
            showSlide(i);
        };

        dotsContainer.appendChild(dot);

    });

    const dots = dotsContainer.querySelectorAll("span");

    function showSlide(i){

        slides.forEach(img => img.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        index = i;

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current.textContent = String(index + 1).padStart(2,"0");

    }

    next.onclick = () => {

        showSlide((index + 1) % slides.length);

    };

    prev.onclick = () => {

        showSlide((index - 1 + slides.length) % slides.length);

    };

    setInterval(() => {

        showSlide((index + 1) % slides.length);

    }, 5000);

    showSlide(0);

}


/* ==========================================
   PLANET OF JOY SLIDER
========================================== */

const joySlider = document.querySelector("#joy-slider");

if (joySlider) {

    const slides = joySlider.querySelectorAll(".slides img");
    const prev = joySlider.querySelector(".prev");
    const next = joySlider.querySelector(".next");
    const current = joySlider.querySelector(".current");
    const dotsContainer = joySlider.querySelector(".slider-dots");

    let index = 0;

    slides.forEach((_, i) => {

        const dot = document.createElement("span");

        if(i===0) dot.classList.add("active");

        dot.onclick=()=>showSlide(i);

        dotsContainer.appendChild(dot);

    });

    const dots=dotsContainer.querySelectorAll("span");

    function showSlide(i){

        slides.forEach(img=>img.classList.remove("active"));
        dots.forEach(dot=>dot.classList.remove("active"));

        index=i;

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current.textContent=String(index+1).padStart(2,"0");

    }

    next.onclick=()=>showSlide((index+1)%slides.length);

    prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

    setInterval(()=>{

        showSlide((index+1)%slides.length);

    },5000);

    showSlide(0);

}


/* ==========================================
   DUBAI SLIDER
========================================== */

const dubaiSlider = document.querySelector("#dubai-slider");

if (dubaiSlider) {

    const slides = dubaiSlider.querySelectorAll(".slides img");
    const prev = dubaiSlider.querySelector(".prev");
    const next = dubaiSlider.querySelector(".next");
    const current = dubaiSlider.querySelector(".current");
    const dotsContainer = dubaiSlider.querySelector(".slider-dots");

    let index = 0;

    slides.forEach((_, i) => {

        const dot = document.createElement("span");

        if(i===0) dot.classList.add("active");

        dot.onclick = ()=>showSlide(i);

        dotsContainer.appendChild(dot);

    });

    const dots = dotsContainer.querySelectorAll("span");

    function showSlide(i){

        slides.forEach(img=>img.classList.remove("active"));
        dots.forEach(dot=>dot.classList.remove("active"));

        index=i;

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current.textContent=String(index+1).padStart(2,"0");

    }

    next.onclick=()=>showSlide((index+1)%slides.length);

    prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

    setInterval(()=>{

        showSlide((index+1)%slides.length);

    },5000);

    showSlide(0);

}

/* ==========================================
   ROOFTOP SLIDER
========================================== */

const rooftopSlider=document.querySelector("#rooftop-slider");

if(rooftopSlider){

const slides=rooftopSlider.querySelectorAll(".slides img");
const prev=rooftopSlider.querySelector(".prev");
const next=rooftopSlider.querySelector(".next");
const current=rooftopSlider.querySelector(".current");
const dotsContainer=rooftopSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}

/* ==========================================
   KOMAL SLIDER
========================================== */

const komalSlider=document.querySelector("#komal-slider");

if(komalSlider){

const slides=komalSlider.querySelectorAll(".slides img");
const prev=komalSlider.querySelector(".prev");
const next=komalSlider.querySelector(".next");
const current=komalSlider.querySelector(".current");
const dotsContainer=komalSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}
/* ==========================================
   OSWAL SLIDER
========================================== */

const oswalSlider=document.querySelector("#oswal-slider");

if(oswalSlider){

const slides=oswalSlider.querySelectorAll(".slides img");
const prev=oswalSlider.querySelector(".prev");
const next=oswalSlider.querySelector(".next");
const current=oswalSlider.querySelector(".current");
const dotsContainer=oswalSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}

/* ==========================================
   BIJOU SLIDER
========================================== */

const bijouSlider=document.querySelector("#bijou-slider");

if(bijouSlider){

const slides=bijouSlider.querySelectorAll(".slides img");
const prev=bijouSlider.querySelector(".prev");
const next=bijouSlider.querySelector(".next");
const current=bijouSlider.querySelector(".current");
const dotsContainer=bijouSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}

/* ==========================================
   TRILLIUM SLIDER
========================================== */

const trilliumSlider=document.querySelector("#trillium-slider");

if(trilliumSlider){

const slides=trilliumSlider.querySelectorAll(".slides img");
const prev=trilliumSlider.querySelector(".prev");
const next=trilliumSlider.querySelector(".next");
const current=trilliumSlider.querySelector(".current");
const dotsContainer=trilliumSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}

/* ==========================================
   AKAR SLIDER
========================================== */

const akarSlider=document.querySelector("#akar-slider");

if(akarSlider){

const slides=akarSlider.querySelectorAll(".slides img");
const prev=akarSlider.querySelector(".prev");
const next=akarSlider.querySelector(".next");
const current=akarSlider.querySelector(".current");
const dotsContainer=akarSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}

/* ==========================================
   INSIGHT SLIDER
========================================== */

const insightSlider=document.querySelector("#insight-slider");

if(insightSlider){

const slides=insightSlider.querySelectorAll(".slides img");
const prev=insightSlider.querySelector(".prev");
const next=insightSlider.querySelector(".next");
const current=insightSlider.querySelector(".current");
const dotsContainer=insightSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}

/* ==========================================
   SUGA SLIDER
========================================== */

const sugaSlider=document.querySelector("#suga-slider");

if(sugaSlider){

const slides=sugaSlider.querySelectorAll(".slides img");
const prev=sugaSlider.querySelector(".prev");
const next=sugaSlider.querySelector(".next");
const current=sugaSlider.querySelector(".current");
const dotsContainer=sugaSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}

/* ==========================
   PRABHA VILLA SLIDER
========================== */

const prabhaSlides = document.querySelectorAll(".prabha-slide");
const prabhaPrev = document.querySelector(".prabha-prev");
const prabhaNext = document.querySelector(".prabha-next");
const prabhaDots = document.querySelectorAll(".prabha-dot");
const prabhaCurrent = document.querySelector(".prabha-current");
const prabhaTotal = document.querySelector(".prabha-total");

let prabhaIndex = 0;

if (prabhaTotal) {
    prabhaTotal.textContent = String(prabhaSlides.length).padStart(2, "0");
}

function updatePrabhaSlider() {

    prabhaSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === prabhaIndex);
    });

    prabhaDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === prabhaIndex);
    });

    if (prabhaCurrent) {
        prabhaCurrent.textContent = String(prabhaIndex + 1).padStart(2, "0");
    }
}

prabhaNext?.addEventListener("click", () => {
    prabhaIndex = (prabhaIndex + 1) % prabhaSlides.length;
    updatePrabhaSlider();
});

prabhaPrev?.addEventListener("click", () => {
    prabhaIndex =
        (prabhaIndex - 1 + prabhaSlides.length) % prabhaSlides.length;
    updatePrabhaSlider();
});

prabhaDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        prabhaIndex = i;
        updatePrabhaSlider();
    });
});

updatePrabhaSlider();


/*==============================
PHOTOGRAPHY SLIDER
==============================*/

const photoSlider=document.querySelector("#photo-slider");

if(photoSlider){

const slides=photoSlider.querySelectorAll(".slides img");

const prev=photoSlider.querySelector(".prev");

const next=photoSlider.querySelector(".next");

const current=photoSlider.querySelector(".current");

const dotsContainer=photoSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));

dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");

dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}

/*=============================
3D VISUALIZATION SLIDER
=============================*/

(function(){

    const slider = document.getElementById("renderSlider");

    if(!slider) return;

    const slides = slider.querySelectorAll(".slides img");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");
    const dotsWrap = slider.querySelector(".slider-dots");
    const current = slider.querySelector(".current");
    const total = slider.querySelector(".total");

    let index = 0;

    total.textContent = String(slides.length).padStart(2,"0");

    slides.forEach((img,i)=>{

        const dot=document.createElement("span");

        if(i===0) dot.classList.add("active");

        dot.addEventListener("click",()=>showSlide(i));

        dotsWrap.appendChild(dot);

    });

    const dots=dotsWrap.querySelectorAll("span");

    function showSlide(i){

        slides[index].classList.remove("active");
        dots[index].classList.remove("active");

        index=(i+slides.length)%slides.length;

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current.textContent=String(index+1).padStart(2,"0");

    }

    prev.addEventListener("click",()=>showSlide(index-1));
    next.addEventListener("click",()=>showSlide(index+1));

    setInterval(()=>{

        showSlide(index+1);

    },5000);

})();


document.querySelectorAll('a[href="project-details.html"]').forEach(link => {
    link.removeAttribute("href");
});





const menuBtn = document.getElementById("htMenuBtn");
const mobileNav = document.getElementById("htMobileNav");

if (menuBtn && mobileNav) {

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("active");
        mobileNav.classList.toggle("active");

    });

}
window.addEventListener("scroll",()=>{

const scrolled=window.pageYOffset;

const bg=document.querySelector(".hero-v2-bg");

if(bg){

bg.style.transform=`translateY(${scrolled*0.18}px) scale(1.08)`;

}

});


const renderSlider=document.querySelector("#render-slider");

if(renderSlider){

const slides=renderSlider.querySelectorAll(".slides img");
const prev=renderSlider.querySelector(".prev");
const next=renderSlider.querySelector(".next");
const current=renderSlider.querySelector(".current");
const dotsContainer=renderSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}

const artSlider=document.querySelector("#art-slider");

if(artSlider){

const slides=artSlider.querySelectorAll(".slides img");
const prev=artSlider.querySelector(".prev");
const next=artSlider.querySelector(".next");
const current=artSlider.querySelector(".current");
const dotsContainer=artSlider.querySelector(".slider-dots");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>showSlide(i);

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function showSlide(i){

slides.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

index=i;

slides[index].classList.add("active");
dots[index].classList.add("active");

current.textContent=String(index+1).padStart(2,"0");

}

next.onclick=()=>showSlide((index+1)%slides.length);

prev.onclick=()=>showSlide((index-1+slides.length)%slides.length);

setInterval(()=>{

showSlide((index+1)%slides.length);

},5000);

showSlide(0);

}
/*=========================================
PROJECT SHOWCASE SWIPER
=========================================*/

const projectSwiper = new Swiper(".projectSwiper", {

    loop: true,

    speed: 900,

    effect: "slide",

    grabCursor: true,

    spaceBetween: 0,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".project-next",
        prevEl: ".project-prev",
    },

    pagination: {
        el: ".project-pagination",
        clickable: true,
    },

    on: {

        init: function () {

            const totalSlides = document.querySelectorAll(".projectSwiper .swiper-slide").length;

document.getElementById("totalSlides").textContent =
    String(totalSlides).padStart(2, "0");

            document.getElementById("currentSlide").textContent =
                "01";
        },

        slideChange: function () {

            let current = this.realIndex + 1;

            document.getElementById("currentSlide").textContent =
                String(current).padStart(2, "0");

        }

    }

});


document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const projectType = document.getElementById("projectType").value;
        const location = document.getElementById("location").value.trim();

        const message =
`Hello HouseThat,

I would like to enquire about a project.

Name: ${name}

Phone: ${phone}

Project Type: ${projectType}

Project Location: ${location}

Looking forward to discussing my project with your team.`;

        const whatsappNumber = "917972219776"; // Replace with HouseThat WhatsApp number

        const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

});

/*=========================================
        PROJECT NAVBAR
=========================================*/

const projectBtn = document.querySelector(".project-dropdown-btn");
const dropdownMenu = document.querySelector(".project-dropdown-menu");

const categories = document.querySelectorAll(".project-category");
const submenus = document.querySelectorAll(".project-submenu");


/*----------------------------
    OPEN FIRST DROPDOWN
-----------------------------*/

projectBtn.addEventListener("click", function(e){

    e.stopPropagation();

    dropdownMenu.classList.toggle("active");

    submenus.forEach(menu=>{
        menu.classList.remove("active");
    });

});


/*----------------------------
    OPEN SECOND DROPDOWN
-----------------------------*/

categories.forEach(category=>{

    category.addEventListener("click", function(e){

        e.stopPropagation();

        submenus.forEach(menu=>{
            menu.classList.remove("active");
        });

        const target = document.getElementById(
            category.dataset.target
        );

        if(target){

            target.classList.add("active");

        }

    });

});


/*----------------------------
    CLICK OUTSIDE
-----------------------------*/

document.addEventListener("click", function(e){

    if(!e.target.closest(".project-dropdown")){

        dropdownMenu.classList.remove("active");

        submenus.forEach(menu=>{
            menu.classList.remove("active");
        });

    }

});
