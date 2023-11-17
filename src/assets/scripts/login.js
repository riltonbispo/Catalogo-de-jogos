const link = document.getElementById('link-home');
const email = document.getElementById('email');
const password = document.getElementById('password');

link.addEventListener('click', () => {
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('Preencha todos os campos');
  } else {
    window.location.href = 'home.html'; // Redireciona para a página "home.html"
  }
});