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
  