document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('nav-open');
  document.querySelector('.menu-toggle').classList.toggle('open');
})