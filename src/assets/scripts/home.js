let button = document.querySelector('.hamburger')
let menuMobile = document.querySelector('#nav-mobile')

const categories = ['jogado', 'jogando', 'zerado', 'nao-recomendo'];
const plataforms = ['Steam', 'Epic', 'PSN', 'Xbox', 'PlayStore'];
const categoryDiv = document.getElementById('category');
const plataformDiv = document.getElementById('plataform');

const categoryContent = categories.map(category => `
  <div>
    <input type="checkbox" name="category" value="${category}" id="category-${category}">
    <label for="category-${category}">${category}</label>
  </div>
`).join('');

categoryDiv.innerHTML = categoryContent;

const plataformContent = plataforms.map(plataform => `
  <div>
    <input type="checkbox" name="plataform" value="${plataform}" id="plataform-${plataform}">
    <label for="plataform-${plataform}">${plataform}</label>
  </div>
`).join('');

plataformDiv.innerHTML = plataformContent;


const showMenu = () => {
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open')
    menuMobile.style.display = 'none'
    button.src = "assets/img/hamburger.svg";
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    closeModal()
  } else {
    menuMobile.classList.add('open')
    menuMobile.style.display = 'block'
    menuMobile.style.width = '100%'
    button.src = "assets/img/x.svg";
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
}


var modal = document.getElementById("modal");
var btn = document.getElementById("myBtn");
var close = document.getElementById("close");

const openModal = () => {
  modal.style.display = "block";
  menuMobile.classList.remove('open')
  menuMobile.style.display = 'none'
  button.src = "assets/img/hamburger.svg";
  document.documentElement.style.overflow = 'auto';
  document.body.style.overflow = 'auto';
}

const closeModal = () => {
  modal.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}