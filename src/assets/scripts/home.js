const showMenu = () => {
  let button = document.querySelector('.hamburger')
  let menuMobile = document.querySelector('#nav-mobile')

  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open')
    menuMobile.style.display = 'none'
    button.src = "assets/img/hamburger.svg";
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  } else {
    menuMobile.classList.add('open')
    menuMobile.style.display = 'block'
    menuMobile.style.width = '100%'
    button.src = "assets/img/x.svg";
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
}


// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
const openModal = ()  =>{
  modal.style.display = "block";
  console.log('abriu')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}