let btnScrollTop = document.querySelector('.scroll-top-btn');
let btnChangeTheme = document.getElementById('themeChanger');

// Mettre à jour le thème en fonction de la préférence de l'utilisateur
let theme = localStorage.getItem('theme');
if(theme === 'dark'){
  changeColorsTo('dark');
  let circle = document.getElementById('circle');
  circle.style.marginLeft = '55px';
  circle.classList.remove('clear');
}



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

/*** Events Bouton de thèmes ***/
btnChangeTheme.addEventListener('click', () => {
  let circle = document.getElementById('circle');
  console.log('entré');
  if(circle.classList.contains('clear')){
    circle.style.marginLeft = '55px';
    circle.classList.remove('clear');

    // Changer les couleurs de tous les élements
    changeColorsTo('dark');

    // Faire une transition douce pour le changement de couleur

    // Enregistrer le thème dans le localStorage
    localStorage.setItem('theme', 'dark');
  }
  else{
    circle.style.marginLeft = '-55px';
    circle.classList.add('clear');

    // Changer les couleurs de tous les élements
    changeColorsTo('light');

    // Enregistrer le thème dans le localStorage
    localStorage.setItem('theme', 'light');
  }
});





/*** Fonction de changement de couleurs des variables ***/
function changeColorsTo(theme){
  var root = document.querySelector(':root');

  console.log(theme);

  if(theme === 'dark'){
    root.style.setProperty('--primary-color', '#000');
    root.style.setProperty('--main-color', '#0a0f25');
    root.style.setProperty('--font-color', '#fff');
    root.style.setProperty('--secondary-font-color', '#bdbdbd');
    root.style.setProperty('--main-hover-btn-color', '#1565c0');
    root.style.setProperty('--about-background-color', '#263238');
    root.style.setProperty('--main-logo-color', '#ffffff');
    root.style.setProperty('--main-border-color', '#757575');
    root.style.setProperty('--buttons-font-color', '#fff');
    root.style.setProperty('--nav-a-color-hover', '#97c2f7')
  }
  else{
    root.style.setProperty('--primary-color', '#303f9f');
    root.style.setProperty('--main-color', '#fff');
    root.style.setProperty('--font-color', '#000');
    root.style.setProperty('--secondary-font-color', '#8695a4');
    root.style.setProperty('--main-hover-btn-color', '#1a237e');
    root.style.setProperty('--about-background-color', '#dbedf2');
    root.style.setProperty('--main-logo-color', '#3e3e3e');
    root.style.setProperty('--main-border-color', '#e0e0e0');
    root.style.setProperty('--buttons-font-color', '#fff');
    root.style.setProperty('--nav-a-color-hover', '#303f9f')
  }
}



// Transition Input
const inputElement = document.getElementById('inputElement');

    inputElement.addEventListener('click', function (e) {
      // Supprimer les anciens effets ripple
      const oldRipple = this.querySelector('.ripple');
      if (oldRipple) {
        oldRipple.remove();
      }

      // Créer l'effet ripple
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      // Calculer la position du clic
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';

      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      // Ajouter l'effet ripple à l'élément
      this.appendChild(ripple);
    });