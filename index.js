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
    root.style.setProperty('--buttons-font-color', '#000');
  }
}

