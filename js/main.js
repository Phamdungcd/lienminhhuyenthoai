const language = document.getElementById('js-language');
const languageOption = document.getElementById('js-language-option');
// language option
language.onclick = function() {
  languageOption.classList.toggle('display');;
}

// search
const clickSearch = document.getElementById('js-search');
const searchDisplay = document.getElementById('js-search-display');
const closeSearch = document.getElementById('js-close');

clickSearch.onclick = function() {
  searchDisplay.style.transform = 'translateY(0)';
}
// close search
closeSearch.onclick = function() {
  searchDisplay.style.transform = 'translateY(-100%)';
}

// scroll
const scrollSearch = document.getElementById('js-scroll');
const header = document.querySelector('.header');
window.onscroll = function() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollSearch.style.top = '0';
    header.style.zIndex = '3000';
  } else {
    scrollSearch.style.top = '120px';
    header.style.zIndex = '3000000';
  }
}

// navlist
const jsMenu = document.getElementById('js-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.menu-icon_close');
menuIcon.onclick = () => {
  jsMenu.style.opacity = '1';
  jsMenu.style.visibility = 'visible';
  jsMenu.style.transform = 'translateX(0)'
}

closeMenu.onclick = () => {
  jsMenu.style.opacity = '0';
  jsMenu.style.visibility = 'hidden';
}

const btnIcon = document.getElementById('btn-icon');
const subNav = document.getElementById('js-navbar-mobile');
btnIcon.onclick = (e) => {
  subNav.classList.toggle('displayNav');
  e.preventDefault();
}

// search mobile
