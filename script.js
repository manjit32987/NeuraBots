// script.js

// 1. Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const navDots = document.querySelectorAll(".slide-nav span");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (navDots[i]) navDots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  if (navDots[index]) navDots[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function changeSlide(index) {
  showSlide(index);
}

setInterval(nextSlide, 5000); // Change every 5s

// Initialize first slide
showSlide(currentSlide);

  
  
  // 2. Slideshow for "Our Story" section
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Function to move to next/previous slide
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Function to display the current slide
  function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
  
    if (slides.length === 0) return; // Skip if no slides exist
  
    if (n > slides.length) {
      slideIndex = 1;
    }
  
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
  }
  