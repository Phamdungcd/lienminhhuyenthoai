const tgLanguage = document.querySelector('.tgLanguage');
const switchDrop = document.querySelector('.lang_switch-drop');
// language option
tgLanguage.onclick = function() {
  switchDrop.classList.toggle('active');
}

// search
const searchBtn = document.querySelector('.searchBtn');
const searchMB_Btn = document.querySelector('.searchMB_Btn');
const searchBox = document.querySelector('.search-modal');
const closeBtn = document.getElementById('closeBtn');
searchBtn.onclick = function() {
  searchBox.classList.toggle('active')
}
closeBtn.onclick = function() {
  searchBox.classList.remove('active')
}
searchMB_Btn.onclick = function() {
  searchBox.classList.toggle('active')
  nav_Btn.style.transform = 'translateX(100%)';
}
closeBtn.onclick = function() {
  searchBox.classList.remove('active')
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
const listMB_Btn = document.querySelector('.navBtn');
const list2_MB = document.querySelector('.navbar_mobile ul li ul');
listMB_Btn.onclick = () => {
  list2_MB.classList.toggle('active');
}

// header MB
const menuMB_Btn = document.querySelector('.menuBtn');
const nav_Btn = document.querySelector('.header_mobile');
menuMB_Btn.onclick = () => {
  nav_Btn.style.transform = 'translateX(0)';
}

const closeMB_Btn = document.querySelector('.mobileBtn');
closeMB_Btn.onclick = () => {
  nav_Btn.style.transform = 'translateX(100%)';
}

