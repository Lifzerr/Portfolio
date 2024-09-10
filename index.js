let btnScrollTop = document.querySelector('.scroll-top-btn');


// Ne faire apparaître le bouton de scroll que si c'est utile
btnScrollTop.style.display = 'none';
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
});

// Action de retour en haut de page
btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

