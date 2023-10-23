const games = [
  {
    id: 1,
    title: 'Stardew Valley',
    categorys: ['jogado', 'jogando', 'zerado'],
    plataform: ['steam', 'epic', 'xbox'],
    img: './assets/img/image-game-1.png',
    rating: 3
  },
  {
    id: 2,
    title: 'Red Dead Redemption 2',
    categorys: ['jogado', 'jogando', 'zerado'],
    plataform: ['steam', 'epic', 'xbox'],
    img: './assets/img/image-game-2.png',
    rating: 3
  },
  {
    id: 3,
    title: 'Detroit: Become Human',
    categorys: ['jogado', 'jogando', 'zerado'],
    plataform: ['steam', 'epic', 'xbox'],
    img: './assets/img/image-game-3.png',
    rating: 3
  }
];

const gameListContainers = document.querySelectorAll('.game-list');

gameListContainers.forEach((container) => {
  games.forEach((game) => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('sec-main__container-game');

    gameItem.innerHTML = `
      <img src="${game.img}" alt="${game.title}" class="game-image">
      <div>
        <div>
          <img src="assets/img/star-fill.svg" alt="Estrela preenchida">
          <img src="assets/img/star-fill.svg" alt="Estrela preenchida">
          <img src="assets/img/star-fill.svg" alt "Estrela preenchida">
          <img src="assets/img/star.svg" alt="Estrela vazia">
          <img src="assets/img/star.svg" alt="Estrela vazia">
        </div>
        <div class="info-game">
          <h3>${game.title}</h3>
          <button class="btn btn__secondary">Editar</button>
        </div>
        <div class="container-tags">
          <div class="container-tags__tags-category">
            ${game.categorys.map((category) => `<div class="tag__game"><p>${category}</p></div>`).join('')}
          </div>
          <div class="container-tags__tags-platform">
            ${game.plataform.map((platform) => `<div class="tag__plataform"><p>${platform}</p></div>`).join('')}
          </div>
        </div>
      </div>
    `;

    container.appendChild(gameItem);
  });
});
