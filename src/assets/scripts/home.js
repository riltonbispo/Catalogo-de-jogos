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
