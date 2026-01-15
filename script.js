/* =========================
   TYPEWRITER EFFECT
========================= */
const text = "IT Support & Website Handling Professional | AI Tools Learner";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}

window.addEventListener("load", () => {
  typeEffect();
});


/* =========================
   CERTIFICATE MODAL
========================= */
function openCert(src) {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("certImage");

  modal.style.display = "flex";
  img.src = src;
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}


/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


/* =========================
   MOBILE NAVBAR
========================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


/* =========================
   AUTO SLIDER (Achievements)
========================= */

const autoSlider = document.getElementById("slider");

let autoScrollSpeed = 0.6; // speed
let isPaused = false;

function autoScroll() {
  if (!isPaused) {
    autoSlider.scrollLeft += autoScrollSpeed;

    if (autoSlider.scrollLeft >= autoSlider.scrollWidth - autoSlider.clientWidth) {
      autoSlider.scrollLeft = 0; // infinite loop
    }
  }
  requestAnimationFrame(autoScroll);
}

autoScroll();


/* =========================
   MOBILE SWIPE
========================= */

const slider2 = document.querySelector(".slider-container");

let isDown = false;
let startX;
let scrollLeft;

slider2.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - slider2.offsetLeft;
  scrollLeft = slider2.scrollLeft;
});

slider2.addEventListener("touchend", () => {
  isDown = false;
});

slider2.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - slider2.offsetLeft;
  const walk = (x - startX) * 2;
  slider2.scrollLeft = scrollLeft - walk;
});


/* =========================
   Pause Auto Scroll On Touch
========================= */

slider2.addEventListener("mouseenter", () => {
  isPaused = true;
});

slider2.addEventListener("mouseleave", () => {
  isPaused = false;
});

slider2.addEventListener("touchstart", () => {
  isPaused = true;
});

slider2.addEventListener("touchend", () => {
  isPaused = false;
});
