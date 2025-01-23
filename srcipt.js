// JavaScript para cambiar el navbar al hacer scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.remove('transparent');
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
    navbar.classList.add('transparent');
  }
});

/* */