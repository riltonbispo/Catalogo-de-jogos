const categories = ['jogado', 'jogando', 'zerado', 'nao-recomendo'];
const plataforms = ['Steam', 'Epic', 'PSN', 'Xbox', 'PlayStore'];
const checkCategories = document.getElementById("categories-select");
const checkPlatforms = document.getElementById("platforms-select");
const checkGames = document.getElementById("games-select");
const platformList = document.getElementById("platform-list");
const gameList = document.getElementById('game-list');

const games = [
  {
    id: 1,
    title: 'Stardew Valley',
    categorys: ['jogado', 'jogando', 'zerado'],
    plataform: ['Steam', 'Epic', 'PSN', 'Xbox'],
    img: './assets/img/image-game-1.png',
    rating: 3
  },
  {
    id: 2,
    title: 'Red Dead Redemption 2',
    categorys: ['jogado', 'jogando', 'zerado'],
    plataform: ['Steam', 'Epic', 'PSN', 'Xbox'],
    img: './assets/img/image-game-2.png',
    rating: 3
  },
  {
    id: 3,
    title: 'Detroit: Become Human',
    categorys: ['jogado', 'jogando', 'zerado'],
    plataform: ['Steam', 'Epic', 'PSN', 'Xbox'],
    img: './assets/img/image-game-3.png',
    rating: 3
  }
];

// ADICIONA OS JOGOS NA HOME
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

// ADICIONA OS INPUTS DE PLATAFORMAS NO MODAL-GAME
plataforms.map(platform => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = platform;

  const label = document.createElement('label');
  label.htmlFor = platform;
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(platform));

  checkPlatforms.appendChild(label);
});

// ADICIONA OS INPUTS NO MODAL-PLATFORM
plataforms.map(platform => {
  const listItem = document.createElement('li');
  listItem.classList.add('platform-item');

  listItem.innerHTML = `
    <div class="platform-input__container">
      <input type="text" id=${platform} name=${platform} value=${platform} class="platform-input"></input>
      <img src="assets/img/pen-icon.svg" class="platform-icon"/>
    </div>
    <img src="assets/img/icon-trash.svg" class="platform-image" onclick="removePlatform(this)"/>
  `;

  platformList.appendChild(listItem);
});

function removePlatform(element) {
  const platformItem = element.parentElement;
  platformList.removeChild(platformItem);
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
