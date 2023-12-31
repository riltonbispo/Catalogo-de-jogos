const categories = ['jogado', 'jogando', 'zerado', 'nao-recomendo'];
let platformsArray = ['Steam', 'Epic', 'PSN', 'Xbox', 'PlayStore'];
const checkCategories = document.getElementById("categories-select");
const checkPlatforms = document.getElementById("platforms-select");
const checkGames = document.getElementById("games-select");
const gameList = document.getElementById('game-list');
const platformInput = document.getElementById('platform-name')
const inputGameName = document.getElementById('game-name')
const selectedFileName = document.getElementById('selectedFileName');
const gamePhoto = document.getElementById('game-photo')
let imageUrl = ''


let games = [
  {
    id: 1,
    title: 'Stardew Valley',
    categorys: ['jogado', 'jogando', 'zerado'],
    plataform: ['Steam', 'Epic', 'PSN', 'Xbox'],
    img: './assets/img/stardew-valley.png',
    rating: 3
  },
  {
    id: 2,
    title: 'Red Dead Redemption 2',
    categorys: ['jogado', 'jogando', 'zerado'],
    plataform: ['Steam', 'Epic', 'PSN', 'Xbox'],
    img: './assets/img/red-dead.jpeg',
    rating: 3
  },
  {
    id: 3,
    title: 'Detroit: Become Human',
    categorys: ['jogado', 'jogando', 'zerado'],
    plataform: ['Steam', 'Epic', 'PSN', 'Xbox'],
    img: './assets/img/detroit.jpg',
    rating: 3
  }
];

// ADICIONA OS JOGOS NA HOME
const loadGames = (games) => {
  gameList.innerHTML = '';
  games.map(game => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('container__game')

    gameItem.innerHTML = `
      <img src="${game.img}" alt="${game.title}" class="game__image">
      <div class="game__info">
        <div class="game__rating">
          <img src="assets/img/star-fill.svg" alt="Estrela preenchida">
          <img src="assets/img/star-fill.svg" alt="Estrela preenchida">
          <img src="assets/img/star-fill.svg" alt "Estrela preenchida">
          <img src="assets/img/star.svg" alt="Estrela vazia">
          <img src="assets/img/star.svg" alt="Estrela vazia">
        </div>
        <div class="game__details">
          <h3 class="game__title">${game.title}</h3>
          <button type="button" class="btn btn__secondary" data-toggle="modal" data-target="#editGame-modal">
            Editar
          </button>
        </div>
        <div class="game__tags">
          <div class="game__tags-category">
            ${game.categorys.map((category) => `<div class="tag__game"><p>${category}</p></div>`).join('')}
          </div>
          <div class="game__tags-platform">
            ${game.plataform.map((platform) => `<div class="tag__plataform"><p>${platform}</p></div>`).join('')}
          </div>
        </div>
      </div>
    `;

    gameList.appendChild(gameItem)
  })
}
loadGames(games)

// RESET FORM GAME
const resetForm = () => {
  inputGameName.value = '';
  gamePhoto.value = ''
  selectedFileName.textContent = 'Enviar imagem';

  checkCategories.querySelectorAll('input:checked').forEach(checkbox => checkbox.checked = false);
  checkPlatforms.querySelectorAll('input:checked').forEach(checkbox => checkbox.checked = false);

  const ratingInputs = document.querySelectorAll('input[name="rating"]');
  ratingInputs.forEach(ratingInput => ratingInput.checked = false);
}

// GERENCIA INPUT FILE
gamePhoto.addEventListener('change', function (e) {
  const file = e.target.files[0];

  if (file) {
    selectedFileName.textContent = file.name;
  } else {
    selectedFileName.textContent = 'Enviar imagem';
  }

  if (file) {
    const reader = new FileReader();

    reader.onload = function (readerEvent) {
      imageUrl = readerEvent.target.result;
    };

    reader.readAsDataURL(file);
  }
});

// CRIA NOVO JOGO
const createGame = () => {
  if (inputGameName.value === '' || imageUrl === '') {
    alert('Preencha todos os campos');
  } else {
    const selectedCategories = Array.from(checkCategories.querySelectorAll('input:checked')).map(checkbox => checkbox.id);
    const selectedPlatforms = Array.from(checkPlatforms.querySelectorAll('input:checked')).map(checkbox => checkbox.id);

    games.unshift({
      id: games.length + 1,
      title: inputGameName.value,
      categorys: selectedCategories,
      plataform: selectedPlatforms,
      img: imageUrl,
      rating: 3
    });
    loadGames(games);
    resetForm();
  }
};

// ADICIONA OS INPUTS DE CATEGORIA NO MODAL-GAME
categories.map(category => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = category;

  const label = document.createElement('label');
  label.htmlFor = category;
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(category));

  checkCategories.appendChild(label);
});

// GERENCIA AS PLATAFORMAS
const loadPlatform = (platformsArray) => {
  const platformList = document.getElementById("platform-list");
  const checkPlatforms = document.getElementById("platforms-select");

  platformList.innerHTML = '';
  platformInput.value = ''
  platformsArray.map(platform => {
    const listItem = document.createElement('li');
    listItem.classList.add('platform-item');

    listItem.innerHTML = `
      <div class="platform-input__container">
        <input type="text" id="${platform}" name="${platform}" value="${platform}" class="platform-input"></input>
        <img src="assets/img/pen-icon.svg" class="platform-icon"/>
      </div>
      <img src="assets/img/icon-trash.svg" class="platform-image" onclick="removePlatform('${platform}')"/>
    `;

    platformList.appendChild(listItem);
  });

  checkPlatforms.innerHTML = ''
  platformsArray.map(platform => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = platform;

    const label = document.createElement('label');
    label.htmlFor = platform;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(platform));

    checkPlatforms.appendChild(label);
  });
}
loadPlatform(platformsArray)

// CRIA A PLATAFORMA
const createPlatform = () => {
  platformsArray.push(platformInput.value);
  loadPlatform(platformsArray);
}

// DELETA A PLATAFORMA
function removePlatform(platformDel) {
  const newArray = platformsArray.filter(platform => platform !== platformDel);
  platformsArray = newArray;
  games.map(game => {
    game.plataform = game.plataform.filter(plataform => plataform !== platformDel)
  })
  loadPlatform(platformsArray);
  loadGames(games);
}

// MOSTRAR DROPDOWN CATEGORIA
var expandedCategory = true;
function showCategories() {
  if (!expandedCategory) {
    checkCategories.style.display = "block";
    expandedCategory = true;
  } else {
    checkCategories.style.display = "none";
    expandedCategory = false;
  }
}

// MOSTRAR DROPDOWN PLATAFORMA
var expandedPlatform = true;
function showPlatforms() {
  if (!expandedPlatform) {
    checkPlatforms.style.display = "block";
    expandedPlatform = true;
  } else {
    checkPlatforms.style.display = "none";
    expandedPlatform = false;
  }
}
