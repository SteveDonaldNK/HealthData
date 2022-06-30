const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-links");
const toTopBtn = document.querySelector(".to-top-btn");
const toggle = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTopBtn.style.bottom = "5%";
  } else {
    toTopBtn.style.bottom = "-10%";
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
  document.body.classList.toggle('active');
});
