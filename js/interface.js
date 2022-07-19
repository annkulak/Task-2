function getHomeWorkPage() {
    const page = document.createElement('div');
    document.querySelector('body').insertAdjacentElement('afterBegin', page);
    page.classList.add('wrapper');

    const chapterPageContainer = document.createElement('div');
    chapterPageContainer.classList.add('home-work-number');
    page.appendChild(chapterPageContainer);

    const homeWorkNumber = document.createElement('h1');
    chapterPageContainer.appendChild(homeWorkNumber);
    homeWorkNumber.textContent = `домашнее задание №2: игра "крестики-нолики"`;
}

function getGameContainer() {

    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');
    document.querySelector('.wrapper').appendChild(gameContainer);

    const gameSizeContainer = document.createElement('div');
    gameSizeContainer.classList.add('game-size-container');
    gameContainer.append(gameSizeContainer);

    const gamePlatformContainer = document.createElement('div');
    gamePlatformContainer.classList.add('game-platform-container');
    gameContainer.append(gamePlatformContainer);

    const gameChoiceContainer = document.createElement('div');
    gameChoiceContainer.classList.add('game-choice-container');
    gameContainer.append(gameChoiceContainer);
}

function getSizeContainer() {

    const threeSizeButton = document.createElement('button');
    threeSizeButton.classList.add('size-button');
    threeSizeButton.id = 'level-1';
    document.querySelector('.game-size-container').appendChild(threeSizeButton);

    const fourSizeButton = document.createElement('button');
    fourSizeButton.classList.add('size-button');
    fourSizeButton.id = 'level-2';
    document.querySelector('.game-size-container').appendChild(fourSizeButton);

    const fiveSizeButton = document.createElement('button');
    fiveSizeButton.classList.add('size-button');
    fiveSizeButton.id = 'level-3';
    document.querySelector('.game-size-container').appendChild(fiveSizeButton);
};

function getGameInterface() {
    getHomeWorkPage();
    getGameContainer();
    getSizeContainer();
}

export { getGameInterface };