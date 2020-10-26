const navbar = document.querySelector('#navbar');
const menuBtn = document.querySelector('.navbar-menu-toggler');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  console.log('toggled');
});

document.addEventListener('scroll', (e) => {
  if (window.pageYOffset > 100) {
    navbar.style.opacity = 0.8;
  } else {
    navbar.style.opacity = 1;
  }
});
