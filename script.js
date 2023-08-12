// preloader
const preloader = document.querySelector(".preloader");
const imgFloat = document.querySelector(".img-float");
window.addEventListener("load", () => {
  preloader.classList.add("animate");
  preloader.addEventListener("animationend", () => {
    preloader.style.display = "none";
    gsap.fromTo(
      imgFloat,
      { delay: -3, opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        x: "-700px",
        ease: "power2",
      }
    );
  });
});

// Mouse Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.pageY - 5}px`;
  cursor.style.left = `${e.pageX - 7}px`;
});

// Signup icon
const navtopSignin = document.querySelector(".nav-top-signin");
const signinIcon = document.querySelector(".signin-icon");
navtopSignin.addEventListener("mouseenter", () => {
  signinIcon.style.color = "#FFFFFF";
});
navtopSignin.addEventListener("mouseleave", () => {
  signinIcon.style.color = "#808080";
});

// mobile nav icon toggle
const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.querySelector(".nav-mobile");
navToggle.addEventListener("click", () => {
  navMobile.classList.toggle("hide");
});

// form animation
const formInput = document.querySelectorAll(".input");
const formLabel = document.querySelectorAll(".label");
for (let i = 0; i < formInput.length; i++) {
  formInput[i].addEventListener("click", () => {
    const curentLabel = formLabel[i];
    gsap.fromTo(
      curentLabel,
      { opacity: 0, y: "50px", delay: 1 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  });
}

// nav
document.addEventListener("DOMContentLoaded", () => {
  const navTop = document.querySelector(".nav-top");
  const navBrand = document.querySelector(".nav-brand");
  window.addEventListener("scroll", () => {
    const navTopPosition = navTop.getBoundingClientRect().top;
    if (navTopPosition <= 0) {
      navBrand.classList.add("fixed");
    }
  });
  window.addEventListener("scroll", () => {
    const navTopPosition = navTop.getBoundingClientRect().top;
    if (navTopPosition >= 0) {
      navBrand.classList.remove("fixed");
    }
  });
});

// dropdown
const dropdownBus = document.querySelector(".business-dropdown");
const navBusinessDrop = document.querySelector(".nav-business-drop");
const dropdownSci = document.querySelector(".science-dropdown");
const navScienceDrop = document.querySelector(".nav-science-drop");
const navResourcesDrop = document.querySelector(".nav-resources-drop");
const dropdownResourses = document.querySelector(".resources-dropdown");
const noDrops = document.querySelectorAll(".no-drop");
navBusinessDrop.addEventListener("mouseover", () => {
  dropdownBus.classList.remove("hidden");
  dropdownSci.classList.add("hidden");
  dropdownResourses.classList.add("hidden");
});
dropdownBus.addEventListener("mouseleave", () => {
  dropdownBus.classList.add("hidden");
});
navScienceDrop.addEventListener("mouseover", () => {
  dropdownSci.classList.remove("hidden");
  dropdownBus.classList.add("hidden");
  dropdownResourses.classList.add("hidden");
});
dropdownSci.addEventListener("mouseleave", () => {
  dropdownSci.classList.add("hidden");
});
navResourcesDrop.addEventListener("mouseover", () => {
  dropdownResourses.classList.remove("hidden");
  dropdownBus.classList.add("hidden");
  dropdownSci.classList.add("hidden");
});
dropdownResourses.addEventListener("mouseleave", () => {
  console.log("left");
  dropdownResourses.classList.add("hidden");
});
for (let i = 0; i < noDrops.length; i++) {
  noDrops[i].addEventListener("mouseenter", () => {
    dropdownBus.classList.add("hidden");
    dropdownSci.classList.add("hidden");
    dropdownResourses.classList.add("hidden");
  });
}

// mobile nav accoidian

const accoidianBtns = document.querySelectorAll(".accordian-btn");
const accoidianBody = document.querySelectorAll(".accordian-body");

accoidianBtns.forEach((accoidianBtn, index) => {
  accoidianBtn.addEventListener("click", () => {
    accoidianBody[index].classList.toggle("hide");
  });
});
