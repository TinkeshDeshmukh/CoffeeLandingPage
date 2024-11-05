const button = document.getElementById("btn");
const images = document.querySelectorAll(".img");
const btn = document.getElementById("btn-1");
const btn_2 = document.getElementById("btn-2");
const navbar = document.getElementById("navbar");
const choco_dripper = document.getElementById("choco_dripper");
const Heading_2 = document.getElementById("Heading-2");
const Heading_1 = document.getElementById("Heading-1");
const pond = document.getElementById("pond");
const dropImg = document.getElementById("dropImg");
const link_container = document.getElementById("link_container");
const link_container2 = document.getElementById("link_container2");
const count = 1;

let isNavbarExpanded = false;

// Image slideshow function
const imageSlideshow = () => {
  setInterval(() => {
    const selectedImage = images[Math.floor(Math.random() * images.length)];

    images.forEach((image) => {
      image.style.opacity = image === selectedImage ? "1" : "0";
      if (image === selectedImage) {
        imagerPeak(image);
      }
    });
  }, 2500);
};

// Highlight selected image
const imagerPeak = (image) => {
  image.style.transition = "opacity 0.7s ease-in-out, transform 0.7s ease-in-out";
  image.style.transform = "scale(1.1)";
  setTimeout(() => {
    image.style.transform = "scale(1)";
  }, 2200);
};

// Initial animations for the dripper and pond
const initializeAnimations = () => {
  choco_dripper.style.animation = "Dropper 20s linear 300ms 1";
  pond.style.animation = "Dropper2 15s 4.3s linear 1";
  setTimeout(() => {
    choco_dripper.style.height = "1000px";
    pond.style.visibility = "visible"

  }, 15000);
};

// Toggle Navbar state
const toggleNavbar = () => {
  isNavbarExpanded = !isNavbarExpanded;
  const navbarAction = isNavbarExpanded ? "expand" : "collapse";
  
  updateNavbarState(navbarAction);
};

// Update the Navbar and page state based on expansion or collapse
const updateNavbarState = (action) => {
  const showNavbar = action === "expand";
  
  link_container.style.visibility = showNavbar ? "hidden" : "visible";
  link_container2.style.visibility = showNavbar ? "visible" : "hidden";
  Heading_2.style.opacity = showNavbar ? "1" : "0";
  Heading_1.style.opacity = showNavbar ? "0" : "1";
  btn_2.style.opacity = showNavbar ? "1" : "0";
  btn.style.opacity = showNavbar ? "0" : "1";
  choco_dripper.style.visibility = showNavbar ? "hidden" : "visible";
  dropImg.style.opacity = showNavbar ? "0" : "1";

  if (showNavbar) {
    navbar.style.animation = "NavbarAnimation 1s ease-in-out 1";
    link_container2.style.animation = "round2 1s ease-in-out 1";
    setTimeout(() => {
      navbar.style.backgroundSize = "10000px";
    }, 900);
  } else {
    navbar.style.animation = "NavbarAnimation_2 1s ease-in-out 1";
    link_container.style.animation = "round2 1s ease-in-out 1";
    setTimeout(() => {
      navbar.style.backgroundSize = "800px";
    }, 900);
  }
};

// Event listeners
btn.addEventListener("click", toggleNavbar);
btn_2.addEventListener("click", toggleNavbar);

// Initialize functions
imageSlideshow();
initializeAnimations();



